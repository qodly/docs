"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["1168"],{44443:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>o,assets:()=>h,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"language/MailAttachmentClass","title":"MailAttachment","description":"Attachment objects allow referencing files within a Email object.","source":"@site/versioned_docs/version-1.0.0/language/MailAttachmentClass.md","sourceDirName":"language","slug":"/language/MailAttachmentClass","permalink":"/docs/language/MailAttachmentClass","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2FMailAttachmentClass.md%20(1.0.0)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"1.0.0","frontMatter":{"id":"MailAttachmentClass","title":"MailAttachment"},"sidebar":"Develop","previous":{"title":"IMAPTransporter","permalink":"/docs/language/IMAPTransporterClass"},"next":{"title":"OutgoingMessage","permalink":"/docs/language/OutgoingMessageClass"}}'),s=n("85893"),r=n("50065");let l={id:"MailAttachmentClass",title:"MailAttachment"},d=void 0,h={},c=[{value:"Functions and properties",id:"functions-and-properties",level:3},{value:"4D.MailAttachment.new()",id:"4dmailattachmentnew",level:2},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:".cid",id:"cid",level:2},{value:"Description",id:"description-1",level:4},{value:".disposition",id:"disposition",level:2},{value:"Description",id:"description-2",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Description",id:"description-3",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-4",level:4},{value:".path",id:"path",level:2},{value:"Description",id:"description-5",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Description",id:"description-6",level:4},{value:".type",id:"type",level:2},{value:"Description",id:"description-7",level:4}];function a(e){let t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Attachment objects allow referencing files within a ",(0,s.jsx)(t.a,{href:"EmailObjectClass",children:(0,s.jsx)(t.code,{children:"Email"})})," object."]}),"\n",(0,s.jsx)(t.h3,{id:"functions-and-properties",children:"Functions and properties"}),"\n",(0,s.jsxs)(t.p,{children:["Attachment objects are created using the ",(0,s.jsx)(t.a,{href:"#4dmailattachmentnew",children:(0,s.jsx)(t.code,{children:"4D.MailAttachment.new()"})})," function. They provide the following functions and read-only properties:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{})})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsx)(t.tr,{children:(0,s.jsxs)(t.td,{children:[(0,s.jsxs)(t.a,{href:"#4dmailattachmentnew",children:[(0,s.jsx)(t.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(t.em,{children:"file"})," : 4D.File { , ",(0,s.jsx)(t.em,{children:"name"})," : string {, ",(0,s.jsx)(t.em,{children:"cid"})," : string{ , ",(0,s.jsx)(t.em,{children:"type"})," : string { , ",(0,s.jsx)(t.em,{children:"disposition"})," : string } } } } ) : 4D.MailAttachment",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(t.em,{children:"zipFile"})," : 4D.ZipFile { , ",(0,s.jsx)(t.em,{children:"name"})," : string {, ",(0,s.jsx)(t.em,{children:"cid"})," : string{ , ",(0,s.jsx)(t.em,{children:"type"})," : string { , ",(0,s.jsx)(t.em,{children:"disposition"})," ",":string"," } } } } ) : 4D.MailAttachment",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(t.em,{children:"blob"})," : 4D.Blob { , ",(0,s.jsx)(t.em,{children:"name"})," : string {, ",(0,s.jsx)(t.em,{children:"cid"})," : string{ , ",(0,s.jsx)(t.em,{children:"type"})," : string { , ",(0,s.jsx)(t.em,{children:"disposition"})," ",":string"," } } } } ) : 4D.MailAttachment",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(t.em,{children:"path"})," : string { , ",(0,s.jsx)(t.em,{children:"name"})," : string {, ",(0,s.jsx)(t.em,{children:"cid"})," : string{ , ",(0,s.jsx)(t.em,{children:"type"})," : string { , ",(0,s.jsx)(t.em,{children:"disposition"})," ",":string"," } } } } ) : 4D.MailAttachment"]}),"\xa0\xa0\xa0\xa0allows you to create an attachment object that you can add to an ",(0,s.jsx)(t.a,{href:"EmailObjectClass#properties",children:"Email object"})]})}),(0,s.jsx)(t.tr,{children:(0,s.jsxs)(t.td,{children:[(0,s.jsxs)(t.a,{href:"#cid",children:[(0,s.jsx)(t.strong,{children:".cid"})," : string"]}),"\xa0\xa0\xa0\xa0 the ID of the attachment"]})}),(0,s.jsx)(t.tr,{children:(0,s.jsxs)(t.td,{children:[(0,s.jsxs)(t.a,{href:"#disposition",children:[(0,s.jsx)(t.strong,{children:".disposition"})," : string"]}),"\xa0\xa0\xa0\xa0the value of the ",(0,s.jsx)(t.code,{children:"Content-Disposition"})," header"]})}),(0,s.jsx)(t.tr,{children:(0,s.jsxs)(t.td,{children:[(0,s.jsxs)(t.a,{href:"#getcontent",children:[(0,s.jsx)(t.strong,{children:".getContent()"})," : 4D.Blob"]}),"\xa0\xa0\xa0\xa0returns the contents of the attachment object in a ",(0,s.jsx)(t.code,{children:"4D.Blob"})," object"]})}),(0,s.jsx)(t.tr,{children:(0,s.jsxs)(t.td,{children:[(0,s.jsxs)(t.a,{href:"#name",children:[(0,s.jsx)(t.strong,{children:".name"})," : string"]}),"\xa0\xa0\xa0\xa0the name and extension of the attachment"]})}),(0,s.jsx)(t.tr,{children:(0,s.jsxs)(t.td,{children:[(0,s.jsxs)(t.a,{href:"#path",children:[(0,s.jsx)(t.strong,{children:".path"})," : string"]}),"\xa0\xa0\xa0\xa0the POSIX path of the attachment file, if it exists"]})}),(0,s.jsx)(t.tr,{children:(0,s.jsxs)(t.td,{children:[(0,s.jsxs)(t.a,{href:"#platformpath",children:[(0,s.jsx)(t.strong,{children:".platformPath"})," : string"]}),"\xa0\xa0\xa0\xa0the path of the attachment file expressed with the current platform syntax"]})}),(0,s.jsx)(t.tr,{children:(0,s.jsxs)(t.td,{children:[(0,s.jsxs)(t.a,{href:"#type",children:[(0,s.jsx)(t.strong,{children:".type"})," : string"]}),"\xa0\xa0\xa0\xa0the ",(0,s.jsx)(t.code,{children:"content-type"})," of the attachment file"]})})]})]}),"\n",(0,s.jsx)(t.h2,{id:"4dmailattachmentnew",children:"4D.MailAttachment.new()"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(t.em,{children:"file"})," : 4D.File { , ",(0,s.jsx)(t.em,{children:"name"})," : string {, ",(0,s.jsx)(t.em,{children:"cid"})," : string{ , ",(0,s.jsx)(t.em,{children:"type"})," : string { , ",(0,s.jsx)(t.em,{children:"disposition"})," : string } } } } ) : 4D.MailAttachment",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(t.em,{children:"zipFile"})," : 4D.ZipFile { , ",(0,s.jsx)(t.em,{children:"name"})," : string {, ",(0,s.jsx)(t.em,{children:"cid"})," : string{ , ",(0,s.jsx)(t.em,{children:"type"})," : string { , ",(0,s.jsx)(t.em,{children:"disposition"})," ",":string"," } } } } ) : 4D.MailAttachment",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(t.em,{children:"blob"})," : 4D.Blob { , ",(0,s.jsx)(t.em,{children:"name"})," : string {, ",(0,s.jsx)(t.em,{children:"cid"})," : string{ , ",(0,s.jsx)(t.em,{children:"type"})," : string { , ",(0,s.jsx)(t.em,{children:"disposition"})," ",":string"," } } } } ) : 4D.MailAttachment",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(t.em,{children:"path"})," : string { , ",(0,s.jsx)(t.em,{children:"name"})," : string {, ",(0,s.jsx)(t.em,{children:"cid"})," : string{ , ",(0,s.jsx)(t.em,{children:"type"})," : string { , ",(0,s.jsx)(t.em,{children:"disposition"})," ",":string"," } } } } ) : 4D.MailAttachment"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"}}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"file"}),(0,s.jsx)(t.td,{children:"4D.File"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:"Attachment file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"zipFile"}),(0,s.jsx)(t.td,{children:"4D.ZipFile"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:"Attachment Zipfile"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blob"}),(0,s.jsx)(t.td,{children:"4D.Blob"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:"BLOB containing the attachment"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:"Path of the attachment file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:"Name + extension used by the mail client to designate the attachment"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cid"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:'ID of attachment (HTML messages only), or " " if no cid is required'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"type"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:"Value of the content-type header"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"disposition"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:'Value of the content-disposition header: "inline" or "attachment".'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Result"}),(0,s.jsx)(t.td,{children:"4D.MailAttachment"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(t.td,{children:"Attachment object"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"4D.MailAttachment.new"})," function allows you to create an attachment object that you can add to an ",(0,s.jsx)(t.a,{href:"EmailObjectClass#properties",children:"Email object"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"To define the attachment, you can use:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["a ",(0,s.jsx)(t.em,{children:"file"}),", pass a ",(0,s.jsx)(t.code,{children:"4D.File"})," object containing the attachment file."]}),"\n",(0,s.jsxs)(t.li,{children:["a ",(0,s.jsx)(t.em,{children:"zipfile"}),", pass a ",(0,s.jsx)(t.code,{children:"4D.ZipFile"})," object containing the attachment file."]}),"\n",(0,s.jsxs)(t.li,{children:["a ",(0,s.jsx)(t.em,{children:"blob"}),", pass a ",(0,s.jsx)(t.code,{children:"4D.Blob"})," object containing the attachment itself."]}),"\n",(0,s.jsxs)(t.li,{children:["a ",(0,s.jsx)(t.em,{children:"path"}),", pass a ",(0,s.jsx)(t.strong,{children:"string"})," value containing the path of the attachment file, expressed with the system syntax. You can pass a full path name or a simple file name (in which case 4D will search for the file in the same directory as the project file)."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.em,{children:"name"})," parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If ",(0,s.jsx)(t.em,{children:"name"})," is omitted and:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"you passed a file path, the name and extension of the file is used,"}),"\n",(0,s.jsx)(t.li,{children:"you passed a BLOB, a random name without extension is automatically generated."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.em,{children:"cid"})," parameter lets you pass an internal ID for the attachment. This ID is the value of the ",(0,s.jsx)(t.code,{children:"Content-Id"})," header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as ",(0,s.jsx)(t.code,{children:'\\<img src = "cid:ID">'}),". This means that the contents of the attachment (e.g., a picture) should be displayed within the message on the mail client. The final result may vary depending on the mail client. You can pass an empty string in ",(0,s.jsx)(t.em,{children:"cid"})," if you do not want to use this parameter."]}),"\n",(0,s.jsxs)(t.p,{children:["You can use the optional ",(0,s.jsx)(t.em,{children:"type"})," parameter to explicitly set the ",(0,s.jsx)(t.code,{children:"content-type"}),' of the attachment file. For example, you can pass a string defining a MIME type ("video/mpeg"). This content-type value will be set for the attachment, regardless of its extension. For more information about MIME types, please refer to the ',(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/MIME",children:"MIME type page on Wikipedia"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["By default, if the ",(0,s.jsx)(t.em,{children:"type"})," parameter is omitted or contains an empty string, the ",(0,s.jsx)(t.code,{children:"content-type"})," of the attachment file is based on its extension. The following rules are applied for the main MIME types:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Extension"}),(0,s.jsx)(t.th,{children:"Content Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"jpg, jpeg"}),(0,s.jsx)(t.td,{children:"image/jpeg"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"png"}),(0,s.jsx)(t.td,{children:"image/png"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"gif"}),(0,s.jsx)(t.td,{children:"image/gif"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pdf"}),(0,s.jsx)(t.td,{children:"application/pdf"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"doc"}),(0,s.jsx)(t.td,{children:"application/msword"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"xls"}),(0,s.jsx)(t.td,{children:"application/vnd.ms-excel"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ppt"}),(0,s.jsx)(t.td,{children:"application/vnd.ms-powerpoint"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"zip"}),(0,s.jsx)(t.td,{children:"application/zip"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"gz"}),(0,s.jsx)(t.td,{children:"application/gzip"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"json"}),(0,s.jsx)(t.td,{children:"application/json"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"js"}),(0,s.jsx)(t.td,{children:"application/javascript"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ps"}),(0,s.jsx)(t.td,{children:"application/postscript"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"xml"}),(0,s.jsx)(t.td,{children:"application/xml"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"htm, html"}),(0,s.jsx)(t.td,{children:"text/html"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mp3"}),(0,s.jsx)(t.td,{children:"audio/mpeg"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"other"})}),(0,s.jsx)(t.td,{children:"application/octet-stream"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.em,{children:"disposition"})," parameter lets you pass the ",(0,s.jsx)(t.code,{children:"content-disposition"})," header of the attachment. You can pass one of the following constants:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"kMailDispositionAttachment"}),(0,s.jsx)(t.td,{children:'"attachment"'}),(0,s.jsx)(t.td,{children:'Set the Content-disposition header value to "attachment", which means that the attachment file must be provided as a link in the message.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"kMailDispositionInline"}),(0,s.jsx)(t.td,{children:'"inline"'}),(0,s.jsx)(t.td,{children:'Set the Content-disposition header value to "inline", which means that the attachment must be rendered within the message contents, at the "cid" location. The rendering depends on the mail client.'})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["By default, if the ",(0,s.jsx)(t.em,{children:"disposition"})," parameter is omitted:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["if the ",(0,s.jsx)(t.em,{children:"cid"})," parameter is used, the ",(0,s.jsx)(t.code,{children:"Content-disposition"}),' header is set to "inline",']}),"\n",(0,s.jsxs)(t.li,{children:["if the ",(0,s.jsx)(t.em,{children:"cid"})," parameter is not passed or empty, the ",(0,s.jsx)(t.code,{children:"Content-disposition"}),' header is set to "attachment".']}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"You want to send an email with a file as an attachment and an image embedded in the HTML body:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-qs",children:'var attachment : 4D.File\nvar email,server : object\nvar transporter : 4D.SMTPTransporter\n\nattachment = file("/PACKAGE/Docs/cv-john-smith.pdf")\n\nserver = newObject\nserver.host = "smtp.mail.com"\nserver.user = "test_user@mail.com"\nserver.password = "p@ssw@rd"\ntransporter = 4D.SMTPTransporter.new(server)\n\nemail = newObject\nemail.from = "test_user@mail.com"\nemail.to = "test_user@mail.com"\nemail.subject = "This is a test message with attachments"\n\n//add a link to download file\nemail.attachments = newCollection(4D.MailAttachment.new(attachment))\n//insert an inline picture (use a cid)\nemail.attachments[1] = 4D.MailAttachment.new(file("/PACKAGE/Docs/photo.jpg"),"","Qodly")\n\nemail.htmlBody = "<html>"+\\\n"<body>Hello World!"+\\\n"<img src = \'cid:Qodly\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\ntransporter.send(email) //send mail\n\n'})}),"\n",(0,s.jsx)(t.h2,{id:"cid",children:".cid"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:".cid"})," : string"]}),"\n",(0,s.jsx)(t.h4,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:".cid"})," property contains  the ID of the attachment. This property is used in HTML messages only. If this property is missing, the file is handled as a simple attachment (link)."]}),"\n",(0,s.jsx)(t.h2,{id:"disposition",children:".disposition"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:".disposition"})," : string"]}),"\n",(0,s.jsx)(t.h4,{id:"description-2",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:".disposition"})," property contains the value of the ",(0,s.jsx)(t.code,{children:"Content-Disposition"})," header. Two values are available:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'"inline": the attachment is rendered within the message contents, at the "cid" location. The rendering depends on the mail client.'}),"\n",(0,s.jsx)(t.li,{children:'"attachment": the attachment is provided as a link in the message.'}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"getcontent",children:".getContent()"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:".getContent()"})," : 4D.Blob"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"}}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Result"}),(0,s.jsx)(t.td,{children:"4D.Blob"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(t.td,{children:"Content of the attachment"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"description-3",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:".getContent()"})," function returns the contents of the attachment object in a ",(0,s.jsx)(t.code,{children:"4D.Blob"})," object. You can use this method with attachment objects received by the ",(0,s.jsx)(t.a,{href:"commands/mailConvertFromMIME",children:(0,s.jsx)(t.code,{children:"mailConvertFromMIME"})})," command."]}),"\n",(0,s.jsx)(t.h2,{id:"name",children:".name"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:".name"})," : string"]}),"\n",(0,s.jsx)(t.h4,{id:"description-4",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:".name"})," property contains the name and extension of the attachment.  By default, it is the name of the file, unless another name was specified in the ",(0,s.jsx)(t.a,{href:"#4dmailattachmentnew",children:(0,s.jsx)(t.code,{children:"4D.MailAttachment.new()"})})," command."]}),"\n",(0,s.jsx)(t.h2,{id:"path",children:".path"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:".path"})," : string"]}),"\n",(0,s.jsx)(t.h4,{id:"description-5",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:".path"})," property contains the POSIX path of the attachment file, if it exists."]}),"\n",(0,s.jsx)(t.h2,{id:"platformpath",children:".platformPath"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:".platformPath"})," : string"]}),"\n",(0,s.jsx)(t.h4,{id:"description-6",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:".platformPath"})," property returns the path of the attachment file expressed with the current platform syntax."]}),"\n",(0,s.jsx)(t.h2,{id:"type",children:".type"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:".type"})," : string"]}),"\n",(0,s.jsx)(t.h4,{id:"description-7",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:".type"})," property contains the ",(0,s.jsx)(t.code,{children:"content-type"})," of the attachment file. If this type is not explicitly passed to the ",(0,s.jsx)(t.a,{href:"#4dmailattachmentnew",children:(0,s.jsx)(t.code,{children:"4D.MailAttachment.new()"})})," command, the ",(0,s.jsx)(t.code,{children:"content-type"})," is based on its file extension."]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);