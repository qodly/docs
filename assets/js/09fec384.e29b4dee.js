"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[4768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"$attributes",title:"$attributes"},s=void 0,l={unversionedId:"api/$attributes",id:"api/$attributes",title:"$attributes",description:"Overview",source:"@site/docs/api/$attributes.md",sourceDirName:"api",slug:"/api/$attributes",permalink:"/docs/api/$attributes",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/api/$attributes.md",tags:[],version:"current",frontMatter:{id:"$attributes",title:"$attributes"},sidebar:"API",previous:{title:"$atomic/$atOnce",permalink:"/docs/api/$atomic$atOnce"},next:{title:"$binary",permalink:"/docs/api/$binary"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Functionality",id:"functionality",level:2},{value:"Definition",id:"definition",level:3},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"Fetching Normal Attributes of an Entity",id:"fetching-normal-attributes-of-an-entity",level:3},{value:"Fetching Related Entity Attribute",id:"fetching-related-entity-attribute",level:3},{value:"Fetching All Attributes of a Related Entity",id:"fetching-all-attributes-of-a-related-entity",level:3},{value:"Fetching Related Entities Attributes",id:"fetching-related-entities-attributes",level:3},{value:"Fetching Nested Related Entity Attributes",id:"fetching-nested-related-entity-attributes",level:3},{value:"Best Practices",id:"best-practices",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"$attributes")," endpoint allows you to specify and select related attributes from a dataclass in a REST request. This endpoint is useful when you want to retrieve specific attributes of related entities or related entities themselves."),(0,a.kt)("h2",{id:"functionality"},"Functionality"),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"$attributes")," endpoint allows you to specify and select attributes from a dataclass in a REST request. This endpoint is useful when you want to retrieve specific attributes of related entities or related entities themselves."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can apply ",(0,a.kt)("inlineCode",{parentName:"p"},"$attributes")," to an entity (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"People(1)"),") or an entity selection (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"People/$entityset/0AF4679A5C394746BFEB68D2162A19FF"),").")),(0,a.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"$attributes")," is not specified in a query, or if the ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," value is passed, all available attributes are extracted. The related entity attributes are extracted in a simple form: an object with property ",(0,a.kt)("inlineCode",{parentName:"p"},"__KEY")," (primary key) and ",(0,a.kt)("inlineCode",{parentName:"p"},"URI"),". Related entities attributes are not extracted."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /rest/{{dataClass}}(id)?$attributes={{attributePath}}\n")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("h3",{id:"fetching-normal-attributes-of-an-entity"},"Fetching Normal Attributes of an Entity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /rest/Payments[1]?$attributes=Amount,PaymentDate\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "__entityModel": "Payments",\n    "__DATACLASS": "Payments",\n    "__KEY": "1",\n    "__TIMESTAMP": "2024-05-09T17:01:51.479Z",\n    "__STAMP": 1,\n    "Amount": 124,\n    "PaymentDate": "!!2024-01-01!!"\n}\n')),(0,a.kt)("h3",{id:"fetching-related-entity-attribute"},"Fetching Related Entity Attribute"),(0,a.kt)("p",null,"Returns the related entity with simple form (deferred ",(0,a.kt)("inlineCode",{parentName:"p"},"__KEY")," property and ",(0,a.kt)("inlineCode",{parentName:"p"},"URI"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /rest/Orders(1)?$attributes=Purchaser\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "__entityModel": "Orders",\n    "__DATACLASS": "Orders",\n    "__KEY": "1",\n    "__TIMESTAMP": "2024-05-09T17:01:36.984Z",\n    "__STAMP": 1,\n    "Purchaser": {\n        "__deferred": {\n            "uri": "/rest/Users[1]",\n            "__KEY": "1"\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"fetching-all-attributes-of-a-related-entity"},"Fetching All Attributes of a Related Entity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /rest/Orders(1)?$attributes=Purchaser.*\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "__entityModel": "Orders",\n    "__DATACLASS": "Orders",\n    "__KEY": "1",\n    "__TIMESTAMP": "2024-05-09T17:01:36.984Z",\n    "__STAMP": 1,\n    "Purchaser": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2024-05-09T16:50:24.070Z",\n        "__STAMP": 3,\n        "ID": 1,\n        "Name": "user1",\n        "Email": "user1@example.com",\n        "Orders": {\n            "__deferred": {\n                "uri": "/rest/Users[1]/Orders?$expand=Orders"\n            }\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"fetching-related-entities-attributes"},"Fetching Related Entities Attributes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /rest/Orders(1)?$attributes=Purchaser.Name\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "__entityModel": "Orders",\n    "__DATACLASS": "Orders",\n    "__KEY": "1",\n    "__TIMESTAMP": "2024-05-09T17:01:36.984Z",\n    "__STAMP": 1,\n    "Purchaser": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2024-05-09T16:50:24.070Z",\n        "__STAMP": 3,\n        "Name": "user1"\n    }\n}\n')),(0,a.kt)("h3",{id:"fetching-nested-related-entity-attributes"},"Fetching Nested Related Entity Attributes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /rest/Payments[1]?$attributes=Order.OrderedProduct.Name\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "__entityModel": "Payments",\n    "__DATACLASS": "Payments",\n    "__KEY": "1",\n    "__TIMESTAMP": "2024-05-09T17:01:51.479Z",\n    "__STAMP": 1,\n    "Order": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2024-05-09T17:01:36.984Z",\n        "__STAMP": 1,\n        "OrderedProduct": {\n            "__KEY": "5",\n            "__TIMESTAMP": "2024-05-09T16:50:24.074Z",\n            "__STAMP": 5,\n            "Name": "product5"\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Specify Only Necessary Attributes:")," Limit the attributes you fetch to those necessary for your application to optimize performance and reduce payload size.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Combine with Other Query Parameters:")," Leverage other query parameters (",(0,a.kt)("inlineCode",{parentName:"p"},"$filter"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$orderby"),") to refine your data retrieval and performance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Handle Nested Attributes Carefully:")," Be mindful of the complexity and potential performance implications when fetching nested related attributes."))))}d.isMDXComponent=!0}}]);