"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={id:"objectClass",title:"objectClass"},o=void 0,s={unversionedId:"language/commands/objectClass",id:"language/commands/objectClass",title:"objectClass",description:"objectClass ( object object",source:"@site/docs/language/commands/objectClass.md",sourceDirName:"language/commands",slug:"/language/commands/objectClass",permalink:"/docs/language/commands/objectClass",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/language/commands/objectClass.md",tags:[],version:"current",frontMatter:{id:"objectClass",title:"objectClass"},sidebar:"Develop",previous:{title:"num",permalink:"/docs/language/commands/num"},next:{title:"objectCopy",permalink:"/docs/language/commands/objectCopy"}},c={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}],p={toc:i};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"objectClass")," ( ",(0,r.kt)("em",{parentName:"p"},"object")," : object ) : object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Object whose class is to be returned")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Class of object or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," if not found")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"objectClass")," command returns the class of the ",(0,r.kt)("em",{parentName:"p"},"object")," passed in parameter."),(0,r.kt)("p",null,"All objects inherit from the Object class. If ",(0,r.kt)("em",{parentName:"p"},"object")," is not an existing object, ",(0,r.kt)("inlineCode",{parentName:"p"},"objectClass")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"You created the Polygon class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"  //Class: Polygon\n\n constructor(size1 : integer, size2 : integer)\n this.area = size1*size2\n")),(0,r.kt)("p",null,"Then, in a method, you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," var poly, class : object\n poly = cs.Polygon.new(4,3)\n\n class = objectClass(poly)\n  //class contains Class: Polygon\n")),(0,r.kt)("h4",{id:"see-also"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/language/commands/objectEntries"},"objectEntries"),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/language/commands/objectValues"},"objectValues")))}m.isMDXComponent=!0}}]);