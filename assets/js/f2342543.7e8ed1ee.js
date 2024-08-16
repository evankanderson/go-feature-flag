"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[5337],{27735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(85893),i=n(11151);const s={sidebar_position:21,description:"How to create a rule to target specific users"},l="How to target specific users",a={id:"configure_flag/rule_format",title:"How to target specific users",description:"How to create a rule to target specific users",source:"@site/versioned_docs/version-v1.33.0/configure_flag/rule_format.md",sourceDirName:"configure_flag",slug:"/configure_flag/rule_format",permalink:"/docs/configure_flag/rule_format",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.33.0/configure_flag/rule_format.md",tags:[],version:"v1.33.0",sidebarPosition:21,frontMatter:{sidebar_position:21,description:"How to create a rule to target specific users"},sidebar:"tutorialSidebar",previous:{title:"How to configure a flag",permalink:"/docs/configure_flag/flag_format"},next:{title:"Rollout strategies",permalink:"/docs/category/rollout-strategies"}},o={},d=[{value:"Evaluation Context",id:"evaluation-context",level:2},{value:"Reserved properties in the evaluation context",id:"reserved-properties-in-the-evaluation-context",level:3},{value:"Rule format",id:"rule-format",level:2},{value:"Format details",id:"format-details",level:3},{value:"Query format",id:"query-format",level:3},{value:"Examples",id:"examples",level:4},{value:"Environments",id:"environments",level:2},{value:"Get the rule name in the metadata",id:"get-the-rule-name-in-the-metadata",level:2}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-to-target-specific-users",children:"How to target specific users"}),"\n",(0,r.jsx)(t.h2,{id:"evaluation-context",children:"Evaluation Context"}),"\n",(0,r.jsxs)(t.p,{children:["An evaluation context in a feature flagging system is crucial for determining the output of a feature flag evaluation.\nIt's a collection of pertinent data about the conditions under which the evaluation is being made.\nhis data can be supplied through a mix of static information ",(0,r.jsx)(t.em,{children:"(server name, IP, etc ...)"})," and dynamic inputs\n",(0,r.jsx)(t.em,{children:"(information about the user performing the action, etc ...)"}),", along with state information that is implicitly carried\nthrough the execution of the program."]}),"\n",(0,r.jsxs)(t.p,{children:["When using GO Feature Flag, it's often necessary to personalize the experience for different users.\nThis is where the concept of a ",(0,r.jsx)(t.strong,{children:"targeting key"})," comes into play.\nA targeting key is a unique identifier that represents the context of the evaluation ",(0,r.jsx)(t.em,{children:"(email, session id, a fingerprint or anything that is consistent)"}),",\nensuring that they are consistently exposed to the same variation of a feature, even across multiple visits or sessions."]}),"\n",(0,r.jsxs)(t.p,{children:["For instance, ",(0,r.jsx)(t.strong,{children:"GO Feature Flag"})," ensures that in cases where a feature is being rolled out to a percentage of users, based on the targeting key, they will see the same variation each time they encounter the feature flag."]}),"\n",(0,r.jsx)(t.p,{children:"The targeting key is a fundamental part of the evaluation context because it directly affects the determination of which feature variant is served to a particular user, and it maintains that continuity over time."}),"\n",(0,r.jsx)(t.h3,{id:"reserved-properties-in-the-evaluation-context",children:"Reserved properties in the evaluation context"}),"\n",(0,r.jsxs)(t.p,{children:["When you create an evaluation context some fields are reserved for GO Feature Flag.",(0,r.jsx)(t.br,{}),"\n","Those fields are used by GO Feature Flag directly, you can use them as will but you should be aware that they are used by GO Feature Flag."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gofeatureflag.currentDateTime"})}),(0,r.jsxs)(t.td,{children:["If this property is set, we will use this date as base for all the rollout strategies which implies dates ",(0,r.jsx)(t.em,{children:"(experimentation, progressive and scheduled)"}),".",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Format:"})," Date following the RF3339 format."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gofeatureflag.flagList"})}),(0,r.jsxs)(t.td,{children:["If this property is set, in the bulk evaluation mode (for the client SDK) we will only evaluate the flags in this list.",(0,r.jsx)("br",{}),"If empty or not set the default behavior is too evaluate all the flags.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Format:"})," []string"]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"rule-format",children:"Rule format"}),"\n",(0,r.jsx)(t.p,{children:"A rule is a configuration that allows to serve a variation based on some conditions."}),"\n",(0,r.jsx)(t.h3,{id:"format-details",children:"Format details"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{width:"20%",children:"Field"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsxs)("td",{children:["Name of your rule.",(0,r.jsx)("br",{}),"This is needed when your are updating a rule using a ",(0,r.jsx)("a",{href:"./rollout/scheduled",children:"scheduled rollout"}),"."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"query"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsxs)(t.p,{children:["Query represents an ",(0,r.jsx)("b",{children:"antlr query"})," in the ",(0,r.jsx)("b",{children:"nikunjy/rules"})," format.\n",(0,r.jsx)("br",{}),(0,r.jsx)("b",{children:"This field is mandatory in every rule used in the targeting field"}),"."]})}),(0,r.jsx)("p",{children:(0,r.jsxs)("i",{children:["See ",(0,r.jsx)("a",{href:"#query-format",children:"query format"})," to have the syntax."]})}),(0,r.jsx)("p",{children:(0,r.jsxs)("i",{children:["Note: if you use the field ",(0,r.jsx)("code",{children:"query"})," in a ",(0,r.jsx)("code",{children:"defaultRule"})," it will be ignored."]})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"variation"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsx)("td",{children:"Name of the variation to return."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"percentage"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:"Represents the percentage we should give to each variation."}),(0,r.jsx)("pre",{children:(0,r.jsxs)(t.p,{children:["percentage:",(0,r.jsx)("br",{}),"  variationA: 10.59",(0,r.jsx)("br",{}),"  variationB: 9.41",(0,r.jsx)("br",{}),"  variationC: 80"]})}),(0,r.jsx)("p",{children:"The format is the name of the variation and the percentage for this one."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"progressiveRollout"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)(t.p,{children:"Allows you to ramp up the percentage of your flag over time."})}),(0,r.jsx)("p",{children:(0,r.jsx)(t.p,{children:"You can decide at which percentage you start and end with in your release ramp.\nBefore the start date we will serve the initial percentage and afterwards, we will serve the end percentage."})}),(0,r.jsx)("p",{children:(0,r.jsxs)("i",{children:["See ",(0,r.jsx)("a",{href:"./rollout/progressive",children:"progressive rollout"})," to have more info on how to use it."]})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"disable"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsxs)("td",{children:[(0,r.jsxs)("p",{children:["Set to ",(0,r.jsx)("code",{children:"true"})," if you want to disable the rule."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Default:"})," ",(0,r.jsx)("code",{children:"true"}),"."]})]})]})]})]}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"variation"}),", ",(0,r.jsx)(t.code,{children:"percentage"})," and ",(0,r.jsx)(t.code,{children:"progressiveRollout"})," are optional but you ",(0,r.jsx)(t.strong,{children:"must have at least one of the three"}),"."]}),(0,r.jsxs)(t.p,{children:["If you have more than one field we will use the first one in the order\n",(0,r.jsx)(t.code,{children:"progressiveRollout"})," > ",(0,r.jsx)(t.code,{children:"percentage"})," > ",(0,r.jsx)(t.code,{children:"variation"}),"."]})]}),"\n",(0,r.jsx)(t.h3,{id:"query-format",children:"Query format"}),"\n",(0,r.jsxs)(t.p,{children:["The rule format is based on the ",(0,r.jsx)(t.a,{href:"https://github.com/nikunjy/rules",children:(0,r.jsx)(t.code,{children:"nikunjy/rules"})})," library."]}),"\n",(0,r.jsxs)(t.p,{children:["All the operations can be written in capitalized or lowercase characters (ex: ",(0,r.jsx)(t.code,{children:"eq"})," or ",(0,r.jsx)(t.code,{children:"EQ"})," can be used).\nLogical Operations supported are ",(0,r.jsx)(t.code,{children:"AND"})," & ",(0,r.jsx)(t.code,{children:"OR"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Compare Expression and their definitions (",(0,r.jsx)(t.code,{children:"a|b"})," means you can use one of either ",(0,r.jsx)(t.code,{children:"a"})," or ",(0,r.jsx)(t.code,{children:"b"}),"):"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Operator"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"eq"}),", ",(0,r.jsx)(t.code,{children:"=="})]}),(0,r.jsx)(t.td,{children:"equals to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"ne"}),", ",(0,r.jsx)(t.code,{children:"!="})]}),(0,r.jsx)(t.td,{children:"not equals to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"lt"}),", ",(0,r.jsx)(t.code,{children:"<"})]}),(0,r.jsx)(t.td,{children:"less than"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"gt"}),", ",(0,r.jsx)(t.code,{children:">"})]}),(0,r.jsx)(t.td,{children:"greater than"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"le"}),", ",(0,r.jsx)(t.code,{children:"<="})]}),(0,r.jsx)(t.td,{children:"less than equal to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"ge"}),", ",(0,r.jsx)(t.code,{children:">="})]}),(0,r.jsx)(t.td,{children:"greater than equal to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"co"})}),(0,r.jsx)(t.td,{children:"contains"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"sw"})}),(0,r.jsx)(t.td,{children:"starts with"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"ew"})}),(0,r.jsx)(t.td,{children:"ends with"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"in"})}),(0,r.jsx)(t.td,{children:"in a list"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"pr"})}),(0,r.jsx)(t.td,{children:"present"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"not"})}),(0,r.jsx)(t.td,{children:"not of a logical expression"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Select a specific user: ",(0,r.jsx)(t.code,{children:'key eq "example@example.com"'})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Select all identified users: ",(0,r.jsx)(t.code,{children:"anonymous ne true"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Select a user with a custom property: ",(0,r.jsx)(t.code,{children:'userId eq "12345"'})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Select on multiple criteria:\n",(0,r.jsxs)(t.em,{children:["All users with ids finishing by ",(0,r.jsx)(t.code,{children:"@test.com"})," that have the role ",(0,r.jsx)(t.code,{children:"backend engineer"})," in the ",(0,r.jsx)(t.code,{children:"pro"})," environment for the\ncompany ",(0,r.jsx)(t.code,{children:"go-feature-flag"})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'(key ew "@test.com") and (role eq "backend engineer") and (env eq "pro") and (company eq "go-feature-flag")\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"environments",children:"Environments"}),"\n",(0,r.jsxs)(t.p,{children:["When you initialise ",(0,r.jsx)(t.code,{children:"go-feature-flag"})," you can set an ",(0,r.jsx)(t.a,{href:"../go_module/configuration/#option_environment",children:"environment"})," for the instance of this SDK."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'ffclient.Init(ffclient.Config{\n    // ...\n    Environment:    "prod",\n    // ...\n})\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When an environment is set, it adds a new field in your user called ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"env"})})," that you can use in your queries.\nIt means that you can decide to activate a flag only for some ",(0,r.jsx)(t.strong,{children:"environment"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example of flag configuration based on the environment:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'my-flag:\n  variations:\n    A: "A"\n    B: "B"\n    C: "C"\n  targeting:\n    - name: Target pre environment\n      query: env eq "pre"\n      variation: A\n    - name: Target pro environment\n      query: env eq "pro"\n      variation: B\n  defaultRule:\n    variation: C\n'})}),"\n",(0,r.jsx)(t.h2,{id:"get-the-rule-name-in-the-metadata",children:"Get the rule name in the metadata"}),"\n",(0,r.jsxs)(t.p,{children:["When you use a rule in your targeting, you can get the name of the rule in the metadata of the variation.",(0,r.jsx)(t.br,{}),"\n","The information on what rule has been used to serve the variation is available in the metadata of the variation in the field called ",(0,r.jsx)(t.code,{children:"evaluatedRuleName"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you are interested about this information, you have to name your rules by adding the field ",(0,r.jsx)(t.code,{children:"name"})," in your rule. This name will be extract and added in the ",(0,r.jsx)(t.code,{children:"evaluatedRuleName"})," field of the metadata."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var r=n(67294);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);