"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["8131"],{17622:function(e,s,o){o.r(s),o.d(s,{metadata:()=>n,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>r});var n=JSON.parse('{"id":"orda/sessions","title":"User sessions","description":"When a user connects to a Qodly application, a user session is automatically opened on the Qodly server to manage their access with regards to their privileges. A session cookie is generated.","source":"@site/versioned_docs/version-1.0.0/orda/sessions.md","sourceDirName":"orda","slug":"/orda/sessions","permalink":"/docs/orda/sessions","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20orda%2Fsessions.md%20(1.0.0)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"1.0.0","frontMatter":{"id":"sessions","title":"User sessions"},"sidebar":"Develop","previous":{"title":"Queries","permalink":"/docs/orda/queries"},"next":{"title":"QodlyScript Reference","permalink":"/docs/category/qodlyscript"}}'),t=o("85893"),i=o("50065");let r={id:"sessions",title:"User sessions"},a=void 0,c={},l=[];function d(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["When a user connects to a Qodly application, a ",(0,t.jsx)(s.em,{children:"user session"})," is automatically opened on the Qodly server to manage their access with regards to their privileges. A session cookie is generated."]}),"\n",(0,t.jsxs)(s.p,{children:["The session automatically gets ",(0,t.jsx)(s.a,{href:"/docs/studio/roles/overview",children:"privileges"})," according to the ",(0,t.jsx)(s.strong,{children:"Profile"})," ",(0,t.jsx)(s.a,{href:"/docs/cloud/userAccountManagement#add-new-user",children:"associated to the user in the console"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The Qodly developer can also handle a user session through the ",(0,t.jsxs)(s.a,{href:"/docs/language/SessionClass",children:[(0,t.jsx)(s.code,{children:"Session"})," class"]}),". For example, you can get the list of privileges associated to the session using the ",(0,t.jsx)(s.a,{href:"/docs/language/SessionClass#getprivileges",children:(0,t.jsx)(s.code,{children:"getPrivileges()"})})," function, or store user information in the session's ",(0,t.jsx)(s.a,{href:"/docs/language/SessionClass#storage",children:(0,t.jsx)(s.code,{children:"storage"})})," property."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["A Qodly user session never expires, however the parent ",(0,t.jsx)(s.strong,{children:"Amazon Cognito"})," session expires after one week of inactivity."]})})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,s,o){o.d(s,{Z:function(){return a},a:function(){return r}});var n=o(67294);let t={},i=n.createContext(t);function r(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);