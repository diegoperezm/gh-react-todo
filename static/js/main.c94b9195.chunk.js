(this["webpackJsonpgh-react-todo"]=this["webpackJsonpgh-react-todo"]||[]).push([[0],{40:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a(0),n=a(18),r=a.n(n);a(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(5),o=a(27),i=a(11),b=a(7),u=a(33),l=(a(41),a(32)),d=a(51);var O=function(e,t){var a={IDLE:{fetch:Object(j.a)(Object(j.a)({},e),{},{status:"LOADING",isInputDisabled:!0}),create:Object(j.a)(Object(j.a)({},e),{},{status:"CREATING",isInputDisabled:!0}),update:Object(j.a)(Object(j.a)({},e),{},{status:"UPDATING",isInputDisabled:!0}),delete:Object(j.a)(Object(j.a)({},e),{},{status:"DELETING",isInputDisabled:!0})},CREATING:{fetch:Object(j.a)(Object(j.a)({},e),{},{status:"LOADING"}),reject:Object(j.a)(Object(j.a)({},e),{},{status:"FAILURE",error:t.error})},NOENTCREATING:{fetch:Object(j.a)(Object(j.a)({},e),{},{status:"LOADING"}),reject:Object(j.a)(Object(j.a)({},e),{},{status:"FAILURE",error:t.error})},UPDATING:{fetch:Object(j.a)(Object(j.a)({},e),{},{status:"LOADING"}),noent:Object(j.a)(Object(j.a)({},e),{},{status:"NOENTCREATING",noEntQuery:t.noEntQuery,isCompleted:t.isCompleted}),reject:Object(j.a)(Object(j.a)({},e),{},{status:"FAILURE",error:t.error})},DELETING:{fetch:Object(j.a)(Object(j.a)({},e),{},{status:"LOADING"}),reject:Object(j.a)(Object(j.a)({},e),{},{status:"FAILURE",error:t.error})},LOADING:{resolve:Object(j.a)(Object(j.a)({},e),{},{status:"IDLE",data:t.data,isInputDisabled:!1}),reject:Object(j.a)(Object(j.a)({},e),{},{status:"FAILURE",error:t.error})},FAILURE:{}}[e.status][t.type];return void 0!==a?a:e},h=a(17),p=a(13),m=a(16),f=a(30),x=a(14),I=function(e){return void 0!==e.data||null!==e.data.data?e.data.map((function(t){var a=t.isCompleted?Object(c.jsx)("strike",{children:Object(c.jsx)("b",{children:t.data})}):t.data,s=t._id;return Object(c.jsx)("tr",{children:Object(c.jsxs)("td",{children:[a,Object(c.jsx)(x.a,{onClick:function(){e.setUpdateId(s),e.dispatch({type:"update"})},variant:"info",size:"sm",className:"float-right ml-2",children:"Complete"}),Object(c.jsx)(x.a,{onClick:function(){e.setRemoveId(s),e.dispatch({type:"delete"})},variant:"danger",size:"sm",className:"float-right",children:"Delete"})]})},"key-"+t._id)})):null};var v=function(){var e=Object(s.useReducer)(O,{status:"LOADING",data:[],error:null,id:null,noEntQuery:null,isCompleted:!1,isInputDisabled:!0}),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)([]),j=Object(i.a)(r,2),o=j[0],b=j[1],u=Object(s.useState)(""),l=Object(i.a)(u,2),v=l[0],N=l[1],E=Object(s.useState)(""),g=Object(i.a)(E,2),D=g[0],A=g[1],C=Object(s.useState)(""),y=Object(i.a)(C,2),G=y[0],L=y[1];return Object(s.useEffect)((function(){"CREATING"===a.status&&function(){var e=o.concat([{_id:Object(d.a)(),data:G,isCompleted:!1}]);b(e),L(""),n({type:"fetch"})}(),"NOENTCREATING"===a.status&&n({type:"failure"}),"LOADING"===a.status&&n({type:"resolve",data:o}),"UPDATING"===a.status&&function(){var e=o.map((function(e){return e._id===v?Object.assign(e,{isCompleted:!e.isCompleted}):e}));b(e),n({type:"fetch"})}(),"DELETING"===a.status&&function(){var e=o.filter((function(e){return e._id!==D}));b(e),n({type:"fetch"})}()}),[a.status]),Object(c.jsxs)(h.a,{children:[Object(c.jsxs)(p.a,{xs:12,className:"mt-5",children:[Object(c.jsx)("h1",{children:"To do app"}),Object(c.jsxs)(m.a,{className:"mt-2",onSubmit:function(e){e.preventDefault(),n({type:"create",query:G})},children:[Object(c.jsx)(m.a.Control,{disabled:a.isInputDisabled,type:"text",required:!0,placeholder:"What needs to be done?",onChange:function(e){return L(e.target.value)},value:G}),Object(c.jsx)(x.a,{className:"mt-2 float-right",variant:"primary",type:"submit",children:"Add Todo"})]})]}),Object(c.jsx)(p.a,{children:Object(c.jsx)(f.a,{bordered:!0,hover:!0,className:"mt-5",children:Object(c.jsx)("tbody",{children:Object(c.jsx)(I,{data:a.data,dispatch:n,setUpdateId:N,setRemoveId:A})})})})]})},N=a(19),E={email:"",password:""},g=function(e){var t=Object(s.useState)(E),a=Object(i.a)(t,2),n=a[0],r=a[1],o=Object(s.useState)(null),b=Object(i.a)(o,1)[0],u=function(e){var t=e.target,a=t.name,c=t.value;r((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(N.a)({},a,c))}))},l=""===n.password||""===n.email;return Object(c.jsxs)(m.a,{onSubmit:function(t){t.preventDefault(),e.setUser(!0)},children:[Object(c.jsx)(m.a.Control,{className:"mb-2",name:"email",autoComplete:"off",value:n.email,onChange:u,type:"text",placeholder:"Email Address"}),Object(c.jsx)(m.a.Control,{name:"password",autoComplete:"off",value:n.password,onChange:u,type:"password",placeholder:"Password"}),Object(c.jsx)(x.a,{className:"mt-2 float-right",disabled:l,type:"submit",children:"Sign In"}),b&&Object(c.jsx)("p",{children:b.message})]})},D=function(e){return Object(c.jsx)(h.a,{children:Object(c.jsx)(p.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"text-center mb-5",children:"Sign In"}),Object(c.jsx)(g,{setUser:e.setUser})]})})})},A=a(34),C=function(e){return Object(c.jsx)(h.a,{children:Object(c.jsx)(p.a,{className:"mb-5",children:Object(c.jsx)(A.a,{bg:"primary",children:Object(c.jsx)(x.a,{variant:"outline-light",onClick:function(){return e.setUser(!1)},children:"Sign Out"})})})})};var y=function(e){var t=Object(s.useState)("loading"),a=Object(i.a)(t,2),n=a[0],r=a[1];Object(s.useEffect)((function(){r(!0)}),[]);var d=function(e){var t=e.component,a=Object(o.a)(e,["component"]);return Object(c.jsx)(b.b,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return"loading"===n?null:!0===n?Object(c.jsx)(t,Object(j.a)(Object(j.a)({},a),e)):Object(c.jsx)(b.a,{to:"signin"})}}))},O=function(e){var t=e.component,a=Object(o.a)(e,["component"]);return Object(c.jsx)(b.b,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return"loading"===n?null:!1===n?Object(c.jsx)(t,Object(j.a)(Object(j.a)({},a),e)):Object(c.jsx)(b.a,{to:"/"})}}))};return Object(c.jsx)(l.a,{children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(C,{setUser:r}),Object(c.jsxs)(b.d,{children:[Object(c.jsx)(O,{exact:!0,path:"/signin",user:n,setUser:r,component:D}),Object(c.jsx)(d,{exact:!0,path:"/",user:n,component:v})]})]})})};r.a.render(Object(c.jsx)(y,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.c94b9195.chunk.js.map