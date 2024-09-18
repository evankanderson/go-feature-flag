"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[22112],{83141:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=t(85893),n=t(11151),o=t(74866),i=t(85162);const s={sidebar_position:41,title:"Node.js",description:"How to use the OpenFeature Javascript SDK"},l="Node.js",u={id:"openfeature_sdk/server_providers/openfeature_javascript",title:"Node.js",description:"How to use the OpenFeature Javascript SDK",source:"@site/versioned_docs/version-v1.34.0/openfeature_sdk/server_providers/openfeature_javascript.mdx",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_javascript",permalink:"/docs/v1.34.0/openfeature_sdk/server_providers/openfeature_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.0/openfeature_sdk/server_providers/openfeature_javascript.mdx",tags:[],version:"v1.34.0",sidebarPosition:41,frontMatter:{sidebar_position:41,title:"Node.js",description:"How to use the OpenFeature Javascript SDK"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/v1.34.0/openfeature_sdk/server_providers/openfeature_java"},next:{title:"PHP",permalink:"/docs/v1.34.0/openfeature_sdk/server_providers/openfeature_php"}},d={},c=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"nodejs",children:"Node.js"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://www.npmjs.com/package/@openfeature/go-feature-flag-provider",children:(0,a.jsx)(r.img,{src:"https://img.shields.io/npm/v/%40openfeature%2Fgo-feature-flag-provider?color=blue&style=flat-square",alt:"NPM Version"})}),"\n",(0,a.jsx)(r.img,{src:"https://img.shields.io/npm/d18m/%40openfeature%2Fgo-feature-flag-provider?style=flat-square",alt:"NPM Downloads"})]}),"\n",(0,a.jsx)(r.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,a.jsxs)(r.p,{children:["The first things we will do is install the ",(0,a.jsx)(r.strong,{children:"Open Feature SDK"})," and the ",(0,a.jsx)(r.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code",children:[(0,a.jsx)(i.Z,{value:"yarn",label:"yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"yarn add @openfeature/server-sdk @openfeature/go-feature-flag-provider\n"})})}),(0,a.jsx)(i.Z,{value:"npm",label:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"npm i @openfeature/server-sdk @openfeature/go-feature-flag-provider\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,a.jsx)(r.p,{children:"To evaluate the flags you need to have an Open Feature configured in your app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,a.jsxs)(o.Z,{groupId:"code",children:[(0,a.jsx)(i.Z,{value:"javascript",label:"JavaScript",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"const {OpenFeature} = require(\"@openfeature/server-sdk\");\nconst {GoFeatureFlagProvider} = require(\"@openfeature/go-feature-flag-provider\");\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider = new GoFeatureFlagProvider({\n  endpoint: 'http://localhost:1031/' // DNS of your instance of relay proxy\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app')\n"})})}),(0,a.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"import {EvaluationContext, OpenFeature} from \"@openfeature/server-sdk\";\nimport {GoFeatureFlagProvider} from  \"@openfeature/go-feature-flag-provider\";\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider: GoFeatureFlagProvider = new GoFeatureFlagProvider({\nendpoint: 'http://localhost:1031/'\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app');\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,a.jsxs)(r.p,{children:["This code block explains how you can create an ",(0,a.jsx)(r.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,a.jsxs)(r.admonition,{type:"note",children:[(0,a.jsxs)(r.p,{children:["In this example, we are evaluating a ",(0,a.jsx)(r.code,{children:"boolean"})," flag, but other types are also available."]}),(0,a.jsx)(r.p,{children:(0,a.jsxs)(r.strong,{children:["Refer to the ",(0,a.jsx)(r.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})})]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code",children:[(0,a.jsx)(i.Z,{value:"javascript",label:"JavaScript",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier (mandatory)\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n   // flag \"flag-only-for-admin\" is true for the user\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n"})})}),(0,a.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext: EvaluationContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n  // flag \"flag-only-for-admin\" is true for the user\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,a.jsxs)(r.p,{children:["You can find the source of the provider in the ",(0,a.jsx)(r.a,{href:"https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag",children:(0,a.jsx)(r.code,{children:"open-feature/js-sdk-contrib"})})," repository."]})]})}function f(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>i});t(67294);var a=t(36905);const n={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){let{children:r,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,i),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>F});var a=t(67294),n=t(36905),o=t(12466),i=t(16550),s=t(20469),l=t(91980),u=t(67392),d=t(20812);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return c(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,u.lx)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function f(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.k6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:o}))),[u,c]=h({queryString:t,groupId:n}),[g,v]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,d.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),m=(()=>{const e=u??g;return f({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var v=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function j(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),n=s[t].value;n!==a&&(u(r),i(n))},c=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r),children:s.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>l.push(e),onKeyDown:c,onClick:d,...o,className:(0,n.Z)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function x(e){let{lazy:r,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function y(e){const r=g(e);return(0,b.jsxs)("div",{className:(0,n.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(j,{...r,...e}),(0,b.jsx)(x,{...r,...e})]})}function F(e){const r=(0,v.Z)();return(0,b.jsx)(y,{...e,children:c(e.children)},String(r))}},11151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>i});var a=t(67294);const n={},o=a.createContext(n);function i(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);