(this["webpackJsonpgh-react-todo"]=this["webpackJsonpgh-react-todo"]||[]).push([[0],{40:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a(0),n=a(18),r=a.n(n);a(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(6),i=a(27),j=a(11),b=a(7),u=a(33),d=(a(41),a(32)),l=a(51);var O=function(e,t){var a={IDLE:{fetch:Object(o.a)(Object(o.a)({},e),{},{status:"LOADING",isInputDisabled:!0}),create:Object(o.a)(Object(o.a)({},e),{},{status:"CREATING",isInputDisabled:!0}),update:Object(o.a)(Object(o.a)({},e),{},{status:"UPDATING",isInputDisabled:!0}),delete:Object(o.a)(Object(o.a)({},e),{},{status:"DELETING",isInputDisabled:!0})},CREATING:{fetch:Object(o.a)(Object(o.a)({},e),{},{status:"LOADING"}),reject:Object(o.a)(Object(o.a)({},e),{},{status:"FAILURE",error:t.error})},UPDATING:{fetch:Object(o.a)(Object(o.a)({},e),{},{status:"LOADING"}),reject:Object(o.a)(Object(o.a)({},e),{},{status:"FAILURE",error:t.error})},DELETING:{fetch:Object(o.a)(Object(o.a)({},e),{},{status:"LOADING"}),reject:Object(o.a)(Object(o.a)({},e),{},{status:"FAILURE",error:t.error})},LOADING:{resolve:Object(o.a)(Object(o.a)({},e),{},{status:"IDLE",data:t.data,isInputDisabled:!1}),reject:Object(o.a)(Object(o.a)({},e),{},{status:"FAILURE",error:t.error})},FAILURE:{}}[e.status][t.type];return void 0!==a?a:e},p=a(17),h=a(13),m=a(16),f=a(30),x=a(14),v=function(e){return void 0!==e.data?e.data.map((function(t){var a=t.isCompleted?Object(c.jsx)("strike",{children:Object(c.jsx)("b",{children:t.data})}):t.data,s=t._id;return Object(c.jsx)("tr",{children:Object(c.jsxs)("td",{children:[a,Object(c.jsx)(x.a,{onClick:function(){e.setUpdateId(s),e.dispatch({type:"update"})},variant:"info",size:"sm",className:"float-right ml-2",children:"Complete"}),Object(c.jsx)(x.a,{onClick:function(){e.setRemoveId(s),e.dispatch({type:"delete"})},variant:"danger",size:"sm",className:"float-right",children:"Delete"})]})},"key-"+t._id)})):null};var I=function(){var e=Object(s.useReducer)(O,{status:"LOADING",data:[],error:null,id:null,isCompleted:!1,isInputDisabled:!0}),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)([]),o=Object(j.a)(r,2),i=o[0],b=o[1],u=Object(s.useState)(""),d=Object(j.a)(u,2),I=d[0],g=d[1],D=Object(s.useState)(""),N=Object(j.a)(D,2),A=N[0],E=N[1],y=Object(s.useState)(""),C=Object(j.a)(y,2),L=C[0],w=C[1];return Object(s.useEffect)((function(){"CREATING"===a.status&&function(){var e=i.concat([{_id:Object(l.a)(),data:L,isCompleted:!1}]);b(e),w(""),n({type:"fetch"})}(),"LOADING"===a.status&&n({type:"resolve",data:i}),"UPDATING"===a.status&&function(){var e=i.map((function(e){return e._id===I?Object.assign(e,{isCompleted:!e.isCompleted}):e}));b(e),n({type:"fetch"})}(),"DELETING"===a.status&&function(){var e=i.filter((function(e){return e._id!==A}));b(e),n({type:"fetch"})}()}),[a.status]),Object(c.jsxs)(p.a,{children:[Object(c.jsxs)(h.a,{xs:12,className:"mt-5",children:[Object(c.jsx)("h1",{children:"React To Do App"}),Object(c.jsxs)(m.a,{className:"mt-2",onSubmit:function(e){e.preventDefault(),n({type:"create",query:L})},children:[Object(c.jsx)(m.a.Control,{disabled:a.isInputDisabled,type:"text",required:!0,placeholder:"What needs to be done?",onChange:function(e){return w(e.target.value)},value:L}),Object(c.jsx)(x.a,{className:"mt-2 float-right",variant:"primary",type:"submit",children:"Add Todo"})]})]}),Object(c.jsx)(h.a,{children:Object(c.jsx)(f.a,{bordered:!0,hover:!0,className:"mt-5",children:Object(c.jsx)("tbody",{children:Object(c.jsx)(v,{data:a.data,dispatch:n,setUpdateId:g,setRemoveId:E})})})})]})},g=a(19),D={email:"",password:""},N=function(e){var t=Object(s.useState)(D),a=Object(j.a)(t,2),n=a[0],r=a[1],i=Object(s.useState)(!1),b=Object(j.a)(i,2),u=b[0],d=b[1];Object(s.useEffect)((function(){u&&(alert(" email: test@test.com \n password: pass"),d(!1))}),[u]);var l=function(e){var t=e.target,a=t.name,c=t.value;r((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(g.a)({},a,c))}))},O=""===n.password||""===n.email;return Object(c.jsxs)(m.a,{onSubmit:function(t){t.preventDefault(),"test@test.com"===n.email&&"pass"===n.password?e.setUser(!0):d(!0)},children:[Object(c.jsx)(m.a.Control,{className:"mb-2",name:"email",autoComplete:"off",value:n.email,onChange:l,type:"text",placeholder:"Email Address"}),Object(c.jsx)(m.a.Control,{name:"password",autoComplete:"off",value:n.password,onChange:l,type:"password",placeholder:"Password"}),Object(c.jsx)(x.a,{className:"mt-2 float-right",disabled:O,type:"submit",children:"Sign In"})]})},A=function(e){return Object(c.jsx)(p.a,{children:Object(c.jsx)(h.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"text-center mb-5",children:"Sign In"}),Object(c.jsx)(N,{setUser:e.setUser})]})})})},E=a(34),y=function(e){return Object(c.jsx)(p.a,{children:Object(c.jsx)(h.a,{className:"mb-5",children:Object(c.jsx)(E.a,{bg:"primary",children:Object(c.jsx)(x.a,{variant:"outline-light",onClick:function(){return e.setUser(!1)},children:"Sign Out"})})})})};var C=function(e){var t=Object(s.useState)("loading"),a=Object(j.a)(t,2),n=a[0],r=a[1];Object(s.useEffect)((function(){r(!0)}),[]);var l=function(e){var t=e.component,a=Object(i.a)(e,["component"]);return Object(c.jsx)(b.b,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return"loading"===n?null:!0===n?Object(c.jsx)(t,Object(o.a)(Object(o.a)({},a),e)):Object(c.jsx)(b.a,{to:"signin"})}}))},O=function(e){var t=e.component,a=Object(i.a)(e,["component"]);return Object(c.jsx)(b.b,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return"loading"===n?null:!1===n?Object(c.jsx)(t,Object(o.a)(Object(o.a)({},a),e)):Object(c.jsx)(b.a,{to:"/"})}}))};return Object(c.jsx)(d.a,{children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(y,{setUser:r}),Object(c.jsxs)(b.d,{children:[Object(c.jsx)(O,{exact:!0,path:"/signin",user:n,setUser:r,component:A}),Object(c.jsx)(l,{exact:!0,path:"/",user:n,component:I})]})]})})};r.a.render(Object(c.jsx)(C,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.c77cd25e.chunk.js.map