import{i as l,u as w,j as e,T as F,n as P,C as q,o as V,p as S,q as b,P as k,D as A,y as N,z as o,V as v,E as n,H as Y,J as z,K as O,M as C,L as T,N as X,O as G,aQ as H,aa as c,Y as a,aq as J,aR as U,aS as Q,aT as W,aU as $,aV as K,aW as M,aX as Z,aY as _,aZ as ee,a9 as ne,m as ae,a3 as se,a4 as te,a5 as re,a6 as oe,a_ as ie,a$ as le,$ as ce,a0 as de,a1 as me}from"./ExplicacaoAssinatura-a1af263d.js";const xe=()=>{const i=l.useRef(null),u=w(),[g,E]=l.useState(""),[h,L]=l.useState(!1);l.useEffect(()=>{const s=i.current,t=s.getContext("2d");let d=!1,m=0,x=0;const j=()=>{s.width=s.offsetWidth,s.height=s.offsetHeight},p=r=>{d=!0,[m,x]=[r.offsetX,r.offsetY]},f=()=>{d=!1},y=r=>{d&&(t.beginPath(),t.moveTo(m,x),t.lineTo(r.offsetX,r.offsetY),t.stroke(),[m,x]=[r.offsetX,r.offsetY])};return j(),window.addEventListener("resize",j),s.addEventListener("mousedown",p),s.addEventListener("mouseup",f),s.addEventListener("mousemove",y),()=>{window.removeEventListener("resize",j),s.removeEventListener("mousedown",p),s.removeEventListener("mouseup",f),s.removeEventListener("mousemove",y)}},[]);const B=()=>{const s=i.current;s.getContext("2d").clearRect(0,0,s.width,s.height)},R=()=>{u(window.location.pathname)},I=()=>{const t=i.current.toDataURL("image/png");E(t),L(!0)},D=()=>{u("/")};return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:"Assinatura"}),e.jsx(P,{}),e.jsxs(q,{children:[e.jsx(V,{ref:i}),e.jsx(S,{type:"button",onClick:B,children:"Limpar Assinatura"}),e.jsx("input",{type:"hidden",value:g,id:"assinatura"}),e.jsx(b,{children:"Requerente"})]}),h?e.jsx(k,{style:{width:"100%",height:"700px"},className:"mb-3",children:e.jsx(A,{children:e.jsx(N,{size:"A4",style:o.page,children:e.jsxs(v,{style:o.section,children:[e.jsx(n,{children:"Requerente"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome").value}),e.jsx(n,{style:{marginTop:10},children:"CPF"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cpf").value}),e.jsx(n,{style:{marginTop:10},children:"Telefone Fixo"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("telefone").value}),e.jsx(n,{style:{marginTop:10},children:"Celular"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("celular").value}),e.jsx(n,{style:{marginTop:10},children:"Solicitação"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("solicitacao").value}),e.jsx(n,{style:{marginTop:10},children:"Requerimento"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("requerimento").value}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:"Dados da conta:"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:10},children:"Nome Titular"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome2").value}),e.jsx(n,{style:{marginTop:10},children:"CPF Titular"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cpf2").value}),e.jsx(n,{style:{marginTop:10},children:"CNPJ Titular"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cnpj2").value}),e.jsx(n,{style:{marginTop:10},children:"Banco"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("banco").value}),e.jsx(n,{style:{marginTop:10},children:"Agencia"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("agencia").value}),e.jsx(n,{style:{marginTop:10},children:"Operação"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("operacao").value}),e.jsx(n,{style:{marginTop:10},children:"Conta"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta").value}),e.jsxs(n,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio").checked?"   ( x )":"   ( )"," Conta Corrente",document.getElementById("radio1").checked?"   ( x )":"   ( )"," Conta Salário",document.getElementById("radio2").checked?"   ( x )":"   ( )"," Banco Digital"]}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:"Vínculo:"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:10},children:"Conta informada vinculada ao CNPJ"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta-cnpj").value}),e.jsx(n,{style:{marginTop:10},children:"Conta informada vinculada ao CPF"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta-cpf").value}),e.jsx(n,{style:{marginTop:10},children:"Conta informada pertence a terceiro (Informar no requerimento)"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta-terceiro").value}),e.jsx(n,{style:{marginTop:10},children:"Data"}),e.jsx(n,{}),e.jsx(n,{style:{marginTop:5,marginLeft:10},children:document.getElementById("data").value}),e.jsxs(v,{style:o.signatureContainer,children:[e.jsx(Y,{src:g,style:o.signature}),e.jsx(n,{style:o.signatureText,children:"REQUERENTE"})]})]})})})}):null,e.jsx(z,{}),e.jsxs(O,{children:[e.jsx(C,{onClick:D,children:e.jsx(T,{to:"/",children:"Serviços"})}),h?e.jsx(X,{onClick:R,children:"Novo formulário"}):e.jsx(C,{onClick:I,children:"Gerar PDF"})]})]})};function je(){return e.jsx(G,{children:e.jsx(H,{})})}const ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Informações da conta para ressarcimento"}),e.jsx(c,{children:"Dados da conta"}),e.jsx(a,{children:"Nome titular"}),e.jsx(J,{}),e.jsx(a,{children:"Cpf titular"}),e.jsx(U,{}),e.jsx(a,{children:"Cnpj titular"}),e.jsx(Q,{}),e.jsx(a,{children:"Banco"}),e.jsx(W,{}),e.jsx(a,{children:"Agência"}),e.jsx($,{}),e.jsx(a,{children:"Operação"}),e.jsx(K,{}),e.jsx(a,{children:"Conta"}),e.jsx(M,{}),e.jsx(je,{}),e.jsx(c,{children:"Vínculo:"}),e.jsx(a,{children:"Conta informada vinculada ao cnpj"}),e.jsx(Z,{}),e.jsx(a,{children:"Conta informada vinculada ao cpf"}),e.jsx(_,{}),e.jsx(a,{children:"Conta informada vinculada pertence a terceiro (informar no requerimento)"}),e.jsx(ee,{}),e.jsx(c,{children:"Observação: Deve ser anexado cópia original do cartão ou outro documento oficial que confirme os dados bancários, para ressarcimento no processo"}),e.jsx(a,{children:"Data"}),e.jsx(ne,{}),e.jsx(ae,{})]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Requerente"}),e.jsx(se,{}),e.jsx(a,{children:"Cpf"}),e.jsx(te,{}),e.jsx(a,{children:"Telefone fixo"}),e.jsx(re,{}),e.jsx(a,{children:"Celular"}),e.jsx(oe,{}),e.jsx(a,{children:"Solicitação"}),e.jsx(ie,{}),e.jsx(a,{children:"Requerimento"}),e.jsx(le,{})]});function he(){return e.jsxs(e.Fragment,{children:[e.jsx(ge,{}),e.jsx(ue,{}),e.jsx(xe,{})]})}function pe(){return e.jsx(ce,{children:e.jsx(he,{})})}function ye(){return e.jsxs(e.Fragment,{children:[e.jsx(de,{children:"Requerimento - Ressarcimento de valores"}),e.jsxs(me,{children:[e.jsx(T,{to:"/",children:"Voltar para os serviços"}),e.jsx(pe,{})]})]})}export{ye as R};
