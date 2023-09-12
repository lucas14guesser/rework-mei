import { createGlobalStyle, styled } from "styled-components";
import { StyleSheet } from "@react-pdf/renderer";

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'Roboto', sans-serif;
        color: #0D4D63;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: #f8f9fa;
    }
    ol, ul {
        list-style: none;
    }
    li {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        text-decoration: none;
    }
    input {
        display: block;
        padding: 0.375rem 0.75rem;
        margin: 1rem 0 1rem 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #dee2e6;
        border-radius: 8px;
    } 
`
export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem
`
export const AppTitulo = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin: 8.67rem 0 1rem 0;
`
export const AppLista = styled.ul`
    display: flex;
    flex-direction: column;
`
export const AppListaItems = styled.li`
    text-transform: uppercase;
    text-align: center;
`
export const AppListaItem = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    width: 35rem;
    height: 2.5rem;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid #E9E9E9;
    border-radius: 8px;
    padding: 1rem 1rem;
    &:hover {
        border-color: #0D4D63;
    }
`
export const Titulo = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    text-transform: uppercase;
    margin: 10rem 0 4rem 0;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.175);
    border-radius: 8px;
    background-color: #E9E9E9;
    margin: 0 20rem 10rem 20rem;
`
export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`
export const GlobalLabel = styled.label`
    text-transform: uppercase;
`
export const Texto = styled.p`
    font-size: 1rem;
    margin: 0.5rem 0 0.5rem 0;
    text-transform: uppercase;
`
export const TextoPadrao = styled.p`
    font-size: 1rem;
    margin: 0.5rem 0 0.5rem 0;
`
export const TextoTermos = styled.p`
    text-align: center;
    font-size: .8rem;
    text-transform: lowercase;
`
export const FormCheckbox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`
export const InputCheckbox = styled.input`
    border-radius: 0.25em;
    margin-right: .2rem
`
export const TextoCheckbox = styled.p`
font-size: 1rem;
margin-left: .2rem;
text-transform: uppercase;
`
export const RadioCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start
`
export const PdfStyles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  signatureContainer: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  signatureText: {
    marginBottom: 0,
    textAlign: 'center',
  },
  signature: {
    width: '100%',
    height: 200,
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signaturedefaul: {
    width: 300,
    height: 100,
    objectFit: 'contain',
  },
  text: {
    textAlign: 'justify',
    marginBottom: 10
  },
  smallText: {
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 50
  }
});
export const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #dee2e6;
`
export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: rgb(248, 249, 250);
`
export const ButtonCanvas = styled.button`
  padding: 0.5rem 0.25rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: #f8f9fa;
  border: 0;
  color: #0D4D63;
  margin: .75rem 0 1rem 0;
  width: 10%;
  &:hover {
    background-color: #d3d4d5;
    border-color: #c6c7c8;
  }
`
export const CanvasAssinaturaTexto = styled.p`
  text-transform: uppercase;
  text-align: center;
`
export const CanvasButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CanvasButtons = styled.button`
  width: 25%;
  text-align: center;
  cursor: pointer;
  margin: 1.45rem 0.5rem 0.5rem 0;
  border: 1px solid #f8f9fa;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  padding: 0.55rem;
  background-color: #f8f9fa;
  &:hover {
    background-color: #d3d4d5;
    border-color: #c6c7c8;
  }
`
export const ButtonReload = styled.button`
    width: 25%;
    text-align: center;
    cursor: pointer;
    margin: 1.45rem 0.5rem 0.5rem 0;
    border: 1px solid #f8f9fa;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    padding: 0.55rem;
    color: #0D4D63;
    background-color: #f8f9fa;
    &:hover {
    background-color: #d3d4d5;
    border-color: #c6c7c8;
    }
`
export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #E9E9E9;
`
export const FooterImagem = styled.img`
    width: 300px;
`
export const FooterTexto = styled.p`
    margin-bottom: 1rem;
`
export const InputRadio = styled.input`
    margin-right: .15rem;
`
export const LabelRadio = styled.label`
    text-transform: uppercase;
    margin-right: 1rem;
`
export const Subtitulo = styled.h2`
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: underline;
    margin-bottom: 1rem;
`
export const Assinaturas = styled.div`
    display: flex;
    align-items: center;
    padding: 1%;
`
export const Assinatura = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const AssinaturaButtons = styled.button`
  width: 100%!important;
  padding: 0.5rem 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: #f8f9fa;
  border: 0;
  color: #0D4D63;
  width: 10%;
  &:hover {
    background-color: #d3d4d5;
    border-color: #c6c7c8;
  }
`
export const AssinaturaCampoImagem = styled.div`
  display: flex;
  justify-content: center;
`
export const AssinaturaImagem = styled.img`
  max-height: 300px;
  max-width: 500px;
  margin-bottom: 1rem;
`
export const Horario = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const Endereco = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const Opcoes = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 3rem;
`
export const AreaTexto = styled.textarea`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-color: #dee2e6;
  border-radius: 0.25rem;
  margin: 1rem 0 1rem 0;
`
export const AssinaturaGovBr = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`
export const AssinaturaDigital = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0 0.5rem 0;
`
export const AssinaturaLink = styled.a`
  font-size: 1rem;
  margin: 0.5rem 0 0.5rem 0.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`