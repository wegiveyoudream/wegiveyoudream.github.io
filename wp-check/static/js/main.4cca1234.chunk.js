(this["webpackJsonpwp-check"]=this["webpackJsonpwp-check"]||[]).push([[0],{172:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(34),r=n.n(s),i=n(31),o=n(126),l=n(27),u=n(8);var j=function(){return Object(u.jsx)("span",{children:"EditProfile"})},d=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{children:"Profile"})})},b=n(83),f=n(256),h=n(93),O=n(156),m=n(252),p=n(44),x=n(84);n(166),n(249),n(168);x.a.initializeApp({apiKey:"AIzaSyAzxCzTSK9f2j_pTvtBkg_VLnqpOWyNonU",authDomain:"checksystem-193c7.firebaseapp.com",databaseURL:"https://checksystem-193c7-default-rtdb.firebaseio.com",projectId:"checksystem-193c7",storageBucket:"checksystem-193c7.appspot.com",messagingSenderId:"300844364368",appId:"1:300844364368:web:58a8f1c3f3644a00b05755",measurementId:"G-90GHWMYCHQ"});var g=x.a.database(),v=x.a.storage(),I=x.a,S=x.a.auth(),y=n(101),k=n.n(y),N=h.a.Option,w=function(){var e=Object(a.useState)("WpFile/"),t=Object(i.a)(e,1)[0],n=Object(a.useState)(""),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(null),l=Object(i.a)(o,2),j=l[0],d=l[1],x=Object(a.useState)([]),y=Object(i.a)(x,2),w=y[0],F=y[1],U=Object(a.useState)(""),C=Object(i.a)(U,2),L=C[0],W=C[1],A={beforeUpload:function(e){return e.name.endsWith(".hwp")?s?(d(null),!0):(O.b.error("Please choose standard file!"),m.a.LIST_IGNORE):(O.b.error("".concat(e.name," is not HWP file.")),m.a.LIST_IGNORE)},onChange:function(e){console.log("info",e);var t=e.fileList[0].originFileObj;d(t)}},D=Object(a.useCallback)((function(e){var n=v.ref(t+S.currentUser.uid+"_"+e.name).put(e);console.log("Uploading..."),W("Uploading..."),n.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log(t+"% done")}),(function(e){console.log(e),console.log(e.message),W(e.message)}),(function(){v.ref(t).child(S.currentUser.uid+"_"+e.name).getDownloadURL().then((function(t){console.log("Checking..."),W("Checking...");var n=g.ref().push().key;E(S.currentUser.uid,n,s,t,S.currentUser.uid+"_"+e.name,"")}))}))}),[t,s]),E=function(e,t,n,a,c,s){I.database().ref("WpDb/41/ListPending/"+e+"/"+t).set({FileDestName:n,FileSrc:a,FileSrcName:c,InsertTime:k()().format("YYYY-MM-DD HH:mm:ss"),HtmlResult:s})};return Object(a.useEffect)((function(){var e=g.ref("WpDb/41/ListCompleted/"+S.currentUser.uid);e.on("value",(function(t){var n=t.val();if(null!=n){var a=Object.values(n);console.log("Completed."),W(a[0].HtmlResult),e.remove()}})),g.ref("WpDb/41/Standard").on("value",(function(e){var t=e.val();if(null!=t){var n=Object.values(t).map((function(e){return Object(u.jsx)(N,{value:e.FileName,children:e.FileName},e.FileName)}));F(n)}}))}),[]),Object(a.useEffect)((function(){j&&D(j)}),[D,j]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"upload-page",children:[Object(u.jsxs)("div",{className:"upload-area",children:[Object(u.jsx)(h.a,{showSearch:!0,className:"select-file",placeholder:"Choose standard file",onChange:function(e){r(e)},children:w}),Object(u.jsx)(m.a,Object(b.a)(Object(b.a)({},A),{},{maxCount:1,children:Object(u.jsx)(p.a,{icon:Object(u.jsx)(f.a,{}),children:"Upload HWP"})}))]}),Object(u.jsx)("div",{className:"html-result",dangerouslySetInnerHTML:{__html:L}})]})})},F=n(95),U=n.n(F),C=n(128),L=n(257),W=n(258),A=n(259),D=n(260),E=n(253),P=n(254),T=(n(135),n(172),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(a.useState)(!0),d=Object(i.a)(j,2),b=d[0],f=d[1],h=Object(a.useState)(""),O=Object(i.a)(h,2),m=O[0],x=O[1],g=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&l(a)},v=function(){var e=Object(C.a)(U.a.mark((function e(t){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!b){e.next=7;break}return e.next=4,S.signInWithEmailAndPassword(n,o);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,S.createUserWithEmailAndPassword(n,o);case 9:a=e.sent;case 10:console.log(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),x(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(C.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t?n=new I.auth.GoogleAuthProvider:"github"===t&&(n=new I.auth.GithubAuthProvider),e.next=3,S.signInWithPopup(n);case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login-form",children:[Object(u.jsxs)(E.a,{onFinish:v,children:[Object(u.jsx)(E.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(u.jsx)(P.a,{name:"email",prefix:Object(u.jsx)(L.a,{className:"site-form-item-icon"}),placeholder:"Email",value:n,onChange:g})}),Object(u.jsx)(E.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(u.jsx)(P.a,{name:"password",prefix:Object(u.jsx)(W.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",value:o,onChange:g})}),Object(u.jsxs)(E.a.Item,{children:[Object(u.jsx)(p.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:!1===b?"Create new account":"Log In"}),Object(u.jsx)("a",{onClick:function(){return f((function(e){return!e}))},className:"sign-up-link",children:b?"Sign up here":"Sign in here"})]})]}),Object(u.jsx)("span",{className:"text-error",children:m}),Object(u.jsx)("span",{children:"Or sign in with"}),Object(u.jsxs)("div",{className:"login-social",children:[Object(u.jsx)(p.a,{icon:Object(u.jsx)(A.a,{}),name:"google",onClick:function(){return y("google")},type:"primary",danger:!0,children:"Google"}),Object(u.jsx)(p.a,{icon:Object(u.jsx)(D.a,{}),name:"github",onClick:function(){return y("github")},children:"Github"})]})]})}),_=n(72),H=function(){var e=Object(l.f)(),t=function(){S.signOut().then((function(){e.push("/")})).catch((function(e){console.log(e)}))},n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){g.ref("WpDb/UserRole").on("value",(function(e){var t=e.val();null!=t&&Object.values(t).forEach((function(e,t){S.currentUser.email===e&&r(!0)}))}))}),[]),Object(u.jsxs)(_.a,{onClick:function(n){"/logout"===n.key?t():e.push(n.key)},className:"menu",defaultSelectedKeys:["/"],mode:"inline",children:[Object(u.jsx)(_.a.Item,{children:"Upload File"},"/uploadfile"),s?Object(u.jsx)(_.a.Item,{children:"Upload File Standard"},"/uploadfilestandard"):null,Object(u.jsx)(_.a.Item,{children:Object(u.jsx)(p.a,{type:"primary",block:!0,children:"Logout"})},"/logout")]})},Y=n(255),G=n(251),R=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],j={beforeUpload:function(e){return e.name.includes(".hwp")||O.b.error("".concat(e.name," is not a hwp file")),!!e.name.includes(".hwp")||m.a.LIST_IGNORE},onChange:function(e){console.log("info",e);var t=e.fileList[0].originFileObj;c(t)}},d=function(e,t,n,a){I.database().ref("WpDb/41/Standard/"+e).set({FileSrc:t,FileName:n,InsertTime:k()().format("YYYY-MM-DD HH:mm:ss"),IsActive:a})},h=Object(a.useState)(),x=Object(i.a)(h,2),S=x[0],y=x[1];Object(a.useEffect)((function(){g.ref("WpDb/41/Standard").on("value",(function(e){var t=e.val();null!=t&&y(Object.values(t))}))}),[]);var N=[{title:"FileName",dataIndex:"FileName",key:"FileName",render:function(e,t){return Object(u.jsx)("span",{children:t.FileName})}},{title:"InsertTime",dataIndex:"InsertTime",key:"InsertTime",render:function(e,t){return Object(u.jsx)("span",{children:t.InsertTime})}},{title:"IsActive",dataIndex:"IsActive",key:"IsActive",render:function(e,t){return Object(u.jsx)("span",{children:t.IsActive?"Active":"In Active"})}},{title:"Action",key:"action",render:function(e,t){return Object(u.jsx)(Y.b,{size:"middle",children:Object(u.jsx)("a",{children:"Edit"})})}}];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"upload-page",children:[Object(u.jsxs)("div",{className:"upload-area",children:[Object(u.jsx)(m.a,Object(b.a)(Object(b.a)({},j),{},{maxCount:1,children:Object(u.jsx)(p.a,{icon:Object(u.jsx)(f.a,{}),children:"Upload Standard File"})})),Object(u.jsx)(p.a,{onClick:function(){var e=v.ref("WpFile/Standard/"+n.name).put(n);l("Uploading..."),e.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log(t+"% done")}),(function(e){console.log(e),l(e.message)}),(function(){v.ref("WpFile/Standard/").child(n.name).getDownloadURL().then((function(e){l("Upload successfull!!!");var t=g.ref().push().key;d(t,e,n.name,!0)}))}))},children:"Upload"}),Object(u.jsx)("span",{children:o})]}),Object(u.jsx)(G.a,{columns:N,dataSource:S})]})})},M=function(e){var t=e.isLoggedIn;return console.log(t?"login success":"login false"),Object(u.jsx)(o.a,{children:Object(u.jsx)(l.c,{children:!0===t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"banner"}),Object(u.jsx)(H,{}),Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(w,{isLoggedIn:t})}),Object(u.jsx)(l.a,{exact:!0,path:"/profile",children:Object(u.jsx)(d,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/editprofile",children:Object(u.jsx)(j,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/uploadfile",children:Object(u.jsx)(w,{isLoggedIn:t})}),Object(u.jsx)(l.a,{exact:!0,path:"/uploadfilestandard",children:Object(u.jsx)(R,{})})]}):Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(T,{})})})})};var z=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){S.onAuthStateChanged((function(e){l(!!e),c(!0)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[n?Object(u.jsx)(M,{isLoggedIn:o}):"Initializing....",Object(u.jsxs)("footer",{className:"footer",children:["\xa9 ",(new Date).getFullYear()," We give you dream"]})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[248,1,2]]]);
//# sourceMappingURL=main.4cca1234.chunk.js.map