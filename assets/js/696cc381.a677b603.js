"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(67294),o=n(86010);const r={List:function(e){let{children:t,align:n="start",justifyContent:r="start"}=e;return a.createElement("div",{className:(0,o.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===r,"justify-center":"center"===r,"justify-end":"end"===r,"justify-between":"between"===r,"justify-around":"around"===r,"justify-evenly":"evenly"===r})},t)},Item:function(e){let{children:t,width:n}=e;const r=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,o]=(0,a.useState)(t.matches);return(0,a.useEffect)((()=>(t.onchange=e=>o(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return a.createElement("div",{className:(0,o.Z)({"flex-1":!n}),style:r?{}:{width:n}},t)}}},22255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(52203);const s={id:"craftedComponents",title:"Crafted components"},i=void 0,l={unversionedId:"studio/pageLoaders/craftedComponents",id:"studio/pageLoaders/craftedComponents",title:"Crafted components",description:"Crafted components allow you to create reusable components by encapsulating existing components along with their styles, child components, event configurations, and qodlysource references.",source:"@site/docs/studio/pageLoaders/craftedComponents.md",sourceDirName:"studio/pageLoaders",slug:"/studio/pageLoaders/craftedComponents",permalink:"/docs/studio/pageLoaders/craftedComponents",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/studio/pageLoaders/craftedComponents.md",tags:[],version:"current",frontMatter:{id:"craftedComponents",title:"Crafted components"},sidebar:"Develop",previous:{title:"Checkbox",permalink:"/docs/studio/pageLoaders/components/checkbox"},next:{title:"Templates",permalink:"/docs/studio/pageLoaders/templates"}},c={},d=[{value:"Crafting a Component",id:"crafting-a-component",level:2},{value:"CSS Class Behavior",id:"css-class-behavior",level:2},{value:"Local CSS Classes",id:"local-css-classes",level:3},{value:"Shared CSS Classes",id:"shared-css-classes",level:3},{value:"Qodly Source Reference",id:"qodly-source-reference",level:2},{value:"Shared Qodly Sources",id:"shared-qodly-sources",level:3},{value:"Page Qodly Sources",id:"page-qodly-sources",level:3},{value:"Event Configuration",id:"event-configuration",level:2}],p={toc:d};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Crafted components")," allow you to create reusable components by encapsulating existing components along with their styles, child components, event configurations, and qodlysource references. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Crafted components enable you to transform any component, except the Page component, into a reusable unit. ")),(0,o.kt)("h2",{id:"crafting-a-component"},"Crafting a Component"),(0,o.kt)("p",null,"Suppose you're striving for uniform design elements across your website, ensuring compatibility with both light and dark modes. To accomplish this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Element Selection"),": Choose the component on the canvas that you wish to transform into a crafted component.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Save as Craft"),": In the Tooltip menu, select the ellipsis icon ",(0,o.kt)("img",{src:n(90001).Z,style:{borderRadius:"6px",height:"20%",width:"20%"}})," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save as craft"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"65%"},(0,o.kt)("li",null,(0,o.kt)("span",{style:{fontWeight:"bold"}},"Name and Icon"),": Name your crafted component and search for the desired icon in the predefined list using the search bar."),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("li",null,(0,o.kt)("span",{style:{fontWeight:"bold"}},"Add"),": Click the ",(0,o.kt)("code",null,"Add")," button to complete the process."),(0,o.kt)("br",null)),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{src:n(71355).Z,style:{borderRadius:"6px",height:"70%",width:"70%"}}))))),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},"Once completed, your crafted component will be available in the ",(0,o.kt)("code",null,"Components > Crafted")," section. You can then drag and drop it onto the canvas as needed."),(0,o.kt)(r.ZP.Item,{width:"34%"},(0,o.kt)("img",{src:n(71239).Z,style:{borderRadius:"6px",height:"70%",width:"70%"}}))),(0,o.kt)("h2",{id:"css-class-behavior"},"CSS Class Behavior"),(0,o.kt)("h3",{id:"local-css-classes"},"Local CSS Classes"),(0,o.kt)("p",null,"When a component is styled with a ",(0,o.kt)("strong",{parentName:"p"},"local")," CSS class, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"styled_checkBox")," for the ",(0,o.kt)("strong",{parentName:"p"},"checkBox")," component, and you save it as a crafted component for subsequent reuse in another Page, two scenarios emerge:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"First Scenario"),": If the target Page lacks a ",(0,o.kt)("strong",{parentName:"p"},"local")," CSS class matching the one in the crafted component, the crafted component's CSS class will be added as a ",(0,o.kt)("strong",{parentName:"p"},"local")," CSS class within the target Page.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Second Scenario"),": In the case where the target Page already has a ",(0,o.kt)("strong",{parentName:"p"},"local")," CSS class of the same name, incorporating the crafted component will not override the existing ",(0,o.kt)("strong",{parentName:"p"},"local")," CSS class. Instead, the crafted component will use the ",(0,o.kt)("strong",{parentName:"p"},"local")," CSS class from the target Page. Should you delete the ",(0,o.kt)("strong",{parentName:"p"},"local")," CSS class in the target Page and subsequently attempt to re-add the crafted component, you will observe the addition of the ",(0,o.kt)("strong",{parentName:"p"},"local")," CSS class, accompanied by the appropriate styles."))),(0,o.kt)("p",null,"Here's a glimpse of how it will look and behave in action:"),(0,o.kt)("img",{src:n(88634).Z,style:{borderRadius:"6px",height:"70%",width:"70%"}}),(0,o.kt)("h3",{id:"shared-css-classes"},"Shared CSS Classes"),(0,o.kt)("p",null,"When a component is styled with a ",(0,o.kt)("strong",{parentName:"p"},"shared")," CSS class and you save it as a crafted component for subsequent reuse in another Page, the shared CSS class is maintained across all Pages."),(0,o.kt)("h2",{id:"qodly-source-reference"},"Qodly Source Reference"),(0,o.kt)("p",null,"Crafted components come with references to qodlysources, however, the actual qodlysources themselves are not bundled. This leads to two distinct scenarios:"),(0,o.kt)("h3",{id:"shared-qodly-sources"},"Shared Qodly Sources"),(0,o.kt)("p",null,"When a ",(0,o.kt)("strong",{parentName:"p"},"shared qodlysource")," is used within a crafted component, it retains its connection across Pages. This ensures that the ",(0,o.kt)("strong",{parentName:"p"},"shared qodlysource")," remains linked, regardless of the Page in which the crafted component is employed."),(0,o.kt)("h3",{id:"page-qodly-sources"},"Page Qodly Sources"),(0,o.kt)("p",null,"With ",(0,o.kt)("strong",{parentName:"p"},"Page qodlysources"),", caution is needed. ",(0,o.kt)("strong",{parentName:"p"},"Page qodlysources")," linked to the crafted component from the originating Page will not be automatically imported into the target Page where you aim to implement it. To ensure the intended functionality, you must manually establish these qodlysource connections in the target Page or employ the shared qodlysources."),(0,o.kt)("h2",{id:"event-configuration"},"Event Configuration"),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"35%"},"The event configuration of a crafted component remains intact upon placement onto the canvas. If the crafted component holds specific event configurations from its original Page, these configurations persist when you position the crafted component on a new canvas. ",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),"However, it's important to note that while the event configuration is preserved, adjustments might be necessary to ensure alignment with the context of the new Page."),(0,o.kt)(r.ZP.Item,{width:"55%"},(0,o.kt)("img",{src:n(56958).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("p",null,"Potential adjustments could include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Event Targets"),": Ensure that the events are targeting the correct elements in the new Page.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Event Actions"),": Verify that the actions triggered by events are appropriate for the new context. For example, an action that shows a specific message might need to be updated to display a different message relevant to the new Page.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Event Conditions"),": Check if any conditions tied to events still hold true in the new Page."))))}u.isMDXComponent=!0},71239:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/craftedComponent_CraftedSection-237364eda27a8fa1d1aa8f2850d14080.png"},56958:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/craftedComponent_Event-ff29f5d54e50533932ea62d2310a9264.gif"},90001:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/craftedComponent_SaveAsCraft-2d9540bfbd1b94bb8589c5563606a3eb.png"},88634:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/craftedComponent_localCSSclass-ec7b7e853836313b05149b0c2c5672ca.gif"},71355:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/craftedComponent_nameIcon-9cdfec6b3d7f03cfa0db3e73c040d0a5.png"}}]);