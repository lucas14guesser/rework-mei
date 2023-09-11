import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { ButtonCanvas, ButtonReload, Canvas, CanvasAssinaturaTexto, CanvasButtonContainer, CanvasButtons, CanvasContainer, FormCheckbox, Formulario, InputCheckbox, Texto, TextoCheckbox, PdfStyles, Assinaturas, Assinatura, AssinaturaButtons, AssinaturaCampoImagem, AssinaturaImagem, LabelRadio } from "../../styles/styles";
import { Document, Page, Text, View, PDFViewer, Image } from '@react-pdf/renderer';
import Dalize from '../../assets/assinatura-dalize.png'
import Raquel from '../../assets/assinatura-raquel.png'
import Nelissa from '../../assets/assinatura-nelissa.png'

const AssPdfAbertura = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [assinaturaBase64, setAssinaturaBase64] = useState('');
  const [showPDF, setShowPDF] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let isDrawing = false;
      let lastX = 0;
      let lastY = 0;

      const resizeCanvas = () => {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
      };

      const startDrawing = (e) => {
          isDrawing = true;
          [lastX, lastY] = [e.offsetX, e.offsetY];
      };

      const stopDrawing = () => {
          isDrawing = false;
      };

      const draw = (e) => {
          if (!isDrawing) return;

          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(e.offsetX, e.offsetY);
          ctx.stroke();

          [lastX, lastY] = [e.offsetX, e.offsetY];
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      canvas.addEventListener('mousedown', startDrawing);
      canvas.addEventListener('mouseup', stopDrawing);
      canvas.addEventListener('mousemove', draw);

      return () => {
          window.removeEventListener('resize', resizeCanvas);
          canvas.removeEventListener('mousedown', startDrawing);
          canvas.removeEventListener('mouseup', stopDrawing);
          canvas.removeEventListener('mousemove', draw);
      };
  }, []);

  const handleClearCanvas = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSwitchChange = () => {
      setIsSwitchOn(!isSwitchOn);
  };

  const handleReload = () => {
      navigate(window.location.pathname)
  }

  const handleGeneratePDF = () => {
      const canvas = canvasRef.current;
      const base64Image = canvas.toDataURL('image/png');
      setAssinaturaBase64(base64Image);
      setShowPDF(true);
  };

  const returnHome = () => {
      navigate("/")
  }

  const handleClickRaquel = () => {
      setSelectedImage('raquel');
  };

  const handleClickDalize = () => {
      setSelectedImage('dalize');
  };

  const handleClickNelissa = () => {
      setSelectedImage('nelissa');
  };

  return (
    <>
      <FormCheckbox>
        <InputCheckbox id='check' type="checkbox" onChange={handleSwitchChange} />
        <LabelRadio htmlFor="check">Declaro ter recebido as devidas orientações quanto ao sistema de emissão de notas do simples nacional.</LabelRadio>
      </FormCheckbox>
      <Texto>Assinatura</Texto>
      <CanvasContainer>
        <Canvas ref={canvasRef} />
        <ButtonCanvas type='button' onClick={handleClearCanvas}>
          Limpar Assinatura
        </ButtonCanvas>
        <input type='hidden' value={assinaturaBase64} id='assinatura' />
        <CanvasAssinaturaTexto>Assinatura do empreendedor</CanvasAssinaturaTexto>
      </CanvasContainer>
      <Assinaturas>
        <Assinatura>
          <AssinaturaButtons type="button" onClick={handleClickRaquel}>Assinatura Raquel</AssinaturaButtons>
          <AssinaturaButtons type="button" onClick={handleClickDalize}>Assinatura Dalize</AssinaturaButtons>
          <AssinaturaButtons type="button" onClick={handleClickNelissa}>Assinatura Nelissa</AssinaturaButtons>
        </Assinatura>
      </Assinaturas>
      <AssinaturaCampoImagem>
        {selectedImage === 'raquel' && <AssinaturaImagem src={Raquel} />}
        {selectedImage === 'dalize' && <AssinaturaImagem src={Dalize} />}
        {selectedImage === 'nelissa' && <AssinaturaImagem src={Nelissa} />}
      </AssinaturaCampoImagem>
      {showPDF ? (
        <PDFViewer style={{ width: '100%', height: '700px' }} className='mb-3'>
          <Document>
            <Page size='A4' style={PdfStyles.page}>
              <View style={PdfStyles.section}>
                <Text style={{ marginTop: 10 }}>É Servidor Público Federal</Text>
                <Text style={{ marginBottom: 10 }}>
                  {document.getElementById('radio1').checked ? '( x )' : '  ( )'} SIM
                  {document.getElementById('radio2').checked ? '( x )' : '  ( )'} NÃO
                </Text>
                <Text style={{ marginTop: 10 }}>É Servidor Público Municipal</Text>
                <Text style={{ marginBottom: 10 }}>
                  {document.getElementById('radio3').checked ? '( x )' : '  ( )'} SIM
                  {document.getElementById('radio4').checked ? '( x )' : '  ( )'} NÃO
                </Text>
                <Text style={{ marginTop: 10 }}>É Servidor Público Estadual</Text>
                <Text style={{ marginBottom: 10 }}>
                  {document.getElementById('radio5').checked ? '( x )' : '  ( )'} SIM
                  {document.getElementById('radio6').checked ? '( x )' : '  ( )'} NÃO
                </Text>
                <Text style={{ marginTop: 10 }}>Está Recebendo Seguro Desemprego</Text>
                <Text style={{ marginBottom: 10 }}>
                  {document.getElementById('radio7').checked ? '( x )' : '  ( )'} SIM
                  {document.getElementById('radio8').checked ? '( x )' : '  ( )'} NÃO
                </Text>
                <Text style={{ marginTop: 10 }}>Recebe Algum Benefício Previdenciário</Text>
                <Text style={{ marginBottom: 10 }}>
                  {document.getElementById('radio9').checked ? '( x )' : '  ( )'} SIM
                  {document.getElementById('radio10').checked ? '( x )' : '  ( )'} NÃO
                </Text>
                <Text >(se sim, qual?)</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('beneficio').value}</Text>
                <Text></Text>
                <Text style={{ textDecoration: 'underline', marginTop: 10, marginBottom: 10 }}>Auxílio Doença</Text>
                <Text style={PdfStyles.text}>O Beneficiário que recebe esse auxílio doença é considerado incapacitado para trabalhar, e se ele abrir um registro como MEI, ele provará que pode voltar as suas atividades profissionais, portanto perderá o benefício previdenciário.</Text>
                <Text></Text>
                <Text style={{ textDecoration: 'underline', marginTop: 10, marginBottom: 10 }}>Tutor que recebe pensão por um menor de idade</Text>
                <Text style={PdfStyles.text}>Isso vai depender do tipo de benefício que é recebido pelo menor, se o menor e o tutor fizerem parte de um grupo familiar e a renda familiar ultrapassar o valor estabelecido por pessoa da família, a pensão será encerrada.</Text>
                <Text></Text>
                <Text style={{ textDecoration: 'underline', marginTop: 10, marginBottom: 10 }}>Bolsa Família</Text>
                <Text style={PdfStyles.text}>O cidadão somente irá perder esse benefício quando o seu MEI resultar no aumento da renda familiar, ultrapassando o valor estabelecido para a participação no programa.</Text>
                <Text></Text>
                <Text style={{ textDecoration: 'underline', marginTop: 10, marginBottom: 10 }}>Seguro Desemprego</Text>
                <Text style={PdfStyles.text}>O Microempreendedor Individual não pode receber seguro-desemprego, porém, se ele trabalhar de carteira assinada e for demitido ele poderá receber se comprovar que o seu MEI não está gerando lucro suficiente para seu sustento e de seus dependentes.</Text>
                <View style={PdfStyles.signatureContainer}>
                  <Image src={assinaturaBase64} style={PdfStyles.signature} />
                  <Text style={PdfStyles.signatureText}>ASSINATURA EMPREENDEDOR</Text>
                </View>
                <View style={PdfStyles.imageContainer}>
                  {selectedImage === 'raquel' && (
                    <Image src={Raquel} style={PdfStyles.signaturedefaul} />
                  )}
                  {selectedImage === 'dalize' && (
                    <Image src={Dalize} style={PdfStyles.signaturedefaul} />
                  )}
                  {selectedImage === 'nelissa' && (
                    <Image src={Nelissa} style={PdfStyles.signaturedefaul} />
                  )}
                  <Text style={PdfStyles.signatureText}>ASSINATURA MEI</Text>
                </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      ) : null}
      <CanvasButtonContainer>
        <CanvasButtons onClick={returnHome}>
          <Link to='/'>Serviços</Link>
        </CanvasButtons>
        {showPDF ? (
          <ButtonReload onClick={handleReload}>Novo formulário</ButtonReload>
        ) : (
          <CanvasButtons disabled={!isSwitchOn} onClick={handleGeneratePDF}>
            Gerar PDF
          </CanvasButtons>
        )}
      </CanvasButtonContainer>
    </>
  )
}

export default AssPdfAbertura