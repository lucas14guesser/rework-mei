import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { Document, Page, Text, View, PDFViewer, Image } from '@react-pdf/renderer';
import { Texto, FormCheckbox, TextoCheckbox, PdfStyles, CanvasContainer, Canvas, ButtonCanvas, CanvasAssinaturaTexto, InputCheckbox, CanvasButtons, CanvasButtonContainer, ButtonReload, LabelRadio } from "../../../styles/styles";
import SecaoCadastroServico from "../../sections/cadastroNotasServicos/SectionCadServ";
import LeiLgpd from "../../texto/atendimentoMeiAbertura/TextoSolicitacao";

const CadastroServico = () => {
    const canvasRef = useRef(null);
    const navigate = useNavigate();
  
    const [isSwitchOn, setIsSwitchOn] = useState(false);
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
    
    return (
        <>
            <SecaoCadastroServico />
            <FormCheckbox>
                <InputCheckbox id='check' type="checkbox" onChange={handleSwitchChange} />
                <LabelRadio htmlFor="check">Declaro ter recebido as devidas orientações quanto ao sistema de emissão de notas do simples nacional.</LabelRadio>
            </FormCheckbox>
            <LeiLgpd />
            <Texto>Assinatura</Texto>
            <CanvasContainer>
                <Canvas ref={canvasRef} />
                <ButtonCanvas type='button' onClick={handleClearCanvas}>
                    Limpar Assinatura
                </ButtonCanvas>
                <input type='hidden' value={assinaturaBase64} id='assinatura' />
                <CanvasAssinaturaTexto>Assinatura do empreendedor</CanvasAssinaturaTexto>
            </CanvasContainer>
            {showPDF ? (
                <PDFViewer style={{ width: '100%', height: '700px' }} className='mb-3'>
                    <Document>
                        <Page size='A4' style={PdfStyles.page}>
                            <View style={PdfStyles.section}>
                                <Text>CNPJ</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cnpj').value}</Text>
                                <Text style={{ marginTop: 10 }}>EMPREENDEDOR</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('nome').value}</Text>
                                <Text style={{ marginTop: 10 }}>
                                    EMPREENDEDOR ESTÁ CIENTE QUE SOMENTE PODERÁ EMITIR NOTAS REFERENTE AOS CNAES QUE CONSTAM EM SEU CNPJ.
                                </Text>
                                <Text style={{ marginTop: 10 }}>
                                    A UTILIZAÇÃO DE CNAES NÃO CADASTRADOS EM SEU CNPJ PODERÁ ACARRETAR NA EXCLUSÃO DO EMPREENDEDOR DA CATEGORIA MEI.
                                </Text>
                                <Text style={{ marginTop: 10 }}>{document.getElementById('check').checked ? '( x )' : '( )'} DECLARO TER RECEBIDO AS DEVIDAS ORIENTAÇÕES QUANTO AO SISTEMA DE EMISSÃO DE NOTAS DO SIMPLES NACIONAL</Text>
                                <View style={PdfStyles.signatureContainer}>
                                    <Image src={assinaturaBase64} style={PdfStyles.signature} />
                                    <Text style={PdfStyles.signatureText}>ASSINATURA DO EMPREENDEDOR</Text>
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

export default CadastroServico