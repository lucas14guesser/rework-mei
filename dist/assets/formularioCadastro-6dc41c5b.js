import{q as l,u as M,j as e,C as X,w as Y,x as G,y as H,z as Q,D as J,E as g,H as W,J as p,P as K,K as Z,M as _,N as r,V as y,O as s,Q as c,S as $,U as L,L as A,W as ee,a7 as P,o as a,a8 as se,a9 as ae,aa as ne,ab as re,ac as te,i as f,ad as oe,ae as ie,af as le,ag as de,ah as ce,X as F,a0 as me,$ as xe,a1 as je,ai as ue,aj as he,a3 as ge,ak as pe,al as ye,am as fe,an as ve,ao as Te,ap as Ee,aq as Ce,ar as Be,as as Ie,at as Le,au as Pe,av as Ne,aw as De,ax as be,Y as Ae,Z as Fe,_ as Re}from"./Input-d467e776.js";import{R as N,D,N as b}from"./assinatura-nelissa-be63a939.js";function ke(){const d=l.useRef(null),v=M();l.useState(!1);const[T,R]=l.useState(""),[E,k]=l.useState(!1),[i,m]=l.useState(null),w=()=>{const n=d.current;n.getContext("2d").clearRect(0,0,n.width,n.height)},z=()=>{v(window.location.pathname)},S=()=>{const t=d.current.toDataURL("image/png");R(t),k(!0)},q=()=>{v("/")},O=()=>{m("raquel")},U=()=>{m("dalize")},V=()=>{m("nelissa")};return l.useEffect(()=>{const n=d.current,t=n.getContext("2d");let x=!1,j=0,u=0;const h=()=>{n.width=n.offsetWidth,n.height=n.offsetHeight},C=o=>{x=!0,[j,u]=[o.offsetX,o.offsetY]},B=()=>{x=!1},I=o=>{x&&(t.beginPath(),t.moveTo(j,u),t.lineTo(o.offsetX,o.offsetY),t.stroke(),[j,u]=[o.offsetX,o.offsetY])};return h(),window.addEventListener("resize",h),n.addEventListener("mousedown",C),n.addEventListener("mouseup",B),n.addEventListener("mousemove",I),()=>{window.removeEventListener("resize",h),n.removeEventListener("mousedown",C),n.removeEventListener("mouseup",B),n.removeEventListener("mousemove",I)}},[]),e.jsxs(e.Fragment,{children:[e.jsxs(X,{children:[e.jsx(Y,{ref:d}),e.jsx(G,{type:"button",onClick:w,children:"Limpar Assinatura"}),e.jsx("input",{type:"hidden",value:T,id:"assinatura"}),e.jsx(H,{children:"Assinatura requerente"})]}),e.jsx(Q,{children:e.jsxs(J,{children:[e.jsx(g,{type:"button",onClick:O,children:"Assinatura Raquel"}),e.jsx(g,{type:"button",onClick:U,children:"Assinatura Dalize"}),e.jsx(g,{type:"button",onClick:V,children:"Assinatura Nelissa"})]})}),e.jsxs(W,{children:[i==="raquel"&&e.jsx(p,{src:N}),i==="dalize"&&e.jsx(p,{src:D}),i==="nelissa"&&e.jsx(p,{src:b})]}),E?e.jsx(K,{style:{width:"100%",height:"700px"},className:"mb-3",children:e.jsx(Z,{children:e.jsx(_,{size:"A4",style:r.page,children:e.jsxs(y,{style:r.section,children:[e.jsx(s,{style:{marginBottom:10,textTransform:"uppercase"},children:"Dados do Contribuinte"}),e.jsx(s,{}),e.jsx(s,{children:"Nome"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome").value}),e.jsx(s,{style:{marginTop:10},children:"CNPJ"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cnpj").value}),e.jsx(s,{style:{marginTop:10},children:"CPF"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cpf").value}),e.jsx(s,{style:{marginTop:10},children:"Endereço"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("endereco").value}),e.jsx(s,{style:{marginTop:10},children:"E-mail"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("email").value}),e.jsx(s,{style:{marginTop:10},children:"Telefone"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("celular").value}),e.jsx(s,{style:{marginTop:10},children:"Dívidas Pretendidas a Parcelar"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("parcela").value}),e.jsx(s,{style:{marginTop:10},children:"Número de Parcelas Pretendidas"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("numero-parcela").value}),e.jsx(s,{style:{marginTop:5},children:"Representado por Procurador"}),e.jsx(s,{}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio").checked?"( x )":"( )"," SIM"]}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio1").checked?"( x )":"( )"," NÃO"]}),e.jsx(s,{style:{marginTop:10},children:"Nome do Procurador"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome2").value}),e.jsx(s,{style:{marginTop:10},children:"Endereço"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("endereco2").value}),e.jsx(s,{style:{marginTop:10},children:"E-mail"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("email2").value}),e.jsx(s,{style:{marginTop:10},children:"Telefone"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("celular2").value}),e.jsx(s,{style:{marginTop:10,marginBottom:10,textTransform:"uppercase"},children:"Dados do Responsável pelas Informações Preenchidas neste Formulário"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:10},children:"Nome"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome3").value}),e.jsx(s,{style:{marginTop:10},children:"CPF"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cpf3").value}),e.jsx(s,{style:{marginTop:10},children:"Telefone"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("celular3").value}),e.jsx(s,{style:{marginTop:10},children:"Endereço"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("endereco3").value}),e.jsx(s,{style:{marginTop:10},children:"Cidade"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cidade2").value}),e.jsx(s,{style:{marginTop:10},children:"CEP"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cep2").value}),e.jsx(s,{style:{marginTop:10},children:"Obervações"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("observacao").value}),e.jsx(s,{style:r.smallText,children:"(Para preenchimento do atendente)"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:10},children:"Dívidas que Integram o Parcelamento"}),e.jsx(s,{style:r.smallText,children:"(informar o tipo de tributo e a competência)"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("caixa-texto").value}),e.jsx(s,{style:{marginTop:10},children:"Número de Parcelas Autorizadas"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("numero-parcela-autorizada").value}),e.jsx(s,{style:{marginTop:10},children:"Data de Vencimento da Primeira Parcela"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("data2").value}),e.jsx(s,{style:{marginTop:10},children:"Número do Acordo"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("numero-acordo").value}),e.jsx(s,{style:{marginTop:10},children:"Compôe o Acordo, Dívidas já Parcelada"}),e.jsx(s,{}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio2").checked?"( x )":"( )"," SIM"]}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio3").checked?"( x )":"( )"," NÃO (se sim, identificar os tributos que foram parcelados e/ou reparcelados, bem como o número do acordo que integravam)"]}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:10},children:"Quantas Vezes essa Dívida foi Objeto de Parcelamento"}),e.jsx(s,{}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio4").checked?"( x )":"( )"," UMA"]}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio5").checked?"( x )":"( )"," DUAS"]}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio6").checked?"( x )":"( )"," OUTROS (identifique quantas vezes)"]}),e.jsx(s,{}),e.jsx(s,{style:r.smallText,children:"(As dívidas que já foram parceladas por duas vezes não podem ser objeto de um terceiro parcelamento - art. 73 da LC 021/2005)"}),e.jsx(s,{style:{marginTop:10},children:"Nome do Atendente"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome4").value}),e.jsxs(y,{style:r.signatureContainer,children:[e.jsx(c,{src:T,style:r.signature}),e.jsx(s,{style:r.signatureText,children:"Assinatura do Requerente"})]}),e.jsxs(y,{style:r.imageContainer,children:[i==="raquel"&&e.jsx(c,{src:N,style:r.signaturedefaul}),i==="dalize"&&e.jsx(c,{src:D,style:r.signaturedefaul}),i==="nelissa"&&e.jsx(c,{src:b,style:r.signaturedefaul}),e.jsx(s,{style:r.signatureText,children:"ASSINATURA MEI"})]})]})})})}):null,e.jsxs($,{children:[e.jsx(L,{onClick:q,children:e.jsx(A,{to:"/",children:"Serviços"})}),E?e.jsx(ee,{onClick:z,children:"Novo formulário"}):e.jsx(L,{onClick:S,children:"Gerar PDF"})]})]})}function we(){return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:"Para preenchimento do atentende"}),e.jsx(a,{children:"Dívidas que integram o parcelamento"}),e.jsx(se,{children:"(informar o tipo de tributo e a competência)"}),e.jsx(ae,{}),e.jsx(a,{children:"Número de parcelas autorizadas"}),e.jsx(ne,{}),e.jsx(a,{children:"Data de vencimento da primeira parcela"}),e.jsx(re,{}),e.jsx(a,{children:"Número do acordo"}),e.jsx(te,{}),e.jsx(a,{children:"Compõe o acordo, dívidas já parceladas"}),e.jsx(f,{children:e.jsx(oe,{})}),e.jsx(ie,{}),e.jsx(a,{children:"Quantas vezes essa dívida foi objeto de parcelamento"}),e.jsx(f,{children:e.jsx(le,{})}),e.jsx(de,{}),e.jsx(P,{children:"(as dívidas que já foram parceladas por duas vezes não podem ser objeto de um terceiro parcelamento - art 73 da lc 021/2005)"}),e.jsx(a,{children:"Nome do atendente"}),e.jsx(ce,{})]})}function ze(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:"Dados do contribuinte"}),e.jsx(a,{children:"Nome"}),e.jsx(me,{}),e.jsx(a,{children:"Cnpj"}),e.jsx(xe,{}),e.jsx(a,{children:"Cpf"}),e.jsx(je,{}),e.jsx(a,{children:"Endereço"}),e.jsx(ue,{}),e.jsx(a,{children:"E-mail"}),e.jsx(he,{}),e.jsx(a,{children:"Telefone"}),e.jsx(ge,{}),e.jsx(a,{children:"Dívidas pretendidas a parcelar"}),e.jsx(pe,{}),e.jsx(a,{children:"Número de parcelas pretendidas"}),e.jsx(ye,{})]})}function Se(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Representado por procurador"}),e.jsx(f,{children:e.jsx(fe,{})}),e.jsx(a,{children:"Nome do procurador"}),e.jsx(ve,{}),e.jsx(a,{children:"Endereco"}),e.jsx(Te,{}),e.jsx(a,{children:"E-mail"}),e.jsx(Ee,{}),e.jsx(a,{children:"Telefone"}),e.jsx(Ce,{})]})}function qe(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:"Dados do responsável pelas informações preenchidas neste formulário"}),e.jsx(a,{children:"Nome"}),e.jsx(Be,{}),e.jsx(a,{children:"Cpf"}),e.jsx(Ie,{}),e.jsx(a,{children:"Telefone"}),e.jsx(Le,{}),e.jsx(a,{children:"Endereço"}),e.jsx(Pe,{}),e.jsx(a,{children:"Cidade"}),e.jsx(Ne,{}),e.jsx(a,{children:"Cep"}),e.jsx(De,{}),e.jsx(a,{children:"Observações"}),e.jsx(be,{})]})}function Oe(){return e.jsxs(e.Fragment,{children:[e.jsx(ze,{}),e.jsx(Se,{}),e.jsx(qe,{}),e.jsx(we,{}),e.jsx(ke,{})]})}function Ue(){return e.jsx(Ae,{children:e.jsx(Oe,{})})}function Xe(){return e.jsxs(e.Fragment,{children:[e.jsx(Fe,{children:"Formulário de cadastro"}),e.jsxs(Re,{children:[e.jsx(A,{to:"/",children:"Voltar para os serviços"}),e.jsx(Ue,{})]})]})}export{Xe as F};
