"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["9655"],{14657:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>c,default:()=>x,assets:()=>l,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"language/commands/processInfo","title":"processInfo","description":"processInfo ( processNumber object","source":"@site/versioned_docs/version-1.0.0/language/commands/processInfo.md","sourceDirName":"language/commands","slug":"/language/commands/processInfo","permalink":"/docs/language/commands/processInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2Fcommands%2FprocessInfo.md%20(1.0.0)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"1.0.0","frontMatter":{"id":"processInfo","title":"processInfo"},"sidebar":"Develop","previous":{"title":"position","permalink":"/docs/language/commands/position"},"next":{"title":"processNumber","permalink":"/docs/language/commands/processNumber"}}'),t=n("85893"),d=n("50065");let i={id:"processInfo",title:"processInfo"},c=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"processInfo"})," ( ",(0,t.jsx)(s.em,{children:"processNumber"})," : integer ) : object"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"center"}}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"processNumber"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"\u2192"}),(0,t.jsx)(s.td,{children:"Process number"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Result"}),(0,t.jsx)(s.td,{children:"object"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"\u2190"}),(0,t.jsx)(s.td,{children:"Information about the process"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"processInfo"})," command returns an object providing detailed information about process whose number you pass in ",(0,t.jsx)(s.em,{children:"processNumber"}),". If you pass an incorrect process number, the command returns a null object."]}),"\n",(0,t.jsx)(s.p,{children:"The returned object contains the following properties:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Property"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpuTime"}),(0,t.jsx)(s.td,{children:"number"}),(0,t.jsx)(s.td,{children:"Running time (seconds)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpuUsage"}),(0,t.jsx)(s.td,{children:"number"}),(0,t.jsx)(s.td,{children:"Percentage of time devoted to this process (between 0 and 1)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"creationDateTime"}),(0,t.jsx)(s.td,{children:"string (Date ISO 8601)"}),(0,t.jsx)(s.td,{children:"Date and time of process creation"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ID"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"Process unique ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Process name"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"number"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"Process number"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"preemptive"}),(0,t.jsx)(s.td,{children:"boolean"}),(0,t.jsx)(s.td,{children:"True if run preemptive, false otherwise"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sessionID"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Session UUID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"state"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"Current status. Possible values: see below"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"systemID"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"ID for the user process, application process or spare process"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"type"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"Running process type. Possible values: see below"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"visible"}),(0,t.jsx)(s.td,{children:"boolean"}),(0,t.jsx)(s.td,{children:"True if visible, false otherwise"})]})]})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Possible values for "state":'}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constant"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kAborted"}),(0,t.jsx)(s.td,{children:"-1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kDelayed"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kDoesNotExist"}),(0,t.jsx)(s.td,{children:"-100"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kExecuting"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kPaused"}),(0,t.jsx)(s.td,{children:"5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kWaitingForInputOutput"}),(0,t.jsx)(s.td,{children:"3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kWaitingForInternalFlag"}),(0,t.jsx)(s.td,{children:"4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kWaitingForUserEvent"}),(0,t.jsx)(s.td,{children:"2"})]})]})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Possible values for "type":'}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constant"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kBackupProcess"}),(0,t.jsx)(s.td,{children:"-19"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kCacheManager"}),(0,t.jsx)(s.td,{children:"-4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kClientManagerProcess"}),(0,t.jsx)(s.td,{children:"-31"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kCompilerProcess"}),(0,t.jsx)(s.td,{children:"-29"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kDesignProcess"}),(0,t.jsx)(s.td,{children:"-2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kEventManager"}),(0,t.jsx)(s.td,{children:"-8"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kHTTPLogFlusher"}),(0,t.jsx)(s.td,{children:"-58"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kIndexingProcess"}),(0,t.jsx)(s.td,{children:"-5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kInternalProcess"}),(0,t.jsx)(s.td,{children:"-18"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kInternalTimerProcess"}),(0,t.jsx)(s.td,{children:"-25"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kLogFileProcess"}),(0,t.jsx)(s.td,{children:"-20"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kMainProcess"}),(0,t.jsx)(s.td,{children:"-39"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kMonitorProcess"}),(0,t.jsx)(s.td,{children:"-26"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kNone"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kOnExitProcess"}),(0,t.jsx)(s.td,{children:"-16"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kOtherProcess"}),(0,t.jsx)(s.td,{children:"-10"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kOtherUserProcess"}),(0,t.jsx)(s.td,{children:"4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kWebProcessWithNoContext"}),(0,t.jsx)(s.td,{children:"-3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kWebServerProcess"}),(0,t.jsx)(s.td,{children:"-13"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"kWorkerProcess"}),(0,t.jsx)(s.td,{children:"5"})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Internal processes have a negative type value and processes generated by the user have a positive value. Worker processes launched by user have type 5."})}),"\n",(0,t.jsx)(s.p,{children:"Here is an example of output object:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'\n{\n    "number": 4,\n    "name": "Application process",\n    "sessionID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",\n    "ID": 4,\n    "visible": true,\n    "type": -18,\n    "state": 0,\n    "creationDateTime": "2024-09-22T12:46:39.787Z",\n    "preemptive": false,\n    "systemID": "123145476132864",\n    "cpuUsage": 0,\n    "cpuTime": 0.006769\n}\n\n'})}),"\n",(0,t.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"You want to know if the process is preemptive:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-qs",children:"\nvar preemptive : boolean\npreemptive = processInfo(currentProcess).preemptive\n\n\n"})}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/language/commands/processState",children:"processState"})})]})}function x(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return i}});var r=n(67294);let t={},d=r.createContext(t);function i(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);