"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[994],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65903:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"compareStrings",title:"compareStrings"},l=void 0,o={unversionedId:"language/commands/compareStrings",id:"language/commands/compareStrings",title:"compareStrings",description:"compareStrings ( aString string { , options integer",source:"@site/docs/language/commands/compareStrings.md",sourceDirName:"language/commands",slug:"/language/commands/compareStrings",permalink:"/docs/language/commands/compareStrings",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/language/commands/compareStrings.md",tags:[],version:"current",frontMatter:{id:"compareStrings",title:"compareStrings"},sidebar:"Develop",previous:{title:"combinePictures",permalink:"/docs/language/commands/combinePictures"},next:{title:"convertFromString",permalink:"/docs/language/commands/convertFromString"}},s={},p=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}],u={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"compareStrings")," ( ",(0,r.kt)("em",{parentName:"p"},"aString")," : string , ",(0,r.kt)("em",{parentName:"p"},"bString")," : string { , ",(0,r.kt)("em",{parentName:"p"},"options")," : integer } ) : integer"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aString"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"String to compare")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bString"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"String to compare")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Comparison rule(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of string comparison")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"compareStrings")," command returns a negative, zero, or positive value depending on if ",(0,r.kt)("em",{parentName:"p"},"aString")," is evaluated as lower, equal, or higher than ",(0,r.kt)("em",{parentName:"p"},"bString"),".."),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"aString")," parameter, pass a string value."),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"bString")," parameter, pass a string value to be compared to ",(0,r.kt)("em",{parentName:"p"},"aString"),"."),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"compareStrings"),' functions as if the "<" (less than) operator is used. This can be modified with the options parameter. You can pass one or a combination of the following constants:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Constant"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kCaseInsensitive"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("p",null,'Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however',"\xa0",'"a" is not considered the same as "',"\xe0",'" .',"\xa0","By default, Qodly string comparison is case insensitive.","\xa0"),(0,r.kt)("p",null,"Can be combined with:","\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("u",null,"kCharCodes")," OR ",(0,r.kt)("u",null,"kDiacriticInsensitive"))),(0,r.kt)("p",null,"This constant implies the use of the following constants (which can also be combined for improved readability):"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("u",null,"kKanaInsensitive")),(0,r.kt)("li",null,(0,r.kt)("u",null,"kWidthInsensitive")),(0,r.kt)("li",null,(0,r.kt)("u",null,"kStrict"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kCharCodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("p",null,"Strings are compared according to character codes. Current data language settings are not taken into account during the comparison.","\xa0"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,"Can be combined with:",(0,r.kt)("span",null,"\xa0"),(0,r.kt)("u",null,"kCaseInsensitive"),"\xa0"),(0,r.kt)("p",null,'Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # ',"\xe2","lph","\xe0",")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kDiacriticInsensitive"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("p",null,'Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "',"\xe0",'".',"\xa0"),(0,r.kt)("p",null,"Can be combined with:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("u",null,"kCaseInsensitive"))),(0,r.kt)("p",null,"This constant implies the use of the following constants (which can also be combined for improved readability):"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("u",null,"kKanaInsensitive")),(0,r.kt)("li",null,(0,r.kt)("u",null,"kWidthInsensitive")),(0,r.kt)("li",null,(0,r.kt)("u",null,"kStrict"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kKanaInsensitive"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("p",null,"For Japanese language. Controls the distinction between Hiragana and Katakana syllables.","\xa0",'From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in Qodly is to ignore the difference (kana insensitive). For example, "\u3042" is considered the same as "\u30a2".',"\xa0","The",(0,r.kt)("span",null,"\xa0"),(0,r.kt)("u",null,"kStrict"),(0,r.kt)("span",null,"\xa0"),"option performs a kana sensitive comparison.",(0,r.kt)("span",null,"\xa0"),(0,r.kt)("span",null,"kKanaInsensitive"),(0,r.kt)("span",null,"\xa0"),"can be used to partially relax the rule to be kana insensitive.","\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Note:"),(0,r.kt)("span",null,"\xa0"),"The data language must be set to Japanese to use this option. For all other languages, the option is ignored and",(0,r.kt)("span",null,"\xa0"),(0,r.kt)("a",{parentName:"td",href:"/docs/language/commands/compareStrings"},(0,r.kt)("inlineCode",{parentName:"a"},"compareStrings")),(0,r.kt)("span",null,"\xa0"),"will work as if",(0,r.kt)("span",null,"\xa0"),(0,r.kt)("u",null,"kStrict"),"\xa0","was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect)."),(0,r.kt)("p",null,"Can be combined with:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("u",null,"kCaseInsensitive")),(0,r.kt)("li",null,(0,r.kt)("u",null,"kDiacriticInsensitive"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kStrict"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("p",null,"Strings are compared for exact matches according to the current data language.","\xa0","In most cases, capitalization and diacritical marks of letters are taken into account during the comparison.","\xa0"),(0,r.kt)("p",null,"Can be combined with:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("u",null,"kCaseInsensitive")),(0,r.kt)("li",null,(0,r.kt)("u",null,"kDiacriticInsensitive")),(0,r.kt)("li",null,(0,r.kt)("u",null,"kKanaInsensitive"))),(0,r.kt)("p",null,"This constant implies the use of the following constant (which can also be combined for improved readability):"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("u",null,"kWidthInsensitive"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kWidthInsensitive"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("p",null,'For Japanese language. Corresponds to the "East Asian Width" Unicode standard, as defined in ',(0,r.kt)("a",{href:"http://www.unicode.org/reports/tr11/"},"Unicode Standard Annex #11"),'. From a semantic point of view, the difference between a "narrow" and "wide" character or a "full width" and "half width" character is usually insignificant, which is the default mode in Qodly. For example, "\uff71" is considered the same as "\u30a2". The',"\xa0",(0,r.kt)("u",null,"kStrict"),(0,r.kt)("span",null,"\xa0"),"option performs a width sensitive comparison.","\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Note:")," The data language must be set to Japanese to use this option. For all other languages, the option is ignored and ",(0,r.kt)("a",{parentName:"td",href:"/docs/language/commands/compareStrings"},(0,r.kt)("inlineCode",{parentName:"a"},"compareStrings"))," will work as if ",(0,r.kt)("u",null,"kStrict")," was specified. In other words, setting this option in a non-Japanese context would actually make the comparison width sensitive (the opposite effect)."),(0,r.kt)("p",null,"Can be combined with:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("u",null,"kCaseInsensitive")),(0,r.kt)("li",null,(0,r.kt)("u",null,"kDiacriticInsensitive")),(0,r.kt)("li",null,(0,r.kt)("u",null,"kKanaInsensitive"))),(0,r.kt)("p",null,"This constant implies the use of the following constant (which can also be combined for improved readability):"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("u",null,"kStrict"))))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You cannot use the @ wildcard character with ",(0,r.kt)("inlineCode",{parentName:"p"},"compareStrings"),'. For example, if you pass "',(0,r.kt)("em",{parentName:"p"},"abc@"),'" in ',(0,r.kt)("em",{parentName:"p"},"aString")," or ",(0,r.kt)("em",{parentName:"p"},"bString"),' the command will actually evaluate the "',(0,r.kt)("em",{parentName:"p"},"abc@"),'" string and not an "abc" string plus any character.')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("p",null,"The command returns the following integer values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"aString")," is lower than ",(0,r.kt)("em",{parentName:"td"},"bString"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"aString")," is equal to ",(0,r.kt)("em",{parentName:"td"},"bString"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"aString")," is higher ",(0,r.kt)("em",{parentName:"td"},"bString"))))),(0,r.kt)("h4",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"You want to compare the following strings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var string1, string2 : string\n var myResult : integer\n string1 = "alpha Bravo charlie Delta Echo Fox-Trot"\n string2 = "Alpha Bravo Charlie Delta Echo Fox-Trot"\n\n  //compare the strings using the character code\n myResult = compareStrings(string1,string2,kCharCodes)\n  // myResult = 1\n\n  //compare the strings using the character code but ignoring any capitalization\n myResult = compareStrings(string1,string2,kCharCodes+kCaseInsensitive)\n  // myResult = 0\n\n')),(0,r.kt)("h4",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"The following examples illustrate the specific impact of options in ",(0,r.kt)("strong",{parentName:"p"},"Japanese data language context"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var myResult : integer\n//default is kana insensitive\n myResult = compareStrings("\u30a4\u30ed\u30cf","\u3044\u308d\u306f") // equal\n myResult = compareStrings("\u30a4\u30ed\u30cf","\u3044\u308d\u306f",kStrict)      // not equal\n result = compareStrings("\u30a4\u30ed\u30cf","\u3044\u308d\u306f",kKanaInsensitive) // equal\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var myResult : integer\n//default is case insensitive\n myResult = compareStrings("\u3055\u3064\u304d","\u3055\u3063\u304d") // equal\n myResult = compareStrings("\u3055\u3064\u304d","\u3055\u3063\u304d",kStrict) // not equal\n myResult = compareStrings("\u3055\u3064\u304d","\u3055\u3063\u304d",kCaseInsensitive) // equal\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var myResult : integer\n //default is diacritic sensitive when the data language is set to Japanese (different to all other languages)\n myResult = compareStrings("ete","\xe9t\xe9") // equal in non-Japanese data language\n myResult = compareStrings("ete","\xe9t\xe9") // not equal in Japanese data language\n myResult = compareStrings("\u3046\u304c\u3044","\u3046\u304b\u3044") // not equal\n myResult = compareStrings("\u3046\u304c\u3044","\u3046\u304b\u3044",kStrict) // not equal\n myResult = compareStrings("\u3046\u304c\u3044","\u3046\u304b\u3044",kDiacriticInsensitive) // equal\n\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'The "Sorting order appropriate for searching" setting has an impact on the ',(0,r.kt)("inlineCode",{parentName:"p"},"compareStrings"),' command. In particular, the "Katakana-Hiragana Prolonged Sound Mark" or "\u9577\u97f3\u8a18\u53f7" will be interpreted differently. The setting also has an impact on "Japanese Iteration Marks" such as "\u309d" or "\u309e".')),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var myResult : integer\n myResult = compareStrings("\u3044\u3059\u305a","\u3044\u3059\u309e") // equal if setting is disabled\n myResult = compareStrings("\u3044\u3059\u305a","\u3044\u3059\u309e") // not equal if setting is enabled\n myResult = compareStrings("\u30e9\u30fc\u30e1\u30f3","\uff97\uff70\uff92\uff9d") // equal if setting is enabled\n myResult = compareStrings("\u30e9\u30fc\u30e1\u30f3",&NBSP,"\uff97\uff70\uff92\uff9d") // not equal if setting is disabled\n\n')),(0,r.kt)("h4",{id:"see-also"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/language/commands/position"},(0,r.kt)("inlineCode",{parentName:"a"},"position"))))}m.isMDXComponent=!0}}]);