"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5429],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},g="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),g=p(n),c=r,u=g["".concat(i,".").concat(c)]||g[c]||f[c]||l;return n?a.createElement(u,o(o({ref:e},d),{},{components:n})):a.createElement(u,o({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m[g]="string"==typeof t?t:r,o[1]=m;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64080:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"monthOf",title:"monthOf"},o=void 0,m={unversionedId:"language/commands/monthOf",id:"language/commands/monthOf",title:"monthOf",description:"monthOf ( aDate integer",source:"@site/docs/language/commands/monthOf.md",sourceDirName:"language/commands",slug:"/language/commands/monthOf",permalink:"/docs/language/commands/monthOf",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/language/commands/monthOf.md",tags:[],version:"current",frontMatter:{id:"monthOf",title:"monthOf"},sidebar:"Develop",previous:{title:"mod",permalink:"/docs/language/commands/mod"},next:{title:"newCollection",permalink:"/docs/language/commands/newCollection"}},i={},p=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}],d={toc:p};function g(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"monthOf")," ( ",(0,r.kt)("em",{parentName:"p"},"aDate")," : date ) : integer"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aDate"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Date for which to return the month")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Number indicating the month of ",(0,r.kt)("em",{parentName:"td"},"aDate"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"monthOf")," command returns the month number of ",(0,r.kt)("em",{parentName:"p"},"aDate"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"monthOf")," returns the number of the month, not the name (see example)."),(0,r.kt)("p",null,"To compare the value returned by this function, Qodly provides the following predefined constants:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Constant"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"January"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"February"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"March"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"April"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"May"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"June"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"July"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"August"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"September"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"October"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"November"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"December"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"12")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," var vResult : integer\n vResult = monthOf(!12/25/92!) // vResult gets 12\n vResult = monthOf(currentDate) // vResult gets month of current date\n\n")),(0,r.kt)("h4",{id:"see-also"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/language/commands/dayOf"},(0,r.kt)("inlineCode",{parentName:"a"},"dayOf")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/language/commands/yearOf"},(0,r.kt)("inlineCode",{parentName:"a"},"yearOf"))))}g.isMDXComponent=!0}}]);