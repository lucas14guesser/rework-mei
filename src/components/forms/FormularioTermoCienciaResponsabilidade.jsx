import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

import TextoPadonizado from "../../components/texto/TextoPadrozinado"
import TextoPequeno from "../../components/texto/TextoPequeno"
import { Celular, Cnpj, DocumentoGeral, Email, Nome, Vinculo } from "../../components/layout/Input"
import { Document, Page, Text, View,  PDFViewer, Image } from '@react-pdf/renderer';
import { ButtonCanvas, Canvas, CanvasAssinaturaTexto, CanvasButtonContainer, CanvasButtons, CanvasContainer, Formulario, GlobalLabel, Texto, PdfStyles, ButtonReload } from "../../styles/styles"

function FormularioTermoCienciaResponsabilidade() {
    const canvasRef = useRef(null);
    const navigate = useNavigate();
  
    const [assinaturaBase64, setAssinaturaBase64] = useState('');
    const [showPDF, setShowPDF] = useState(false);
  
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

    return (
        <>
        <Formulario>
            <TextoPadonizado />
            <TextoPequeno />

            <GlobalLabel>Nome do Declarante</GlobalLabel>
            <Nome />
            <GlobalLabel>Documento de Identificação</GlobalLabel>
            <DocumentoGeral />
            <GlobalLabel>Cnpj do Requerente</GlobalLabel>
            <Cnpj />
            <GlobalLabel>Vínculo com o Requerente</GlobalLabel>
            <Vinculo />
            <GlobalLabel>Telefone</GlobalLabel>
            <Celular />
            <GlobalLabel>E-mail</GlobalLabel>
            <Email />

            <Texto>Assinatura</Texto>
            <CanvasContainer>
                <Canvas ref={canvasRef} />
                <ButtonCanvas type='button' onClick={handleClearCanvas}>
                    Limpar Assinatura
                </ButtonCanvas>
                <input type='hidden' value={assinaturaBase64} id='assinatura' />
                <CanvasAssinaturaTexto>Assinatura</CanvasAssinaturaTexto>
            </CanvasContainer>
            {showPDF ? (
            <PDFViewer style={{ width: '100%', height: '700px' }} className='mb-3'>
                <Document>
                <Page size='A4' style={PdfStyles.page}>
                <View style={PdfStyles.section}>
                      <Text style={PdfStyles.text}>
                        Eu, abaixo assinado, declaro ciente de que as notificações, informações e tramitações referentes ao processo que agora protocolo serão encaminhados através do email constante no cadastro de sistema de protocolo.
                      </Text>
                      <Text></Text>
                      <Text style={PdfStyles.text}>
                        Declaro ciência de que posso consultar o andamento do processo através do sistema de consultas disponibilizado no site da prefeitura ao informar o número único.
                      </Text>  
                      <Text></Text>                                                                                                                     
                      <Text style={PdfStyles.text}>
                        Declaro estar cientede que caso seja necessário a juntada de documentos, informações, ou quaisquer ações sob minha responsabilidade possuo o prazo de 90 (noventa) dias para emendar o processo, sob pena de arquivamento dos autos, sem prejuízo de abertura de novo processo, a meu critério e por minha iniciativa.
                      </Text>
                      <Text></Text>
                      <Text style={PdfStyles.text}>
                        Declaro que tenho ciência que a contagem dos prazos inicia-se após 10 (dez) dias do envio do email com a informação do parecer, contado o dia 01 o primeiro dia útil seguinte ao envio do email.
                      </Text>
                      <Text style={PdfStyles.smallText}>
                          Bem como me responsabilizo por informar qualquer alteração no email cadastrado.
                      </Text>
                      <Text>Nome do Declarante</Text>
                      <Text></Text>
                      <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('nome').value}</Text>
                      <Text style={{ marginTop: 10 }}>Documento de Identificação</Text>
                      <Text></Text>
                      <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('documento').value}</Text>
                      <Text style={{ marginTop: 10 }}>CNPJ do Requerente (se for o caso)</Text>
                      <Text></Text>
                      <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cnpj').value}</Text>
                      <Text style={{ marginTop: 10 }}>Vínculo com o Requerente (se for o caso)</Text>
                      <Text></Text>
                      <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('vinculo').value}</Text>
                      <Text style={{ marginTop: 10 }}>Telefone</Text>
                      <Text></Text>
                      <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('celular').value}</Text>
                      <Text style={{ marginTop: 10 }}>E-mail</Text>
                      <Text></Text>
                      <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('email').value}</Text>
                      <View style={PdfStyles.signatureContainer}>
                      <Image src={assinaturaBase64} style={PdfStyles.signature} />
                      <Text style={PdfStyles.signatureText}>Assinatura</Text>
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
                    <CanvasButtons onClick={handleGeneratePDF}>
                        Gerar PDF
                    </CanvasButtons>
                )}
            </CanvasButtonContainer>
        </Formulario>
        </>
    )
} export default FormularioTermoCienciaResponsabilidade