import{i as l,u as w,j as e,T as F,n as P,C as q,o as b,p as V,q as S,E as k,P as A,D as N,y as z,z as o,V as v,H as a,J as Y,K as O,M as C,L as T,N as X,O as G,aQ as H,aa as c,Y as s,aq as J,aR as U,aS as Q,aT as W,aU as $,aV as K,aW as M,aX as Z,aY as _,aZ as ee,a9 as ae,m as se,a3 as ne,a4 as te,a5 as re,a6 as oe,a_ as ie,a$ as le,$ as ce,a0 as de,a1 as me}from"./LeiLgpd-51dbcb1c.js";const xe=()=>{const i=l.useRef(null),u=w(),[g,E]=l.useState(""),[h,L]=l.useState(!1);l.useEffect(()=>{const n=i.current,t=n.getContext("2d");let d=!1,m=0,x=0;const j=()=>{n.width=n.offsetWidth,n.height=n.offsetHeight},p=r=>{d=!0,[m,x]=[r.offsetX,r.offsetY]},f=()=>{d=!1},y=r=>{d&&(t.beginPath(),t.moveTo(m,x),t.lineTo(r.offsetX,r.offsetY),t.stroke(),[m,x]=[r.offsetX,r.offsetY])};return j(),window.addEventListener("resize",j),n.addEventListener("mousedown",p),n.addEventListener("mouseup",f),n.addEventListener("mousemove",y),()=>{window.removeEventListener("resize",j),n.removeEventListener("mousedown",p),n.removeEventListener("mouseup",f),n.removeEventListener("mousemove",y)}},[]);const B=()=>{const n=i.current;n.getContext("2d").clearRect(0,0,n.width,n.height)},R=()=>{u(window.location.pathname)},I=()=>{const t=i.current.toDataURL("image/png");E(t),L(!0)},D=()=>{u("/")};return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:"Assinatura"}),e.jsx(P,{}),e.jsxs(q,{children:[e.jsx(b,{ref:i}),e.jsx(V,{type:"button",onClick:B,children:"Limpar Assinatura"}),e.jsx("input",{type:"hidden",value:g,id:"assinatura"}),e.jsx(S,{children:"Requerente"})]}),e.jsx(k,{}),h?e.jsx(A,{style:{width:"100%",height:"700px"},className:"mb-3",children:e.jsx(N,{children:e.jsx(z,{size:"A4",style:o.page,children:e.jsxs(v,{style:o.section,children:[e.jsx(a,{children:"Requerente"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome").value}),e.jsx(a,{style:{marginTop:10},children:"CPF"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cpf").value}),e.jsx(a,{style:{marginTop:10},children:"Telefone Fixo"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("telefone").value}),e.jsx(a,{style:{marginTop:10},children:"Celular"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("celular").value}),e.jsx(a,{style:{marginTop:10},children:"Solicitação"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("solicitacao").value}),e.jsx(a,{style:{marginTop:10},children:"Requerimento"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("requerimento").value}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:"Dados da conta:"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:10},children:"Nome Titular"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome2").value}),e.jsx(a,{style:{marginTop:10},children:"CPF Titular"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cpf2").value}),e.jsx(a,{style:{marginTop:10},children:"CNPJ Titular"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cnpj2").value}),e.jsx(a,{style:{marginTop:10},children:"Banco"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("banco").value}),e.jsx(a,{style:{marginTop:10},children:"Agencia"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("agencia").value}),e.jsx(a,{style:{marginTop:10},children:"Operação"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("operacao").value}),e.jsx(a,{style:{marginTop:10},children:"Conta"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta").value}),e.jsxs(a,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio").checked?"   ( x )":"   ( )"," Conta Corrente",document.getElementById("radio1").checked?"   ( x )":"   ( )"," Conta Salário",document.getElementById("radio2").checked?"   ( x )":"   ( )"," Banco Digital"]}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:"Vínculo:"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:10},children:"Conta informada vinculada ao CNPJ"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta-cnpj").value}),e.jsx(a,{style:{marginTop:10},children:"Conta informada vinculada ao CPF"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta-cpf").value}),e.jsx(a,{style:{marginTop:10},children:"Conta informada pertence a terceiro (Informar no requerimento)"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("conta-terceiro").value}),e.jsx(a,{style:{marginTop:10},children:"Data"}),e.jsx(a,{}),e.jsx(a,{style:{marginTop:5,marginLeft:10},children:document.getElementById("data").value}),e.jsx(a,{}),e.jsx(a,{style:o.text,children:"Em observância à lei nº. 13.709/18-lei geral de proteção de dados pessoais e demais normativas aplicáveis sobre proteção de dados pessoais, manifesto-me de forma informada, livre, expressa e consciente, no sentido de autorizar o espaço do empreendedor de são josé sc a realizar o tratamento de meus dados pessoais para as finalidades e de acordo com as condições aqui estabelecidas."}),e.jsxs(v,{style:o.signatureContainer,children:[e.jsx(Y,{src:g,style:o.signature}),e.jsx(a,{style:o.signatureText,children:"REQUERENTE"})]})]})})})}):null,e.jsxs(O,{children:[e.jsx(C,{onClick:D,children:e.jsx(T,{to:"/",children:"Serviços"})}),h?e.jsx(X,{onClick:R,children:"Novo formulário"}):e.jsx(C,{onClick:I,children:"Gerar PDF"})]})]})};function je(){return e.jsx(G,{children:e.jsx(H,{})})}const ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Informações da conta para ressarcimento"}),e.jsx(c,{children:"Dados da conta"}),e.jsx(s,{children:"Nome titular"}),e.jsx(J,{}),e.jsx(s,{children:"Cpf titular"}),e.jsx(U,{}),e.jsx(s,{children:"Cnpj titular"}),e.jsx(Q,{}),e.jsx(s,{children:"Banco"}),e.jsx(W,{}),e.jsx(s,{children:"Agência"}),e.jsx($,{}),e.jsx(s,{children:"Operação"}),e.jsx(K,{}),e.jsx(s,{children:"Conta"}),e.jsx(M,{}),e.jsx(je,{}),e.jsx(c,{children:"Vínculo:"}),e.jsx(s,{children:"Conta informada vinculada ao cnpj"}),e.jsx(Z,{}),e.jsx(s,{children:"Conta informada vinculada ao cpf"}),e.jsx(_,{}),e.jsx(s,{children:"Conta informada vinculada pertence a terceiro (informar no requerimento)"}),e.jsx(ee,{}),e.jsx(c,{children:"Observação: Deve ser anexado cópia original do cartão ou outro documento oficial que confirme os dados bancários, para ressarcimento no processo"}),e.jsx(s,{children:"Data"}),e.jsx(ae,{}),e.jsx(se,{})]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Requerente"}),e.jsx(ne,{}),e.jsx(s,{children:"Cpf"}),e.jsx(te,{}),e.jsx(s,{children:"Telefone fixo"}),e.jsx(re,{}),e.jsx(s,{children:"Celular"}),e.jsx(oe,{}),e.jsx(s,{children:"Solicitação"}),e.jsx(ie,{}),e.jsx(s,{children:"Requerimento"}),e.jsx(le,{})]});function he(){return e.jsxs(e.Fragment,{children:[e.jsx(ge,{}),e.jsx(ue,{}),e.jsx(xe,{})]})}function pe(){return e.jsx(ce,{children:e.jsx(he,{})})}function ye(){return e.jsxs(e.Fragment,{children:[e.jsx(de,{children:"Requerimento - Ressarcimento de valores"}),e.jsxs(me,{children:[e.jsx(T,{to:"/",children:"Voltar para os serviços"}),e.jsx(pe,{})]})]})}export{ye as R};
