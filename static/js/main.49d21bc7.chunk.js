(this["webpackJsonpplay-it"]=this["webpackJsonpplay-it"]||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(9),s=a.n(c),o=(a(15),a(5)),i=a(1),l=a(2);function b(){return Object(l.jsx)("div",{style:{backgroundImage:"url(/assets/bg-asset.jpg)",backgroundRepeat:"round",backgroundSize:"100%",height:"100vh",opacity:"0.7",display:"grid"},children:Object(l.jsx)("button",{style:{height:"70px",width:"500px",margin:"auto",fontSize:"50px",borderColor:"rgba(0, 167 , 255, 0.8)",borderRadius:"2rem",textAlign:"center",backgroundColor:"rgba(138, 230, 150, 0.8)"},children:Object(l.jsx)(o.b,{to:"/math-battle",style:{textDecoration:"none",color:"tomato"},children:"Play"})})})}var u=a(8),j=a.n(u),f=a(10),d=a(3);a(18);function h(){var e=Object(r.useState)(1),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(Math.ceil(Math.random()*a*5+1)),s=Object(d.a)(c,2),o=s[0],i=s[1],b=Object(r.useState)(Math.ceil(Math.random()*a*5+1)),u=Object(d.a)(b,2),h=u[0],p=u[1],g=Object(r.useState)("+"),x=Object(d.a)(g,2),O=x[0],m=x[1],y=Object(r.useState)(0),v=Object(d.a)(y,2),S=v[0],k=v[1],w=Object(r.useState)("#b1edaf"),C=Object(d.a)(w,2),M=C[0],z=C[1],I=Object(r.useState)("rgba(12, 120, 124, 1.0)"),A=Object(d.a)(I,2),F=A[0],T=A[1],L=Object(r.useState)(!1),N=Object(d.a)(L,2),R=N[0],D=N[1],B=Object(r.useState)(10),P=Object(d.a)(B,2),E=P[0],J=P[1],X=Object(r.useRef)(null),G=["#fdbebe","#ffc1b5","#ffc5ac","#fbcaa5","#f4cfa0","#ebd59e","#dfdc9f","#d2e2a4","#c2e8ad","#b1edb9","#b1edbf"];Object(r.useEffect)((function(){var e=setInterval((function(){E>0?(z(G[E]),T("rgba(12, 120, 124, 1.0)"),J(E-1)):D(!0)}),1e3);return function(){clearInterval(e)}}));var V=function(){switch(Math.ceil(4*Math.random())){case 1:m("+");break;case 2:m("-");break;case 3:m("/");break;case 4:m("*");break;default:m("+")}},W=function(){i(Math.ceil(Math.random()*a*5+10)),p(Math.ceil(Math.random()*a*5+1))},Y=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=parseInt(X.current.value),c=!1,e.t0=O,e.next="+"===e.t0?6:"-"===e.t0?8:"/"===e.t0?10:"*"===e.t0?12:14;break;case 6:return o+h===r&&(c=!0),e.abrupt("break",15);case 8:return o-h===r&&(c=!0),e.abrupt("break",15);case 10:return parseInt(o/h)===r&&(c=!0),e.abrupt("break",15);case 12:return o*h===r&&(c=!0),e.abrupt("break",15);case 14:return e.abrupt("return");case 15:X.current.focus(),c?(k(S+1),W(),V(),z("rgba(0, 160, 00, 0.3)"),J(10),S>=5&&S%3===0&&n(a+1)):(S>0&&k(S-1),parseInt(S)<=1&&(D(!0),J(0)),n(a+2),z("rgba(160, 0, 0, 0.3)"),T("rgba(255, 0,0, 0.7)")),X.current.value=" ";case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",style:{display:"block",backgroundColor:M,height:"100vh"},children:[Object(l.jsxs)("div",{style:{marginBottom:"3rem",marginLeft:"3rem",marginRight:"3rem",display:"flex",justifyContent:"space-between",paddingTop:"5rem"},children:[Object(l.jsxs)("span",{className:"score",style:{float:"left",color:"rgb(72, 146, 54)",fontSize:"50px",fontVariant:"small-caps"},children:["Score: ",S]}),Object(l.jsxs)("span",{className:"level",style:{float:"right",color:"rgb(230, 113, 113)",fontSize:"50px"},children:["Level: ",a]}),Object(l.jsxs)("span",{className:"timer",style:{float:"right",color:"#000",fontSize:"50px"},children:["Time Left: ",E]})]}),Object(l.jsxs)("h1",{className:"expression",style:{marginTop:"8rem",color:F,fontSize:"100px",textAlign:"center",justifyContent:"center"},children:[o," ",O," ",h]}),Object(l.jsx)("form",{onSubmit:Y,children:Object(l.jsx)("input",{type:"text",ref:X,disabled:R,placeholder:"Type Answer..."})}),R&&Object(l.jsx)("h1",{style:{color:"yellow",fontSize:"40px",textAlign:"center",fontFamily:"'Satisfy', cursive"},children:"X Game Over X"}),R&&Object(l.jsxs)("h2",{style:{color:"yellow",fontSize:"40px",textAlign:"center",fontFamily:"'Satisfy', cursive"},children:["Your Score: ",S]}),R&&Object(l.jsx)("button",{style:{width:"300px",height:"80px",backgroundColor:"rgba(0,200, 200,0.5)",border:"none",justifyContent:"center",flexDirection:"column",display:"block",margin:"auto",textAlign:"center",fontSize:"60px",padding:"4rem",color:"white",fontWeight:"bold",fontFamily:"'Satisfy', cursive"},onClick:function(){J(10),k(0),T("rgba(12, 120, 124, 1.0)"),D(!1),z("#b1edaf"),n(1),X.current.val="",W()},children:"Restart"})]})}function p(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",element:Object(l.jsx)(b,{})}),Object(l.jsx)(i.a,{path:"/math-battle",element:Object(l.jsx)(h,{})})]})})}var g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.49d21bc7.chunk.js.map