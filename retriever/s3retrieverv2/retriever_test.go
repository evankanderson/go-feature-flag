package s3retrieverv2

import (
	"context"
	"os"
	"testing"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/stretchr/testify/assert"
	"github.com/thomaspoignant/go-feature-flag/retriever"
	"github.com/thomaspoignant/go-feature-flag/testutils"
)

func Test_s3Retriever_Retrieve(t *testing.T) {
	type fields struct {
		downloader DownloaderAPI
		bucket     string
		item       string
		context    context.Context
	}
	tests := []struct {
		name    string
		fields  fields
		want    string
		wantErr bool
	}{
		{
			name: "File on S3",
			fields: fields{
				downloader: &testutils.S3ManagerV2Mock{
					TestDataLocation: "./testdata",
				},
				bucket: "Bucket",
				item:   "valid",
			},
			want:    "./testdata/flag-config.yaml",
			wantErr: false,
		},
		{
			name: "File not present S3",
			fields: fields{
				downloader: &testutils.S3ManagerV2Mock{
					TestDataLocation: "./testdata",
				},
				bucket: "Bucket",
				item:   "no-file",
			},
			wantErr: true,
		},
		{
			name: "File on S3 with context",
			fields: fields{
				downloader: &testutils.S3ManagerV2Mock{
					TestDataLocation: "./testdata",
				},
				bucket:  "Bucket",
				item:    "valid",
				context: context.Background(),
			},
			want:    "./testdata/flag-config.yaml",
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			awsConf, _ := config.LoadDefaultConfig(context.TODO())
			s := Retriever{
				Bucket:     tt.fields.bucket,
				Item:       tt.fields.item,
				AwsConfig:  &awsConf,
				downloader: tt.fields.downloader,
			}
			err := s.Init(context.Background(), nil)
			assert.NoError(t, err)
			defer func() {
				err := s.Shutdown(context.Background())
				assert.NoError(t, err)
			}()
			got, err := s.Retrieve(tt.fields.context)
			assert.Equal(t, tt.wantErr, err != nil, "Retrieve() error = %v, wantErr %v", err, tt.wantErr)
			if err == nil {
				want, err := os.ReadFile(tt.want)
				assert.NoError(t, err)
				assert.Equal(t, string(want), string(got), "Retrieve() got = %v, want %v", string(want), string(got))
			}
		})
	}
}

func TestRetriever_Init(t *testing.T) {
	t.Run("With no AwsConfig", func(t *testing.T) {
		t.Setenv("AWS_REGION", "us-west-2")
		s := Retriever{
			Bucket: "TestBucket",
			Item:   "TestItem",
		}
		err := s.Init(context.Background(), nil)
		assert.NoError(t, err)
		assert.NotNil(t, s.AwsConfig)
		assert.NotNil(t, s.downloader)
		assert.Equal(t, "us-west-2", s.AwsConfig.Region, "Setting the region from the environment variable should be copied to the aws config")
		assert.Equal(t, retriever.RetrieverReady, s.Status())
	})

	t.Run("With AwsConfig", func(t *testing.T) {
		t.Setenv("AWS_REGION", "us-west-2")
		awsConfig, err := config.LoadDefaultConfig(context.Background(), config.WithRegion("us-east-1"))
		assert.NoError(t, err)
		s := Retriever{
			Bucket:    "TestBucket",
			Item:      "TestItem",
			AwsConfig: &awsConfig,
		}
		err = s.Init(context.Background(), nil)
		assert.NoError(t, err)
		assert.NotNil(t, s.AwsConfig)
		assert.NotNil(t, s.downloader)
		assert.Equal(t, "us-east-1", s.AwsConfig.Region, "Setting the region from the AwsConfig should be used over the environment variable")
		assert.Equal(t, retriever.RetrieverReady, s.Status())
	})
}
