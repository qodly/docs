"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["6326"],{84165:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"language/commands/replaceString","title":"replaceString","description":"replaceString ( source string , newString integer \\\\{, \\\\*\\\\}) : string","source":"@site/versioned_docs/version-1.0.0/language/commands/replaceString.md","sourceDirName":"language/commands","slug":"/language/commands/replaceString","permalink":"/docs/language/commands/replaceString","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2Fcommands%2FreplaceString.md%20(1.0.0)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"1.0.0","frontMatter":{"id":"replaceString","title":"replaceString"},"sidebar":"Develop","previous":{"title":"random","permalink":"/docs/language/commands/random"},"next":{"title":"round","permalink":"/docs/language/commands/round"}}'),s=t("85893"),i=t("50065");let l={id:"replaceString",title:"replaceString"},a=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"replaceString"})," ( ",(0,s.jsx)(n.em,{children:"source"})," : string , ",(0,s.jsx)(n.em,{children:"oldString"})," : string , ",(0,s.jsx)(n.em,{children:"newString"})," : string , ",(0,s.jsx)(n.em,{children:"howMany"})," : integer {, *}) : string"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"source"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Original string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"oldString"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Characters to replace"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"newString"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Replacement string (if empty string, occurrences are deleted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"howMany"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"How many times to replace If omitted, all occurrences are replaced"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"If passed: evaluation based on character codes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(n.td,{children:"Resulting string"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"replaceString"})," replaces ",(0,s.jsx)(n.em,{children:"howMany"})," occurrences of ",(0,s.jsx)(n.em,{children:"oldString"})," in ",(0,s.jsx)(n.em,{children:"source"})," with ",(0,s.jsx)(n.em,{children:"newString"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"newString"}),' is an empty string (""), ',(0,s.jsx)(n.code,{children:"replaceString"})," deletes each occurrence of ",(0,s.jsx)(n.em,{children:"oldString"})," in ",(0,s.jsx)(n.em,{children:"source"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"howMany"})," is specified, ",(0,s.jsx)(n.code,{children:"replaceString"})," will replace only the number of occurrences of ",(0,s.jsx)(n.em,{children:"oldString"})," specified, starting at the first character of ",(0,s.jsx)(n.em,{children:"source"}),". If ",(0,s.jsx)(n.em,{children:"howMany"})," is not specified, then all occurrences of ",(0,s.jsx)(n.em,{children:"oldString"})," are replaced."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"oldString"})," is an empty string, ",(0,s.jsx)(n.code,{children:"replaceString"})," returns the unchanged ",(0,s.jsx)(n.em,{children:"source"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example \xe6 = ae) into account. On the other hand, it is not diacritical (a = A, a = \xe0 and so on) and does not take "ignorable" characters such as characters whose code < 9 into account (Unicode specification).'}),"\n",(0,s.jsx)(n.p,{children:"To modify this functioning, pass the asterisk * as the last parameter. In this case, comparisons will be based on character codes. You must pass the * parameter:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you want to replace special characters, used for example as delimiters (",(0,s.jsx)(n.code,{children:"Char(1)"}),", etc.),"]}),"\n",(0,s.jsx)(n.li,{children:"If the replacement of characters must be case sensitive and take accented characters into account (a#A, a#\xe0 and so on).\nNote that in this mode, the evaluation does not handle variations in the way words are written."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["The following example illustrates the use of ",(0,s.jsx)(n.code,{children:"replaceString"}),". The results, described in the comments, are assigned to the variable ",(0,s.jsx)(n.em,{children:"vtResult"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-qs",children:' var vtResult, vtOtherVar : string\n vtResult = replaceString("Willow"," ll","d") // Result gets "Widow"\n vtResult = replaceString("Shout","o","") // Result gets "Shut"\n vtResult = replaceString(vtOtherVar,Char(kTab),",",*) // Replaces all tabs in vtOtherVar with commas\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["The following example eliminates CRs and TABs from the text in ",(0,s.jsx)(n.em,{children:"vtResult"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-qs",children:' var vtResult : string\n vtResult = replaceString(replaceString(vtResult,\\\n 	Char(kCarriageReturn),"",*),Char(kTab),"",*)\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"The following example illustrates the use of the * parameter in the case of a diacritical evaluation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-qs",children:' var vtResult : string\n vtResult = replaceString("Cr\xe8me br\xfbl\xe9e","Brulee",\\\n 	"caramel") //Result gets "Cr\xe8me caramel"\n vtResult = replaceString("Cr\xe8me br\xfbl\xe9e","Brulee",\\\n 	"caramel",*) //Result gets "Cr\xe8me br\xfbl\xe9e"\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/language/commands/changeString",children:(0,s.jsx)(n.code,{children:"changeString"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.a,{href:"/docs/language/commands/deleteString",children:(0,s.jsx)(n.code,{children:"deleteString"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.a,{href:"/docs/language/commands/insertString",children:(0,s.jsx)(n.code,{children:"insertString"})})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);