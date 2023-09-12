import{q as l,u as D,j as e,T as P,C as F,w as V,x as q,y as S,P as N,K as b,M as k,N as o,V as v,O as n,Q as A,S as O,U as C,L as T,W as Y,i as X,aN as z,a7 as c,o as a,an as U,aO as G,aP as Q,aQ as W,aR as H,aS as J,aT as K,aU as M,aV as Z,aW as _,a6 as $,a0 as ee,a1 as ne,a2 as ae,a3 as se,aX as te,aY as re,Y as oe,Z as ie,_ as le}from"./Input-d467e776.js";const ce=()=>{const i=l.useRef(null),u=D(),[g,E]=l.useState(""),[h,L]=l.useState(!1);l.useEffect(()=>{const s=i.current,t=s.getContext("2d");let d=!1,m=0,x=0;const j=()=>{s.width=s.offsetWidth,s.height=s.offsetHeight},f=r=>{d=!0,[m,x]=[r.offsetX,r.offsetY]},p=()=>{d=!1},y=r=>{d&&(t.beginPath(),t.moveTo(m,x),t.lineTo(r.offsetX,r.offsetY),t.stroke(),[m,x]=[r.offsetX,r.offsetY])};return j(),window.addEventListener("resize",j),s.addEventListener("mousedown",f),s.addEventListener("mouseup",p),s.addEventListener("mousemove",y),()=>{window.removeEventListener("resize",j),s.removeEventListener("mousedown",f),s.removeEventListener("mouseup",p),s.removeEventListener("mousemove",y)}},[]);const B=()=>{const s=i.current;s.getContext("2d").clearRect(0,0,s.width,s.height)},R=()=>{u(window.location.pathname)},I=()=>{const t=i.current.toDataURL("image/png");E(t),L(!0)},w=()=>{u("/")};return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:"Assinatura"}),e.jsxs(F,{children:[e.jsx(V,{ref:i}),e.jsx(q,{type:"button",onClick:B,children:"Limpar Assinatura"}),e.jsx("input",{type:"hidden",value:g,id:"assinatura"}),e.jsx(S,{children:"Requerente"})]}),h?e.jsx(N,{style:{width:"100%",height:"700px"},className:"mb-3",children:e.jsx(b,{children:e.jsx(k,{size:"A4",style:o.page,children:e.jsxs(v,{style:o.section,children:[e.jsx(n,{children:"Requerente"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome").value}),e.jsx(n,{style:{marginTop:10},children:"CPF"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cpf").value}),e.jsx(n,{style:{marginTop:10},children:"Telefone Fixo"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("telefone").value}),e.jsx(n,{style:{marginTop:10},children:"Celular"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("celular").value}),e.jsx(n,{style:{marginTop:10},children:"Solicitação"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("solicitacao").value}),e.jsx(n,{style:{marginTop:10},children:"Requerimento"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("requerimento").value}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:"Dados da conta:"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:10},children:"Nome Titular"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome2").value}),e.jsx(n,{style:{marginTop:10},children:"CPF Titular"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cpf2").value}),e.jsx(n,{style:{marginTop:10},children:"CNPJ Titular"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cnpj2").value}),e.jsx(n,{style:{marginTop:10},children:"Banco"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("banco").value}),e.jsx(n,{style:{marginTop:10},children:"Agencia"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("agencia").value}),e.jsx(n,{style:{marginTop:10},children:"Operação"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("operacao").value}),e.jsx(n,{style:{marginTop:10},children:"Conta"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta").value}),e.jsxs(n,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio").checked?"   ( x )":"   ( )"," Conta Corrente",document.getElementById("radio1").checked?"   ( x )":"   ( )"," Conta Salário",document.getElementById("radio2").checked?"   ( x )":"   ( )"," Banco Digital"]}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:"Vínculo:"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:10},children:"Conta informada vinculada ao CNPJ"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta-cnpj").value}),e.jsx(n,{style:{marginTop:10},children:"Conta informada vinculada ao CPF"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta-cpf").value}),e.jsx(n,{style:{marginTop:10},children:"Conta informada pertence a terceiro (Informar no requerimento)"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta-terceiro").value}),e.jsx(n,{style:{marginTop:10},children:"Data"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("data").value}),e.jsxs(v,{style:o.signatureContainer,children:[e.jsx(A,{src:g,style:o.signature}),e.jsx(n,{style:o.signatureText,children:"REQUERENTE"})]})]})})})}):null,e.jsxs(O,{children:[e.jsx(C,{onClick:w,children:e.jsx(T,{to:"/",children:"Serviços"})}),h?e.jsx(Y,{onClick:R,children:"Novo formulário"}):e.jsx(C,{onClick:I,children:"Gerar PDF"})]})]})};function de(){return e.jsx(X,{children:e.jsx(z,{})})}const me=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Informações da conta para ressarcimento"}),e.jsx(c,{children:"Dados da conta"}),e.jsx(a,{children:"Nome titular"}),e.jsx(U,{}),e.jsx(a,{children:"Cpf titular"}),e.jsx(G,{}),e.jsx(a,{children:"Cnpj titular"}),e.jsx(Q,{}),e.jsx(a,{children:"Banco"}),e.jsx(W,{}),e.jsx(a,{children:"Agência"}),e.jsx(H,{}),e.jsx(a,{children:"Operação"}),e.jsx(J,{}),e.jsx(a,{children:"Conta"}),e.jsx(K,{}),e.jsx(de,{}),e.jsx(c,{children:"Vínculo:"}),e.jsx(a,{children:"Conta informada vinculada ao cnpj"}),e.jsx(M,{}),e.jsx(a,{children:"Conta informada vinculada ao cpf"}),e.jsx(Z,{}),e.jsx(a,{children:"Conta informada vinculada pertence a terceiro (informar no requerimento)"}),e.jsx(_,{}),e.jsx(c,{children:"Observação: Deve ser anexado cópia original do cartão ou outro documento oficial que confirme os dados bancários, para ressarcimento no processo"}),e.jsx(a,{children:"Data"}),e.jsx($,{})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Requerente"}),e.jsx(ee,{}),e.jsx(a,{children:"Cpf"}),e.jsx(ne,{}),e.jsx(a,{children:"Telefone fixo"}),e.jsx(ae,{}),e.jsx(a,{children:"Celular"}),e.jsx(se,{}),e.jsx(a,{children:"Solicitação"}),e.jsx(te,{}),e.jsx(a,{children:"Requerimento"}),e.jsx(re,{})]});function je(){return e.jsxs(e.Fragment,{children:[e.jsx(xe,{}),e.jsx(me,{}),e.jsx(ce,{})]})}function ue(){return e.jsx(oe,{children:e.jsx(je,{})})}function he(){return e.jsxs(e.Fragment,{children:[e.jsx(ie,{children:"Requerimento - Ressarcimento de valores"}),e.jsxs(le,{children:[e.jsx(T,{to:"/",children:"Voltar para os serviços"}),e.jsx(ue,{})]})]})}export{he as R};
