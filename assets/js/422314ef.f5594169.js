"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["9569"],{4411:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"language/basics/lang-operators","title":"Operators","description":"An operator is a symbol or a group of symbols that you use to check, modify, or combine values. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values.","source":"@site/versioned_docs/version-1.0.0/language/basics/lang-operators.md","sourceDirName":"language/basics","slug":"/language/basics/lang-operators","permalink":"/docs/language/basics/lang-operators","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2Fbasics%2Flang-operators.md%20(1.0.0)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"1.0.0","frontMatter":{"id":"lang-operators","title":"Operators"},"sidebar":"Develop","previous":{"title":"Variant","permalink":"/docs/language/basics/lang-variant"},"next":{"title":"Methods","permalink":"/docs/language/basics/lang-methods"}}'),t=n("85893"),l=n("50065");let i={id:"lang-operators",title:"Operators"},a=void 0,o={},d=[{value:"Terminology",id:"terminology",level:2},{value:"Assignment operator",id:"assignment-operator",level:2},{value:"Basic operators",id:"basic-operators",level:2},{value:"Compound assignment operators",id:"compound-assignment-operators",level:2},{value:"Examples",id:"examples",level:4},{value:"Short-circuit operators",id:"short-circuit-operators",level:2},{value:"Short-circuit AND operator (&amp;&amp;)",id:"short-circuit-and-operator-",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Short-circuit OR operator (||)",id:"short-circuit-or-operator-",level:3},{value:"Example 1",id:"example-1-1",level:4},{value:"Example 2",id:"example-2-1",level:4},{value:"Precedence",id:"precedence",level:3},{value:"Ternary operator",id:"ternary-operator",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples-1",level:3},{value:"A simple example",id:"a-simple-example",level:4},{value:"Handling data from a table",id:"handling-data-from-a-table",level:4},{value:"Truthy and falsy",id:"truthy-and-falsy",level:2}];function c(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["An operator is a symbol or a group of symbols that you use to check, modify, or combine values. You are already familiar with many operators. For example, ",(0,t.jsx)(r.code,{children:"1 + 2"})," uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values."]}),"\n",(0,t.jsxs)(r.p,{children:["The QodlyScript language supports the operators you may already know from other languages like C or JavaScript. The assignment operator is ",(0,t.jsx)(r.code,{children:"="})," and the equal to operator is ",(0,t.jsx)(r.code,{children:"=="}),". ",(0,t.jsx)(r.a,{href:"#basic-operators",children:"Basic operators"})," such as arithmetic operators (+, -, *, /, %...) and comparison operators ( = , >, >= ...) can be used with numbers, but also with boolean, text, date, time, or picture data types. Like JavaScript, the Qodly language supports the concept of ",(0,t.jsx)(r.a,{href:"#truthy-and-falsy",children:"truthy and falsy values"}),", which in use in ",(0,t.jsx)(r.a,{href:"#short-circuit-operators",children:"short-cicrcuit operators"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"terminology",children:"Terminology"}),"\n",(0,t.jsxs)(r.p,{children:["The Qodly language supports ",(0,t.jsx)(r.strong,{children:"binary"})," and ",(0,t.jsx)(r.strong,{children:"ternary"})," operators:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["binary operators operate on two targets (such as ",(0,t.jsx)(r.code,{children:"2 + 3"}),") and appear in between their two targets."]}),"\n",(0,t.jsxs)(r.li,{children:["ternary operators operate on three targets. Like C, QodlyScript has only one ternary operator, the ",(0,t.jsx)(r.a,{href:"#ternary-operator",children:"ternary conditional operator"})," (",(0,t.jsx)(r.code,{children:"a ? b : c"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The values that operators affect are operands. In the expression ",(0,t.jsx)(r.code,{children:"1 + 2"}),", the + symbol is a binary operator and its two operands are the values 1 and 2."]}),"\n",(0,t.jsx)(r.h2,{id:"assignment-operator",children:"Assignment operator"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"assignment operator"})," (",(0,t.jsx)(r.code,{children:"a = b"}),") initializes or updates the value of ",(0,t.jsx)(r.code,{children:"a"})," with the value of ",(0,t.jsx)(r.code,{children:"b"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:'myNumber = 3 //assigns 3 to myNumber variable  \nmyDate = !2023/01/21! //assigns a date literal\nmyLength = length("Acme") //assigns the result of the command (4) to myLength\ncol = newCollection //col is initialized with an empty collection\n'})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Do NOT confuse the assignment operator ",(0,t.jsx)(r.code,{children:"="})," with the equality comparison operator ",(0,t.jsx)(r.code,{children:"=="}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"basic-operators",children:"Basic operators"}),"\n",(0,t.jsxs)(r.p,{children:["Operator results depend on the ",(0,t.jsx)(r.strong,{children:"data types"})," they are applied to. QodlyScript supports different operators on scalar data types. They are described with the data types, in the following sections:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-boolean#logical-operators",children:(0,t.jsx)(r.strong,{children:"Logical operators"})})," (on ",(0,t.jsx)(r.strong,{children:"boolean"})," expressions)"]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-date#date-operators",children:(0,t.jsx)(r.strong,{children:"Date operators"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-time#time-operators",children:(0,t.jsx)(r.strong,{children:"Time operators"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-number#numeric-operators",children:(0,t.jsx)(r.strong,{children:"Number operators"})})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-number#bitwise-operators",children:(0,t.jsx)(r.strong,{children:"Bitwise operators"})})," (on ",(0,t.jsx)(r.strong,{children:"integer"})," expressions)"]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-text#string-operators",children:(0,t.jsx)(r.strong,{children:"String operators"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-null-undefined#null-operators",children:(0,t.jsx)(r.strong,{children:"Null operators"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-null-undefined#undefined-operators",children:(0,t.jsx)(r.strong,{children:"Undefined operators"})})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"compound-assignment-operators",children:"Compound assignment operators"}),"\n",(0,t.jsxs)(r.p,{children:["QodlyScript provides ",(0,t.jsx)(r.strong,{children:"compound assignment operators"})," that combine assignment with another operation. One example is the addition assignment operator (",(0,t.jsx)(r.code,{children:"+= "}),"):"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:"a = 1 \na += 2 // a = 3\n"})}),"\n",(0,t.jsx)(r.p,{children:"The following compound assignment operators are supported:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Operator"}),(0,t.jsx)(r.th,{children:"Syntax"}),(0,t.jsx)(r.th,{children:"Assigns"}),(0,t.jsx)(r.th,{children:"Example"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Addition"}),(0,t.jsx)(r.td,{children:"Text +=  Text"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'t += " World"  //t = t + " World"'})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Number +=  Number"}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"n += 5 //n = n + 5"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Date +=  Number"}),(0,t.jsx)(r.td,{children:"Date"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"d += 5 //d = d + 5"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Time +=  Time"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"t1 += t2 //t1 = t1 + t2"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Time +=  Number"}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"t1 += 5 //t1 = t1 + 5"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Picture +=  Picture"}),(0,t.jsx)(r.td,{children:"Picture"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"p1 += p2 //p1 = p1 + p2 (add p2 to the right of p1)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Picture +=  Number"}),(0,t.jsx)(r.td,{children:"Picture"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"p1 += 5 //p1 = p1 + 5 (move p1 horizontally 5 pixels to the right)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Subtraction"}),(0,t.jsx)(r.td,{children:"Number -=  Number"}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"n -= 5 //n = n - 5"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Date -=  Number"}),(0,t.jsx)(r.td,{children:"Date"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"d -= 5 //d = d - 5"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Time -=  Time"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"t1 -= t2 //t1 = t1 - t2"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Time -=  Number"}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"t1 -= 5 //t1 = t1 - 5"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Picture -=  Number"}),(0,t.jsx)(r.td,{children:"Picture"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"p1 -= 5 //p1 = p1 - 5 (move p1 horizontally 5 pixels to the left)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Division"}),(0,t.jsx)(r.td,{children:"Number /=  Number"}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"n /= 5 //n = n/5"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Time /=  Time"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"t1 /= t2 //t1 = t1/t2"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Time /=  Number"}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"t1 /= 5 //t1 = t1 / 5"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Picture /=  Picture"}),(0,t.jsx)(r.td,{children:"Picture"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"p1 /= p2 //p1 = p1 / p2 (add p2 to the bottom of p1)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Picture /=  Number"}),(0,t.jsx)(r.td,{children:"Picture"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"p1 /= 5 //p1 = p1 / 5 (move p1 vertically 5 pixels)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Multiplication"}),(0,t.jsx)(r.td,{children:"Text *=  Number"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'t *= "abc"  //t = t * "abc"'})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Number *=  Number"}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"n *= 5 //n = n * 5"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Time *=  Time"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"t1 *= t2 //t1 = t1 * t2"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Time *=  Number"}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"t1 *= 5 //t1 = t * 5"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Picture *=  Number"}),(0,t.jsx)(r.td,{children:"Picture"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"p1 *= 5 //p1 = p1*5 (resize p1 by 5)"})})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["These operators apply on any ",(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-expressions#assignable-vs-non-assignable-expressions",children:"assignable expressions"})," (except pictures as object properties or collection elements)."]}),"\n",(0,t.jsxs)(r.p,{children:['The operation "source ',(0,t.jsx)(r.code,{children:"operator"}),' value" is not strictly equivalent to "source = source ',(0,t.jsx)(r.code,{children:"operator"}),' value" because the expression designating the source (variable, field, object property, collection element) is only evaluated once. For example, in such expression as ',(0,t.jsx)(r.code,{children:"getPointer()->+= 1"})," the ",(0,t.jsx)(r.code,{children:"getPointer"})," method is called only once."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-text#character-reference-symbols",children:"Character indexing in text"})," and ",(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-blob#accessing-a-scalar-blobs-bytes",children:"byte indexing in blob"})," do not support these operators."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:'// Addition\nx = 2\nx += 5 //x = 7\n\nt = "Hello" \nt += " World" //t = "Hello World" \n\nd = !2000-11-10!\nd += 10 //d = !2000-11-20!\n\n// Subtraction\nx1 = 10\nx1 -= 5 //x1 = 5\n\nd1 = !2000-11-10!\nd1 -= 10 // d1 = !2000-10-31!\n\n// Division\nx3 = 10\nx3 /= 2 // x3 = 5\n\n\n// Multiplication\nx2 = 10\nx2 *= 5 // x2 = 50\n\nt2 = "Hello" \nt2 *= 2 // t2 = "HelloHello"\n\n'})}),"\n",(0,t.jsx)(r.h2,{id:"short-circuit-operators",children:"Short-circuit operators"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"&&"})," and ",(0,t.jsx)(r.strong,{children:"||"})," operators are ",(0,t.jsx)(r.strong,{children:"short circuit operators"}),". A short circuit operator is one that doesn't necessarily evaluate all of its operands."]}),"\n",(0,t.jsxs)(r.p,{children:["The difference with the single ",(0,t.jsxs)(r.a,{href:"/docs/language/basics/lang-boolean#logical-operators",children:[(0,t.jsx)(r.strong,{children:"&"})," and ",(0,t.jsx)(r.strong,{children:"|"})," boolean operators"]})," is that the short-circuit operators ",(0,t.jsx)(r.strong,{children:"&&"})," and ",(0,t.jsx)(r.strong,{children:"||"})," do not return a boolean value. They evaluate expressions as ",(0,t.jsx)(r.a,{href:"#truthy-and-falsy",children:"truthy or falsy"}),", then return one of the expressions."]}),"\n",(0,t.jsx)(r.h3,{id:"short-circuit-and-operator-",children:"Short-circuit AND operator (&&)"}),"\n",(0,t.jsx)(r.p,{children:"The rule is as follows:"}),"\n",(0,t.jsxs)(r.p,{children:["Given ",(0,t.jsx)(r.code,{children:"Expr1 && Expr2"}),":"]}),"\n",(0,t.jsxs)(r.p,{children:["The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are ",(0,t.jsx)(r.a,{href:"#truthy-and-falsy",children:"truthy"}),", the value of the last operand is returned."]}),"\n",(0,t.jsxs)(r.p,{children:["The following table summarizes the different cases for the ",(0,t.jsx)(r.strong,{children:"&&"})," operator:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Expr1"}),(0,t.jsx)(r.th,{children:"Expr2"}),(0,t.jsx)(r.th,{children:"Value returned"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"truthy"}),(0,t.jsx)(r.td,{children:"truthy"}),(0,t.jsx)(r.td,{children:"Expr2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"truthy"}),(0,t.jsx)(r.td,{children:"falsy"}),(0,t.jsx)(r.td,{children:"Expr2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"falsy"}),(0,t.jsx)(r.td,{children:"truthy"}),(0,t.jsx)(r.td,{children:"Expr1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"falsy"}),(0,t.jsx)(r.td,{children:"falsy"}),(0,t.jsx)(r.td,{children:"Expr1"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:'var v : variant\n\nv = "Hello" && "World" //"World"\nv = false && 0 // false\nv = 0 && false // false\nv = 5 && !00-00-00! // 00/00/00\nv = 5 && 10 && "hello" //"hello"\n'})}),"\n",(0,t.jsx)(r.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(r.p,{children:"Say you have an online store, and some products have a tax rate applied, and others don't."}),"\n",(0,t.jsx)(r.p,{children:"To calculate the tax, you multiply the price by the tax rate, which may not have been specified."}),"\n",(0,t.jsx)(r.p,{children:"So you can write this:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:"var tax : variant\n\ntax = item.taxRate && (item.price*item.taxRate)\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"tax"})," will be ",(0,t.jsx)(r.code,{children:"null"})," if ",(0,t.jsx)(r.em,{children:"taxRate"})," is ",(0,t.jsx)(r.code,{children:"null"})," (or ",(0,t.jsx)(r.code,{children:"undefined"}),"), otherwise it will store the result of the calculation."]}),"\n",(0,t.jsx)(r.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(r.p,{children:"Short-circuit operators are useful in tests such as:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:"if((myObject != null) && (myObject.value>10))\n	//code\nend\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If myObject is ",(0,t.jsx)(r.code,{children:"null"}),", the second argument is not executed, thus no error is thrown."]}),"\n",(0,t.jsx)(r.h3,{id:"short-circuit-or-operator-",children:"Short-circuit OR operator (||)"}),"\n",(0,t.jsx)(r.p,{children:'The || operator returns the value of one of the specified operands. The expression is evaluated left to right and tested for possible "short-circuit" evaluation using the following rule:'}),"\n",(0,t.jsxs)(r.p,{children:["Given ",(0,t.jsx)(r.code,{children:"Expr1 || Expr2"}),":"]}),"\n",(0,t.jsxs)(r.p,{children:["If Expr1 is ",(0,t.jsx)(r.a,{href:"#truthy-and-falsy",children:"truthy"}),", Expr2 is not evaluated and the calculation returns Expr1."]}),"\n",(0,t.jsxs)(r.p,{children:["If Expr1 is ",(0,t.jsx)(r.a,{href:"#truthy-and-falsy",children:"falsy"}),", the calculation returns Expr2."]}),"\n",(0,t.jsxs)(r.p,{children:["The following table summarizes the different cases and the value returned for the ",(0,t.jsx)(r.strong,{children:"||"})," operator:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Expr1"}),(0,t.jsx)(r.th,{children:"Expr2"}),(0,t.jsx)(r.th,{children:"Value returned"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"truthy"}),(0,t.jsx)(r.td,{children:"truthy"}),(0,t.jsx)(r.td,{children:"Expr1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"truthy"}),(0,t.jsx)(r.td,{children:"falsy"}),(0,t.jsx)(r.td,{children:"Expr1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"falsy"}),(0,t.jsx)(r.td,{children:"truthy"}),(0,t.jsx)(r.td,{children:"Expr2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"falsy"}),(0,t.jsx)(r.td,{children:"falsy"}),(0,t.jsx)(r.td,{children:"Expr2"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"example-1-1",children:"Example 1"}),"\n",(0,t.jsxs)(r.p,{children:["Say you have a dataclass named Employee. Some employees have entered a phone number, and others haven't. This means that ",(0,t.jsx)(r.code,{children:"emp.phone"})," could be null, and you cannot assign null to a string variable. But you can write the following:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:'var phone : string\n\nphone = emp.phone || "n/a"\n'})}),"\n",(0,t.jsxs)(r.p,{children:["In which case ",(0,t.jsx)(r.code,{children:"phone"}),' will store either a phone number or the "n/a" string.']}),"\n",(0,t.jsx)(r.h4,{id:"example-2-1",children:"Example 2"}),"\n",(0,t.jsxs)(r.p,{children:["Given a dataclass named Person with a ",(0,t.jsx)(r.em,{children:"name"})," attribute, as well as a ",(0,t.jsx)(r.em,{children:"maidenName"})," attribute for married women."]}),"\n",(0,t.jsx)(r.p,{children:"The following example checks if there is a maiden name and stores it in a variable, otherwise it simply stores the person's name:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:"var name: string\n\nname = person.maidenName || person.name\n"})}),"\n",(0,t.jsx)(r.h3,{id:"precedence",children:"Precedence"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"&&"})," and ",(0,t.jsx)(r.code,{children:"||"})," operators have the same precedence as the logical operators ",(0,t.jsx)(r.code,{children:"&"})," and ",(0,t.jsx)(r.code,{children:"|"}),", and are evaluated left to right."]}),"\n",(0,t.jsxs)(r.p,{children:["This means that ",(0,t.jsx)(r.code,{children:"a || b && c"})," is evaluated as ",(0,t.jsx)(r.code,{children:"(a || b) && c"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"ternary-operator",children:"Ternary operator"}),"\n",(0,t.jsxs)(r.p,{children:["The ternary conditional operator allows you to write one-line conditional expressions. For example, it can replace a full sequence of ",(0,t.jsx)(r.a,{href:"/docs/language/basics/lang-control-flow#ifelseend",children:"if\u2026else"})," statements."]}),"\n",(0,t.jsx)(r.p,{children:"It takes three operands in the following order:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"a condition followed by a question mark (?)"}),"\n",(0,t.jsxs)(r.li,{children:["an expression to execute if the condition is ",(0,t.jsx)(r.a,{href:"#truthy-and-falsy",children:"truthy"}),", followed by a colon (:)"]}),"\n",(0,t.jsxs)(r.li,{children:["an expression to execute if the condition is ",(0,t.jsx)(r.a,{href:"#truthy-and-falsy",children:"falsy"})]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(r.p,{children:"The syntax is as follows:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"condition ? exprIfTruthy : exprIfFalsy"})}),"\n",(0,t.jsx)(r.h3,{id:"examples-1",children:"Examples"}),"\n",(0,t.jsx)(r.h4,{id:"a-simple-example",children:"A simple example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:'var age : integer\nvar beverage : string\n\nage = 26\nbeverage = (age>= 21) ? "Beer" : "Juice"\n\n// beverage : "Beer"\n'})}),"\n",(0,t.jsx)(r.h4,{id:"handling-data-from-a-table",children:"Handling data from a table"}),"\n",(0,t.jsx)(r.p,{children:"This example stores a person's full name in a variable, and handles the case when no first name or last name has been specified:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:'var fullname : string\n\n// If one of the names is missing, store the one that exists, otherwise store an empty string\nfullname = (person.firstname && person.lastname) ? (person.firstname+" "+person.lastname) : (person.lastname || person.firstname) || ""\n'})}),"\n",(0,t.jsx)(r.h2,{id:"truthy-and-falsy",children:"Truthy and falsy"}),"\n",(0,t.jsxs)(r.p,{children:["As well as a type, each value also has an inherent boolean value, generally known as either ",(0,t.jsx)(r.strong,{children:"truthy"})," or ",(0,t.jsx)(r.strong,{children:"falsy"}),"."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"truthy"})," and ",(0,t.jsx)(r.strong,{children:"falsy"})," values are only evaluated by ",(0,t.jsx)(r.a,{href:"#short-circuit-operators",children:"short-circuit"})," and ",(0,t.jsx)(r.a,{href:"#ternary-operator",children:"ternary"})," operators."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The following values are ",(0,t.jsx)(r.strong,{children:"falsy"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"false"}),"\n",(0,t.jsx)(r.li,{children:"null"}),"\n",(0,t.jsx)(r.li,{children:"undefined"}),"\n",(0,t.jsx)(r.li,{children:"null object"}),"\n",(0,t.jsx)(r.li,{children:"null collection"}),"\n",(0,t.jsx)(r.li,{children:"null picture"}),"\n",(0,t.jsx)(r.li,{children:"null date !00-00-00!"}),"\n",(0,t.jsx)(r.li,{children:'"" - Empty strings'}),"\n",(0,t.jsx)(r.li,{children:"[] - Empty collections"}),"\n",(0,t.jsx)(r.li,{children:" - Empty objects"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["All other values are considered ",(0,t.jsx)(r.strong,{children:"truthy"}),", including:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"0 - numeric zero (integer or otherwise)"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["In QodlyScript, ",(0,t.jsx)(r.strong,{children:"truthy"})," and ",(0,t.jsx)(r.strong,{children:"falsy"})," evaluation reflects the ",(0,t.jsx)(r.strong,{children:"usability"})," of a value, which means that a truthy value exists and can be processed by the code without generating errors or unexpected results. The rationale behind this is to provide a convenient way to handle ",(0,t.jsx)(r.em,{children:"undefined"})," and ",(0,t.jsx)(r.em,{children:"null"})," values in objects and collections, so that a reduced number of ",(0,t.jsx)(r.a,{href:"lang-control-flow#ifelseend",children:"if\u2026else"})," statements are necessary to avoid runtime errors."]}),"\n",(0,t.jsxs)(r.p,{children:["For example, when you use a ",(0,t.jsx)(r.a,{href:"#short-circuit-or-operator-",children:"short-circuit OR operator"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:"value = object.value || defaultValue\n"})}),"\n",(0,t.jsxs)(r.p,{children:["... you get the default value whenever ",(0,t.jsx)(r.em,{children:"object"})," does not contain the ",(0,t.jsx)(r.code,{children:"value"})," property OR when it is ",(0,t.jsx)(r.em,{children:"null"}),". So this operator checks the existence or usability of the value instead of a specific value. Note that because the numerical value 0 exists and is usable, it is not treated specially, thus it is ",(0,t.jsx)(r.strong,{children:"truthy"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:['Regarding values representing collections, objects, or strings, "empty" values are considered ',(0,t.jsx)(r.strong,{children:"falsy"}),". It is handy when you want to assign a default value whenever an empty one is encountered."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-qs",children:'phone = emp.phone || "n/a"\n'})})]})}function h(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return i}});var s=n(67294);let t={},l=s.createContext(t);function i(e){let r=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);