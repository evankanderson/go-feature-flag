package fileexporter_test

import (
	"context"
	"os"
	"path/filepath"
	"runtime"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/thomaspoignant/go-feature-flag/exporter"
	"github.com/thomaspoignant/go-feature-flag/exporter/fileexporter"
	"github.com/thomaspoignant/go-feature-flag/utils/fflog"
	"github.com/xitongsys/parquet-go-source/local"
	"github.com/xitongsys/parquet-go/parquet"
	"github.com/xitongsys/parquet-go/reader"
)

func TestFile_Export(t *testing.T) {
	// Create a temporary directory for test file operations
	tempDir, err := os.MkdirTemp("", "fileexporter-test")
	if err != nil {
		t.Fatalf("Failed to create temp dir: %v", err)
	}
	defer os.RemoveAll(tempDir) // Clean up after tests

	hostname, _ := os.Hostname()
	type fields struct {
		Format                  string
		Filename                string
		CsvTemplate             string
		OutputDir               string
		ParquetCompressionCodec string
	}
	type args struct {
		logger        *fflog.FFLogger
		featureEvents []exporter.FeatureEvent
	}
	type expected struct {
		fileNameRegex string
		content       string
		featureEvents []exporter.FeatureEvent
	}
	tests := []struct {
		name     string
		fields   fields
		args     args
		wantErr  bool
		expected expected
		setup    func(t *testing.T, dir string)
		teardown func(t *testing.T, dir string)
	}{
		{
			name:    "all default json",
			wantErr: false,
			fields:  fields{},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: "YO2", Default: false, Version: "127", Source: "SERVER",
					},
				},
			},
			expected: expected{
				fileNameRegex: "^flag-variation-" + hostname + "-[0-9]*\\.json$",
				content:       "./testdata/all_default.json",
			},
		},
		{
			name:    "all default csv",
			wantErr: false,
			fields: fields{
				Format: "csv",
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: "YO2", Default: false, Source: "SERVER",
					},
				},
			},
			expected: expected{
				fileNameRegex: "^flag-variation-" + hostname + "-[0-9]*\\.csv",
				content:       "./testdata/all_default.csv",
			},
		},
		{
			name:    "all default parquet",
			wantErr: false,
			fields: fields{
				Format:                  "parquet",
				ParquetCompressionCodec: parquet.CompressionCodec_SNAPPY.String(),
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: "YO2", Default: false, Version: "127", Source: "SERVER",
					},
				},
			},
			expected: expected{
				fileNameRegex: "^flag-variation-" + hostname + "-[0-9]*\\.parquet$",
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: `"YO"`, Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: `"YO2"`, Default: false, Version: "127", Source: "SERVER",
					},
				},
			},
		},
		{
			name:    "custom CSV format",
			wantErr: false,
			fields: fields{
				Format:      "csv",
				CsvTemplate: "{{ .Kind}};{{ .ContextKind}}\n",
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: "YO2", Default: false, Source: "SERVER",
					},
				},
			},
			expected: expected{
				fileNameRegex: "^flag-variation-" + hostname + "-[0-9]*\\.csv",
				content:       "./testdata/custom_csv_format.csv",
			},
		},
		{
			name:    "complex parquet value",
			wantErr: false,
			fields: fields{
				Format:                  "parquet",
				ParquetCompressionCodec: parquet.CompressionCodec_UNCOMPRESSED.String(),
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind:         "feature",
						ContextKind:  "anonymousUser",
						UserKey:      "ABCD",
						CreationDate: 1617970547,
						Key:          "random-key",
						Variation:    "Default",
						Value: map[string]interface{}{
							"string": "string",
							"bool":   true,
							"float":  1.23,
							"int":    1,
						},
						Default: false,
						Source:  "SERVER",
					},
				},
			},
			expected: expected{
				fileNameRegex: "^flag-variation-" + hostname + "-[0-9]*\\.parquet$",
				featureEvents: []exporter.FeatureEvent{
					{
						Kind:         "feature",
						ContextKind:  "anonymousUser",
						UserKey:      "ABCD",
						CreationDate: 1617970547,
						Key:          "random-key",
						Variation:    "Default",
						Value:        `{"bool":true,"float":1.23,"int":1,"string":"string"}`,
						Default:      false,
						Source:       "SERVER",
					},
				},
			},
		},
		{
			name:    "custom file name",
			wantErr: false,
			fields: fields{
				Format:   "json",
				Filename: "{{ .Format}}-test-{{ .Timestamp}}",
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: "YO2", Default: false, Source: "SERVER",
					},
				},
			},
			expected: expected{
				fileNameRegex: "^json-test-[0-9]*$",
				content:       "./testdata/custom_file_name.json",
			},
		},
		{
			name:    "invalid format",
			wantErr: false,
			fields: fields{
				Format: "xxx",
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: "YO2", Default: false, Version: "127", Source: "SERVER",
					},
				},
			},
			expected: expected{
				fileNameRegex: "^flag-variation-" + hostname + "-[0-9]*\\.xxx$",
				content:       "./testdata/all_default.json",
			},
		},
		{
			name:    "non-existent outputdir",
			wantErr: false,
			fields: fields{
				OutputDir: filepath.Join(tempDir, "non-existent-dir"),
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: "YO2", Default: false, Version: "127", Source: "SERVER",
					},
				},
			},
			expected: expected{
				fileNameRegex: "^flag-variation-" + hostname + "-[0-9]*\\.json$",
				content:       "./testdata/all_default.json",
			},
		},
		{
			name:    "invalid filename template",
			wantErr: true,
			fields: fields{
				Filename: "{{ .InvalidField}}",
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: "YO2", Default: false, Source: "SERVER",
					},
				},
			},
		},
		{
			name:    "invalid csv formatter",
			wantErr: true,
			fields: fields{
				Format:      "csv",
				CsvTemplate: "{{ .Foo}}",
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: "YO2", Default: false, Source: "SERVER",
					},
				},
			},
		},
		{
			name:    "outputdir with invalid permissions",
			wantErr: true,
			fields: fields{
				Format:    "parquet",
				OutputDir: filepath.Join(tempDir, "invalid-permissions-dir"),
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
				},
			},
			setup: func(t *testing.T, dir string) {
				err := os.MkdirAll(dir, 0755)
				assert.NoError(t, err)
				err = os.Chmod(dir, 0000) // Remove all permissions
				assert.NoError(t, err)
			},
			teardown: func(t *testing.T, dir string) {
				err := os.Chmod(dir, 0755) // Restore permissions for cleanup
				assert.NoError(t, err)
			},
		},
		{
			name:    "outputdir with trailing slash",
			wantErr: false,
			fields: fields{
				Format:    "json",
				OutputDir: filepath.Join(tempDir, "dir-with-trailing-slash") + "/",
			},
			args: args{
				featureEvents: []exporter.FeatureEvent{
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "ABCD", CreationDate: 1617970547, Key: "random-key",
						Variation: "Default", Value: "YO", Default: false, Source: "SERVER",
					},
					{
						Kind: "feature", ContextKind: "anonymousUser", UserKey: "EFGH", CreationDate: 1617970701, Key: "random-key",
						Variation: "Default", Value: "YO2", Default: false, Version: "127", Source: "SERVER",
					},
				},
			},
			expected: expected{
				fileNameRegex: "^flag-variation-" + hostname + "-[0-9]*\\.json$",
				content:       "./testdata/all_default.json",
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			outputDir := tt.fields.OutputDir
			if tt.fields.OutputDir == "" {
				outputDir, _ = os.MkdirTemp("", "fileExporter")
				defer os.Remove(outputDir)
			}

			if tt.setup != nil {
				tt.setup(t, outputDir)
			}

			if tt.teardown != nil {
				defer tt.teardown(t, outputDir)
			}

			f := &fileexporter.Exporter{
				Format:                  tt.fields.Format,
				OutputDir:               outputDir,
				Filename:                tt.fields.Filename,
				CsvTemplate:             tt.fields.CsvTemplate,
				ParquetCompressionCodec: tt.fields.ParquetCompressionCodec,
			}
			err := f.Export(context.Background(), tt.args.logger, tt.args.featureEvents)
			if tt.wantErr {
				assert.Error(t, err, "export method should error")
				return
			}

			assert.NoError(t, err)

			// Check if the directory was created
			_, err = os.Stat(outputDir)
			assert.NoError(t, err, "Output directory should exist")

			files, _ := os.ReadDir(outputDir)
			assert.Equal(t, 1, len(files), "Directory %s should have only one file", outputDir)
			assert.Regexp(t, tt.expected.fileNameRegex, files[0].Name(), "Invalid file name")

			if tt.fields.Format == "parquet" {
				fr, err := local.NewLocalFileReader(outputDir + "/" + files[0].Name())
				assert.NoError(t, err)
				defer fr.Close()
				pr, err := reader.NewParquetReader(fr, new(exporter.FeatureEvent), int64(runtime.NumCPU()))
				assert.NoError(t, err)
				defer pr.ReadStop()
				gotFeatureEvents := make([]exporter.FeatureEvent, pr.GetNumRows())
				err = pr.Read(&gotFeatureEvents)
				assert.NoError(t, err)
				assert.ElementsMatch(t, tt.expected.featureEvents, gotFeatureEvents)
				return
			}

			expectedContent, _ := os.ReadFile(tt.expected.content)
			gotContent, _ := os.ReadFile(outputDir + "/" + files[0].Name())
			assert.Equal(t, string(expectedContent), string(gotContent), "Wrong content in the output file")
		})
	}
}

func TestFile_IsBulk(t *testing.T) {
	exporter := fileexporter.Exporter{}
	assert.True(t, exporter.IsBulk(), "DeprecatedExporter is a bulk exporter")
}
