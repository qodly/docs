"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["2561"],{93694:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>o,assets:()=>d,toc:()=>a,frontMatter:()=>c});var s=JSON.parse('{"id":"language/commands/trunc","title":"trunc","description":"trunc ( number integer) : number","source":"@site/versioned_docs/version-1.0.0/language/commands/trunc.md","sourceDirName":"language/commands","slug":"/language/commands/trunc","permalink":"/docs/language/commands/trunc","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2Fcommands%2Ftrunc.md%20(1.0.0)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"1.0.0","frontMatter":{"id":"trunc","title":"trunc"},"sidebar":"Develop","previous":{"title":"true","permalink":"/docs/language/commands/true"},"next":{"title":"uppercase","permalink":"/docs/language/commands/uppercase"}}'),r=n("85893"),l=n("50065");let c={id:"trunc",title:"trunc"},i=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function u(e){let t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"trunc"})," ( ",(0,r.jsx)(t.em,{children:"number"})," : number, ",(0,r.jsx)(t.em,{children:"places"})," : integer) : number"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"}}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(t.td,{children:"Number to be truncated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"places"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(t.td,{children:"Number of decimal places used for truncating"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Result"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsxs)(t.td,{children:["Number with its decimal part truncated to the number of decimal places specified by ",(0,r.jsx)(t.em,{children:"places"})]})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"trunc"})," returns ",(0,r.jsx)(t.em,{children:"number"})," with its decimal part truncated to the number of decimal places specified by ",(0,r.jsx)(t.em,{children:"places"}),". ",(0,r.jsx)(t.code,{children:"trunc"})," always truncates toward negative infinity."]}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.em,{children:"places"})," is positive, ",(0,r.jsx)(t.em,{children:"number"})," is truncated to ",(0,r.jsx)(t.em,{children:"places"})," decimal places. If ",(0,r.jsx)(t.em,{children:"places"})," is negative, number is truncated on the left of the decimal point."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-qs",children:" var vlResult : number\n vlResult = trunc(216.897,1) // vlResult gets 216.8\n vlResult = trunc(216.897,-1) // vlResult gets 210\n vlResult = trunc(-216.897,1) // vlResult gets \u2013216.9\n vlResult = trunc(-216.897,-1) // vlResult gets \u2013220\n\n"})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/language/commands/round",children:(0,r.jsx)(t.code,{children:"round"})})})]})}function o(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return c}});var s=n(67294);let r={},l=s.createContext(r);function c(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);