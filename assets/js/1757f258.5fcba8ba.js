"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[8823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,f=u["".concat(l,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"$format",title:"$format"},i=void 0,p={unversionedId:"api/$format",id:"api/$format",title:"$format",description:"Functionality",source:"@site/docs/api/$format.md",sourceDirName:"api",slug:"/api/$format",permalink:"/docs/api/$format",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/api/$format.md",tags:[],version:"current",frontMatter:{id:"$format",title:"$format"},sidebar:"API",previous:{title:"$filter",permalink:"/docs/api/$filter"},next:{title:"$imageformat",permalink:"/docs/api/$imageformat"}},l={},s=[{value:"Functionality",id:"functionality",level:2},{value:"Definition",id:"definition",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Supported Formats",id:"supported-formats",level:3},{value:"Combining with Other Parameters",id:"combining-with-other-parameters",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Using the Default JSON Format",id:"using-the-default-json-format",level:3},{value:"Using the Looker Format",id:"using-the-looker-format",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functionality"},"Functionality"),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$format")," endpoint allows you to specify the format in which data from a dataclass should be returned. This parameter is essential for integrating with different systems that require data in specific formats, such as JSON or Looker Studio."),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"$format")," parameter, append it to your GET request in the following manner:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /rest/{{dataClass}}?$format={{format}}\n")),(0,r.kt)("h3",{id:"supported-formats"},"Supported Formats"),(0,r.kt)("p",null,"The following formats are supported by the ",(0,r.kt)("inlineCode",{parentName:"p"},"$format")," parameter:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json")),(0,r.kt)("td",{parentName:"tr",align:null},"Standard REST server format (used by default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"looker")),(0,r.kt)("td",{parentName:"tr",align:null},"JSON format compliant with ",(0,r.kt)("a",{parentName:"td",href:"https://lookerstudio.google.com/"},"Looker Studio"))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," format, the data is returned in a simple, flat JSON structure. This is the default format if ",(0,r.kt)("inlineCode",{parentName:"p"},"$format")," is not specified. It is ideal for most general-purpose applications and integrations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"looker")," format, the data is structured to be compliant with Looker Studio's requirements. It includes additional metadata such as schema definitions and semantic information. This format is particularly useful for visualizing data in Looker Studio.")))),(0,r.kt)("h2",{id:"combining-with-other-parameters"},"Combining with Other Parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$format")," parameter can be combined with other parameters to customize and refine data retrieval and presentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"$filter"),": Apply filters to the data before formatting the response.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"$orderby"),": Sort the data before applying the format.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"$top/$limit")," and ",(0,r.kt)("strong",{parentName:"p"},"$skip"),": Limit the number of records and skip a certain number of records before formatting.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"$expand"),": Include related data in the formatted response.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"$attributes"),": Specify which attributes to include in the formatted response.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"$compute"),": Perform calculations on the data before formatting the response.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"$distinct"),": Retrieve distinct values from the data and format the response accordingly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"$method=entityset"),": Create an entity set and format the response based on the specified format."))),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("h3",{id:"using-the-default-json-format"},"Using the Default JSON Format"),(0,r.kt)("p",null,"If you do not specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"$format")," parameter, the data is returned in the standard JSON format by default."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /rest/Company\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "ID": 1,\n        "name": "Alpha Astral Animations",\n        "address": "Ullman Drive (82)"\n    },\n    {\n        "ID": 2,\n        "name": "Alpha Bart Computing",\n        "address": "Lehigh Square (110)"\n    },\n    {\n        "ID": 3,\n        "name": "Alpha Business Clock-making",\n        "address": "Larchmont Terrace (90)"\n    }\n]\n')),(0,r.kt)("h3",{id:"using-the-looker-format"},"Using the Looker Format"),(0,r.kt)("p",null,"To retrieve data in a format compliant with Looker Studio:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'GET /rest/Company?$filter="name begin a"&$top=3&$format=looker\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schema": [\n        {\n            "name": "ID",\n            "dataType": "NUMBER",\n            "semantics": {\n                "conceptType": "METRIC",\n                "semanticGroup": "NUMERIC",\n                "semanticType": "NUMBER"\n            }\n        },\n        {\n            "name": "Name",\n            "dataType": "STRING",\n            "semantics": {\n                "conceptType": "DIMENSION",\n                "semanticGroup": "TEXT",\n                "semanticType": "TEXT"\n            }\n        },\n        {\n            "name": "Email",\n            "dataType": "STRING",\n            "semantics": {\n                "conceptType": "DIMENSION",\n                "semanticGroup": "TEXT",\n                "semanticType": "TEXT"\n            }\n        }\n    ],\n    "rows": [\n        {\n            "values": [\n                10,\n                "Harry",\n                "user10@example.com"\n            ]\n        },\n        {\n            "values": [\n                9,\n                "test",\n                "user9@example.com"\n            ]\n        },\n        {\n            "values": [\n                8,\n                "user8",\n                "user8@example.com"\n            ]\n        }\n    ],\n    "filtersApplied": false,\n    "__COUNT": 10,\n    "__FIRST": 0\n}\n')))}u.isMDXComponent=!0}}]);