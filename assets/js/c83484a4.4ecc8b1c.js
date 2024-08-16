"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[20325],{4931:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var i=r(85893),o=r(11151);const n={sidebar_position:30},s="Custom Retriever",a={id:"go_module/store_file/custom",title:"Custom Retriever",description:"Simple retriever",source:"@site/versioned_docs/version-v1.33.0/go_module/store_file/custom.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/custom",permalink:"/docs/go_module/store_file/custom",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.33.0/go_module/store_file/custom.md",tags:[],version:"v1.33.0",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/docs/go_module/store_file/file"},next:{title:"Export data",permalink:"/docs/go_module/data_collection/"}},l={},c=[{value:"Simple retriever",id:"simple-retriever",level:2},{value:"Initializable retriever",id:"initializable-retriever",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"custom-retriever",children:"Custom Retriever"}),"\n",(0,i.jsx)(t.h2,{id:"simple-retriever",children:"Simple retriever"}),"\n",(0,i.jsxs)(t.p,{children:["To create a custom retriever you must have a ",(0,i.jsx)(t.code,{children:"struct"})," that implements the ",(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#Retriever",children:(0,i.jsx)(t.code,{children:"Retriever"})})," interface."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:"type Retriever interface {\n\tRetrieve(ctx context.Context) ([]byte, error)\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Retrieve"})," \tfunction is supposed to load the file and to return a ",(0,i.jsx)(t.code,{children:"[]byte"})," of your flag configuration file."]}),"\n",(0,i.jsxs)(t.p,{children:["You can check existing ",(0,i.jsx)(t.code,{children:"Retriever"})," ",(0,i.jsxs)(t.em,{children:["(",(0,i.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/retriever/fileretriever/retriever.go",children:"file"}),",\n",(0,i.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/retriever/s3retriever/retriever.go",children:"s3"}),", ...)"]})," to have an idea on how to do build your own."]}),"\n",(0,i.jsx)(t.h2,{id:"initializable-retriever",children:"Initializable retriever"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes you need to initialize your retriever before using it.\nFor example, if you want to connect to a database, you need to initialize the connection before using it."}),"\n",(0,i.jsxs)(t.p,{children:["To help you with that, you can use the ",(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#InitializableRetriever",children:(0,i.jsx)(t.code,{children:"InitializableRetriever"})})," interface."]}),"\n",(0,i.jsxs)(t.p,{children:["The only difference with the ",(0,i.jsx)(t.code,{children:"Retriever"})," interface is that the ",(0,i.jsx)(t.code,{children:"Init"})," func of your retriever will be called at the start of the application and the ",(0,i.jsx)(t.code,{children:"Shutdown"})," func will be called when closing GO Feature Flag."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"type InitializableRetriever interface {\n\tRetrieve(ctx context.Context) ([]byte, error)\n\tInit(ctx context.Context, logger *fflog.FFLogger) error\n\tShutdown(ctx context.Context) error\n\tStatus() retriever.Status\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To avoid any issue to call the ",(0,i.jsx)(t.code,{children:"Retrieve"})," function before the ",(0,i.jsx)(t.code,{children:"Init"})," function, you have to manage the status of your retriever.\nGO Feature Flag will try to call the ",(0,i.jsx)(t.code,{children:"Retrieve"})," function only if the status is ",(0,i.jsx)(t.code,{children:"RetrieverStatusReady"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var i=r(67294);const o={},n=i.createContext(o);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);