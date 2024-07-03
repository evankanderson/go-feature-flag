"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[60095],{84821:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>f});var n=t(85893),r=t(11151),o=t(74866),i=t(85162),l=t(9617),s=t(9286);const u={sidebar_position:40,title:"Java",description:"How to use the OpenFeature JAVA SDK"},d="JAVA SDK usage",c={id:"openfeature_sdk/server_providers/openfeature_java",title:"Java",description:"How to use the OpenFeature JAVA SDK",source:"@site/versioned_docs/version-v1.30.0/openfeature_sdk/server_providers/openfeature_java.mdx",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_java",permalink:"/docs/v1.30.0/openfeature_sdk/server_providers/openfeature_java",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.30.0/openfeature_sdk/server_providers/openfeature_java.mdx",tags:[],version:"v1.30.0",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"Java",description:"How to use the OpenFeature JAVA SDK"},sidebar:"tutorialSidebar",previous:{title:"GO",permalink:"/docs/v1.30.0/openfeature_sdk/server_providers/openfeature_go"},next:{title:"Node.js",permalink:"/docs/v1.30.0/openfeature_sdk/server_providers/openfeature_javascript"}},p={},f=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function v(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"java-sdk-usage",children:"JAVA SDK usage"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://search.maven.org/artifact/dev.openfeature.contrib.providers/go-feature-flag",children:(0,n.jsx)(a.img,{src:"https://img.shields.io/maven-central/v/dev.openfeature.contrib.providers/go-feature-flag?color=blue&style=flat-square",alt:"Maven Central Version"})})}),"\n",(0,n.jsx)(a.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,n.jsxs)(a.p,{children:["The first thing we will do is install the ",(0,n.jsx)(a.strong,{children:"Open Feature SDK"})," and the ",(0,n.jsx)(a.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,n.jsxs)(o.Z,{groupId:"code",children:[(0,n.jsx)(i.Z,{value:"maven",label:"maven",children:(0,n.jsx)(s.Z,{language:"xml",showLineNumbers:!0,children:`<dependency>\n    <groupId>dev.openfeature</groupId>\n    <artifactId>sdk</artifactId>\n    <artifactId>${l.qg.SZ}</artifactId>\n</dependency>\n<dependency>\n    <groupId>dev.openfeature.contrib.providers</groupId>\n    <artifactId>go-feature-flag</artifactId>\n    <version>${l.qg.m1}</version>\n</dependency>`})}),(0,n.jsx)(i.Z,{value:"gradle",label:"gradle",children:(0,n.jsx)(s.Z,{language:"toml",showLineNumbers:!0,children:`implementation group: 'dev.openfeature', name: 'javasdk', version: '${l.qg.SZ}'\nimplementation group: 'dev.openfeature.contrib.providers', name: 'go-feature-flag', version: '${l.qg.m1}'`})})]}),"\n",(0,n.jsx)(a.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,n.jsx)(a.p,{children:"To evaluate the flag you need to have an Open Feature configured in your app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,n.jsxs)(o.Z,{groupId:"code",children:[(0,n.jsx)(i.Z,{value:"java",label:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'import dev.openfeature.contrib.providers.gofeatureflag.GoFeatureFlagProvider;\nimport dev.openfeature.contrib.providers.gofeatureflag.GoFeatureFlagProviderOptions;\nimport dev.openfeature.sdk.EvaluationContext;\nimport dev.openfeature.sdk.MutableContext;\nimport dev.openfeature.sdk.OpenFeatureAPI;\n\n// ...\n\nGoFeatureFlagProviderOptions options = GoFeatureFlagProviderOptions.builder().endpoint("http://localhost:1031/").build();\nGoFeatureFlagProvider provider = new GoFeatureFlagProvider(options);\n\nOpenFeatureAPI.getInstance().setProvider(provider);\nOpenFeatureAPI api = OpenFeatureAPI.getInstance();\nClient featureFlagClient = api.getClient();\n'})})}),(0,n.jsx)(i.Z,{value:"kotlin",label:"Kotlin",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'import dev.openfeature.contrib.providers.gofeatureflag.GoFeatureFlagProvider\nimport dev.openfeature.contrib.providers.gofeatureflag.GoFeatureFlagProviderOptions\nimport dev.openfeature.sdk.EvaluationContext\nimport dev.openfeature.sdk.MutableContext\nimport dev.openfeature.sdk.OpenFeatureAPI\n\n// ...\n\nval options = GoFeatureFlagProviderOptions.builder().endpoint("http://localhost:1031/").build()\nval provider = GoFeatureFlagProvider(options)\n\nOpenFeatureAPI.getInstance().provider = provider\n// wait for the provider to be ready\nval api = OpenFeatureAPI.getInstance()\nval featureFlagClient = api.client\n'})})})]}),"\n",(0,n.jsx)(a.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,n.jsxs)(a.p,{children:["This code block explain how you can create an ",(0,n.jsx)(a.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsxs)(a.p,{children:["In this example we are evaluating a ",(0,n.jsx)(a.code,{children:"boolean"})," flag, but other types are available."]}),(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.strong,{children:["Refer to the ",(0,n.jsx)(a.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})})]}),"\n",(0,n.jsxs)(o.Z,{groupId:"code",children:[(0,n.jsx)(i.Z,{value:"java",label:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nEvaluationContext userContext = new MutableContext("1d1b9238-2591-4a47-94cf-d2bc080892f1")\n  .add("firstname", "john")\n  .add("lastname", "doe")\n  .add("email","john.doe@gofeatureflag.org")\n  .add("admin", true)\n  .add("anonymous", false);\n\nBoolean adminFlag = featureFlagClient.getBooleanValue("flag-only-for-admin", false, userContext);\nif (adminFlag) {\n    // flag "flag-only-for-admin" is true for the user\n} else {\n    // flag "flag-only-for-admin" is false for the user\n}\n'})})}),(0,n.jsx)(i.Z,{value:"kotlin",label:"Kotlin",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nval userContext: EvaluationContext = MutableContext("1d1b9238-2591-4a47-94cf-d2bc080892f1")\n  .add("firstname", "john")\n  .add("lastname", "doe")\n  .add("email", "john.doe@gofeatureflag.org")\n  .add("admin", true)\n  .add("anonymous", false)\n\nval adminFlag = featureFlagClient.getBooleanValue("bool_targeting_match", false, userContext)\nif (adminFlag) {\n    // flag "flag-only-for-admin" is true for the user\n} else {\n    // flag "flag-only-for-admin" is false for the user\n}\n'})})})]}),"\n",(0,n.jsx)(a.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,n.jsxs)(a.p,{children:["You can find the source of the provider in the ",(0,n.jsx)(a.a,{href:"https://github.com/open-feature/java-sdk-contrib/tree/main/providers/go-feature-flag",children:(0,n.jsx)(a.code,{children:"open-feature/java-sdk-contrib"})})," repository."]})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>i});t(67294);var n=t(36905);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){let{children:a,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>F});var n=t(67294),r=t(36905),o=t(12466),i=t(16550),l=t(20469),s=t(91980),u=t(67392),d=t(20812);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return c(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function f(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,o=p(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!f({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[u,c]=v({queryString:t,groupId:r}),[h,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,d.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),m=(()=>{const e=u??h;return f({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var g=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){let{className:a,block:t,selectedValue:n,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const a=e.currentTarget,t=s.indexOf(a),r=l[t].value;r!==n&&(u(a),i(r))},c=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>s.push(e),onKeyDown:c,onClick:d,...o,className:(0,r.Z)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function y(e){const a=h(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(x,{...a,...e}),(0,b.jsx)(j,{...a,...e})]})}function F(e){const a=(0,g.Z)();return(0,b.jsx)(y,{...e,children:c(e.children)},String(a))}},9617:e=>{e.exports=JSON.parse('{"qg":{"SZ":"1.9.0","fl":"0.0.1-beta.2","m1":"0.2.22","tW":"0.3.0"}}')}}]);