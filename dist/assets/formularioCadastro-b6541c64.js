import{i as l,u as G,j as e,T as X,n as H,C as J,o as Q,p as K,q as W,s as _,t as $,v as x,w as Z,x as j,P as ee,D as se,y as ae,z as r,V as y,E as s,H as d,J as ne,K as re,M as I,L as z,N as te,aa as P,Y as a,ab as ie,ac as oe,ad as le,ae as de,af as ce,O as f,ag as me,ah as xe,ai as je,aj as ue,ak as he,m as ge,_ as F,a3 as pe,a2 as ye,a4 as fe,al as ve,am as Te,a6 as Ce,an as Ee,ao as Be,ap as Le,aq as Ie,ar as Pe,as as Ae,at as Ne,au as be,av as De,aw as ze,ax as Fe,ay as ke,az as Re,aA as we,$ as Se,a0 as qe,a1 as Oe}from"./ExplicacaoAssinatura-8792d0c0.js";import{R as A,D as N,L as b,N as D}from"./assinatura-laizy-6e4751f8.js";function Ve(){const c=l.useRef(null),v=G();l.useState(!1);const[T,k]=l.useState(""),[C,R]=l.useState(!1),[t,m]=l.useState(null),w=()=>{const n=c.current;n.getContext("2d").clearRect(0,0,n.width,n.height)},S=()=>{v(window.location.pathname)},q=()=>{const i=c.current.toDataURL("image/png");k(i),R(!0)},O=()=>{v("/")},V=()=>{m("raquel")},M=()=>{m("dalize")},U=()=>{m("nelissa")},Y=()=>{m("laizy")};return l.useEffect(()=>{const n=c.current,i=n.getContext("2d");let u=!1,h=0,g=0;const p=()=>{n.width=n.offsetWidth,n.height=n.offsetHeight},E=o=>{u=!0,[h,g]=[o.offsetX,o.offsetY]},B=()=>{u=!1},L=o=>{u&&(i.beginPath(),i.moveTo(h,g),i.lineTo(o.offsetX,o.offsetY),i.stroke(),[h,g]=[o.offsetX,o.offsetY])};return p(),window.addEventListener("resize",p),n.addEventListener("mousedown",E),n.addEventListener("mouseup",B),n.addEventListener("mousemove",L),()=>{window.removeEventListener("resize",p),n.removeEventListener("mousedown",E),n.removeEventListener("mouseup",B),n.removeEventListener("mousemove",L)}},[]),e.jsxs(e.Fragment,{children:[e.jsx(X,{children:"Assinatura"}),e.jsx(H,{}),e.jsxs(J,{children:[e.jsx(Q,{ref:c}),e.jsx(K,{type:"button",onClick:w,children:"Limpar Assinatura"}),e.jsx("input",{type:"hidden",value:T,id:"assinatura"}),e.jsx(W,{children:"Assinatura requerente"})]}),e.jsx(_,{children:e.jsxs($,{children:[e.jsx(x,{type:"button",onClick:V,children:"Assinatura Raquel"}),e.jsx(x,{type:"button",onClick:M,children:"Assinatura Dalize"}),e.jsx(x,{type:"button",onClick:Y,children:"Assinatura Laizy"}),e.jsx(x,{type:"button",onClick:U,children:"Assinatura Nelissa"})]})}),e.jsxs(Z,{children:[t==="raquel"&&e.jsx(j,{src:A}),t==="dalize"&&e.jsx(j,{src:N}),t==="laizy"&&e.jsx(j,{src:b}),t==="nelissa"&&e.jsx(j,{src:D})]}),C?e.jsx(ee,{style:{width:"100%",height:"700px"},className:"mb-3",children:e.jsx(se,{children:e.jsx(ae,{size:"A4",style:r.page,children:e.jsxs(y,{style:r.section,children:[e.jsx(s,{style:{marginBottom:10,textTransform:"uppercase"},children:"Dados do Contribuinte"}),e.jsx(s,{}),e.jsx(s,{children:"Nome"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome").value}),e.jsx(s,{style:{marginTop:10},children:"CNPJ"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cnpj").value}),e.jsx(s,{style:{marginTop:10},children:"CPF"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cpf").value}),e.jsx(s,{style:{marginTop:10},children:"Endereço"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("endereco").value}),e.jsx(s,{style:{marginTop:10},children:"E-mail"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("email").value}),e.jsx(s,{style:{marginTop:10},children:"Telefone"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("celular").value}),e.jsx(s,{style:{marginTop:10},children:"Dívidas Pretendidas a Parcelar"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("parcela").value}),e.jsx(s,{style:{marginTop:10},children:"Número de Parcelas Pretendidas"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("numero-parcela").value}),e.jsx(s,{style:{marginTop:5},children:"Representado por Procurador"}),e.jsx(s,{}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio").checked?"( x )":"( )"," SIM"]}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio1").checked?"( x )":"( )"," NÃO"]}),e.jsx(s,{style:{marginTop:10},children:"Nome do Procurador"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome2").value}),e.jsx(s,{style:{marginTop:10},children:"Endereço"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("endereco2").value}),e.jsx(s,{style:{marginTop:10},children:"E-mail"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("email2").value}),e.jsx(s,{style:{marginTop:10},children:"Telefone"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("celular2").value}),e.jsx(s,{style:{marginTop:10,marginBottom:10,textTransform:"uppercase"},children:"Dados do Responsável pelas Informações Preenchidas neste Formulário"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:10},children:"Nome"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome3").value}),e.jsx(s,{style:{marginTop:10},children:"CPF"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cpf3").value}),e.jsx(s,{style:{marginTop:10},children:"Telefone"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("celular3").value}),e.jsx(s,{style:{marginTop:10},children:"Endereço"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("endereco3").value}),e.jsx(s,{style:{marginTop:10},children:"Cidade"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cidade2").value}),e.jsx(s,{style:{marginTop:10},children:"CEP"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("cep2").value}),e.jsx(s,{style:{marginTop:10},children:"Obervações"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("observacao").value}),e.jsx(s,{style:r.smallText,children:"(Para preenchimento do atendente)"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:10},children:"Dívidas que Integram o Parcelamento"}),e.jsx(s,{style:r.smallText,children:"(informar o tipo de tributo e a competência)"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("caixa-texto").value}),e.jsx(s,{style:{marginTop:10},children:"Número de Parcelas Autorizadas"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("numero-parcela-autorizada").value}),e.jsx(s,{style:{marginTop:10},children:"Data de Vencimento da Primeira Parcela"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("data2").value}),e.jsx(s,{style:{marginTop:10},children:"Número do Acordo"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("numero-acordo").value}),e.jsx(s,{style:{marginTop:10},children:"Compôe o Acordo, Dívidas já Parcelada"}),e.jsx(s,{}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio2").checked?"( x )":"( )"," SIM"]}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio3").checked?"( x )":"( )"," NÃO (se sim, identificar os tributos que foram parcelados e/ou reparcelados, bem como o número do acordo que integravam)"]}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:10},children:"Quantas Vezes essa Dívida foi Objeto de Parcelamento"}),e.jsx(s,{}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio4").checked?"( x )":"( )"," UMA"]}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio5").checked?"( x )":"( )"," DUAS"]}),e.jsxs(s,{style:{marginTop:10,marginBottom:10},children:[document.getElementById("radio6").checked?"( x )":"( )"," OUTROS (identifique quantas vezes)"]}),e.jsx(s,{}),e.jsx(s,{style:r.smallText,children:"(As dívidas que já foram parceladas por duas vezes não podem ser objeto de um terceiro parcelamento - art. 73 da LC 021/2005)"}),e.jsx(s,{style:{marginTop:10},children:"Nome do Atendente"}),e.jsx(s,{}),e.jsx(s,{style:{marginTop:5,marginLeft:10},children:document.getElementById("nome4").value}),e.jsxs(y,{style:r.signatureContainer,children:[e.jsx(d,{src:T,style:r.signature}),e.jsx(s,{style:r.signatureText,children:"Assinatura do Requerente"})]}),e.jsxs(y,{style:r.imageContainer,children:[t==="raquel"&&e.jsx(d,{src:A,style:r.signaturedefaul}),t==="dalize"&&e.jsx(d,{src:N,style:r.signaturedefaul}),t==="laizy"&&e.jsx(d,{src:b,style:r.signaturedefaul}),t==="nelissa"&&e.jsx(d,{src:D,style:r.signaturedefaul}),e.jsx(s,{style:r.signatureText,children:"ASSINATURA MEI"})]})]})})})}):null,e.jsx(ne,{}),e.jsxs(re,{children:[e.jsx(I,{onClick:O,children:e.jsx(z,{to:"/",children:"Serviços"})}),C?e.jsx(te,{onClick:S,children:"Novo formulário"}):e.jsx(I,{onClick:q,children:"Gerar PDF"})]})]})}function Me(){return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:"Para preenchimento do atentende"}),e.jsx(a,{children:"Dívidas que integram o parcelamento"}),e.jsx(ie,{children:"(informar o tipo de tributo e a competência)"}),e.jsx(oe,{}),e.jsx(a,{children:"Número de parcelas autorizadas"}),e.jsx(le,{}),e.jsx(a,{children:"Data de vencimento da primeira parcela"}),e.jsx(de,{}),e.jsx(a,{children:"Número do acordo"}),e.jsx(ce,{}),e.jsx(a,{children:"Compõe o acordo, dívidas já parceladas"}),e.jsx(f,{children:e.jsx(me,{})}),e.jsx(xe,{}),e.jsx(a,{children:"Quantas vezes essa dívida foi objeto de parcelamento"}),e.jsx(f,{children:e.jsx(je,{})}),e.jsx(ue,{}),e.jsx(P,{children:"(as dívidas que já foram parceladas por duas vezes não podem ser objeto de um terceiro parcelamento - art 73 da lc 021/2005)"}),e.jsx(a,{children:"Nome do atendente"}),e.jsx(he,{}),e.jsx(ge,{})]})}function Ue(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:"Dados do contribuinte"}),e.jsx(a,{children:"Nome"}),e.jsx(pe,{}),e.jsx(a,{children:"Cnpj"}),e.jsx(ye,{}),e.jsx(a,{children:"Cpf"}),e.jsx(fe,{}),e.jsx(a,{children:"Endereço"}),e.jsx(ve,{}),e.jsx(a,{children:"E-mail"}),e.jsx(Te,{}),e.jsx(a,{children:"Telefone"}),e.jsx(Ce,{}),e.jsx(a,{children:"Dívidas pretendidas a parcelar"}),e.jsx(Ee,{}),e.jsx(a,{children:"Número de parcelas pretendidas"}),e.jsx(Be,{})]})}function Ye(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Representado por procurador"}),e.jsx(f,{children:e.jsx(Le,{})}),e.jsx(a,{children:"Nome do procurador"}),e.jsx(Ie,{}),e.jsx(a,{children:"Endereco"}),e.jsx(Pe,{}),e.jsx(a,{children:"E-mail"}),e.jsx(Ae,{}),e.jsx(a,{children:"Telefone"}),e.jsx(Ne,{})]})}function Ge(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:"Dados do responsável pelas informações preenchidas neste formulário"}),e.jsx(a,{children:"Nome"}),e.jsx(be,{}),e.jsx(a,{children:"Cpf"}),e.jsx(De,{}),e.jsx(a,{children:"Telefone"}),e.jsx(ze,{}),e.jsx(a,{children:"Endereço"}),e.jsx(Fe,{}),e.jsx(a,{children:"Cidade"}),e.jsx(ke,{}),e.jsx(a,{children:"Cep"}),e.jsx(Re,{}),e.jsx(a,{children:"Observações"}),e.jsx(we,{})]})}function Xe(){return e.jsxs(e.Fragment,{children:[e.jsx(Ue,{}),e.jsx(Ye,{}),e.jsx(Ge,{}),e.jsx(Me,{}),e.jsx(Ve,{})]})}function He(){return e.jsx(Se,{children:e.jsx(Xe,{})})}function Ke(){return e.jsxs(e.Fragment,{children:[e.jsx(qe,{children:"Formulário de cadastro"}),e.jsxs(Oe,{children:[e.jsx(z,{to:"/",children:"Voltar para os serviços"}),e.jsx(He,{})]})]})}export{Ke as F};
