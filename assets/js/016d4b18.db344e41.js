"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["3795"],{90812:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>i,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>l});var n=JSON.parse('{"id":"language/commands/killWorker","title":"killWorker","description":"killWorker()killWorker( process integer )","source":"@site/versioned_docs/version-1.0.0/language/commands/killWorker.md","sourceDirName":"language/commands","slug":"/language/commands/killWorker","permalink":"/docs/language/commands/killWorker","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2Fcommands%2FkillWorker.md%20(1.0.0)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"1.0.0","frontMatter":{"id":"killWorker","title":"killWorker"},"sidebar":"Develop","previous":{"title":"jsonValidate","permalink":"/docs/language/commands/jsonValidate"},"next":{"title":"lastErrors","permalink":"/docs/language/commands/lastErrors"}}'),o=s("85893"),t=s("50065");let l={id:"killWorker",title:"killWorker"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let r={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"killWorker"}),"()",(0,o.jsx)("br",{}),(0,o.jsx)(r.strong,{children:"killWorker"}),"( ",(0,o.jsx)(r.em,{children:"process"})," : string )",(0,o.jsx)("br",{}),(0,o.jsx)(r.strong,{children:"killWorker"}),"( ",(0,o.jsx)(r.em,{children:"process"})," : integer )"]}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Parameter"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{style:{textAlign:"center"}}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"process"}),(0,o.jsx)(r.td,{children:"string | integer"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2192"}),(0,o.jsx)(r.td,{children:"Name or number of process to kill (current process if omitted)"})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"killWorker"})," command posts a message to the worker process whose name or number you passed in ",(0,o.jsx)(r.em,{children:"process"}),", asking it to ignore any pending messages and to terminate its execution as soon as the current task ends."]}),"\n",(0,o.jsx)(r.p,{children:"This command can only be used with worker processes."}),"\n",(0,o.jsxs)(r.p,{children:["In ",(0,o.jsx)(r.em,{children:"process"}),", you pass either the name or number of the worker process whose execution needs to be terminated. If no worker with the specified process name or number exists, ",(0,o.jsx)(r.code,{children:"killWorker"})," does nothing."]}),"\n",(0,o.jsxs)(r.p,{children:["If you do not pass any parameter, ",(0,o.jsx)(r.code,{children:"killWorker"})," applies to the currently running worker."]}),"\n",(0,o.jsxs)(r.p,{children:["If ",(0,o.jsx)(r.code,{children:"killWorker"})," is applied to a worker that was not created explicitly using the ",(0,o.jsx)(r.a,{href:"/docs/language/commands/callWorker",children:(0,o.jsx)(r.code,{children:"callWorker"})})," command, it only asks this worker to empty its message box."]}),"\n",(0,o.jsxs)(r.p,{children:["If the ",(0,o.jsx)(r.a,{href:"/docs/language/commands/callWorker",children:(0,o.jsx)(r.code,{children:"callWorker"})})," command is called to send a message to a worker that was just killed by ",(0,o.jsx)(r.code,{children:"killWorker"}),", a new process is started. To make sure that there is only one process running at a time for a worker, the new process will start after the previous one is actually terminated. Note however that if ",(0,o.jsx)(r.a,{href:"/docs/language/commands/callWorker",children:(0,o.jsx)(r.code,{children:"callWorker"})})," is called from a worker to send itself a message whereas it has just been killed by ",(0,o.jsx)(r.code,{children:"killWorker"}),", the command does nothing."]}),"\n",(0,o.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(r.p,{children:"The following code triggers the termination of a worker:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-qs",children:'callWorker(vWorkerName,"theWorker","end")\n\n'})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-qs",children:'   //theWorker method\n\ndeclare (param : text)\nswitch\n    :(param == "call") //the worker is called\n       ... //do something\n    :(param == "end") //the worker is asked to kill itself\n      killWorker()\nend\n'})}),"\n",(0,o.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/language/commands/callWorker",children:(0,o.jsx)(r.code,{children:"callWorker"})}),(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(r.a,{href:"/docs/language/SignalClass",children:[(0,o.jsx)(r.code,{children:"Signal"})," class"]})]})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,r,s){s.d(r,{Z:function(){return i},a:function(){return l}});var n=s(67294);let o={},t=n.createContext(o);function l(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);