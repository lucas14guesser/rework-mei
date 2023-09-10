import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { ButtonCanvas, ButtonReload, Canvas, CanvasAssinaturaTexto, CanvasButtonContainer, CanvasButtons, CanvasContainer, FormCheckbox, Formulario, InputCheckbox, Texto, TextoCheckbox, PdfStyles, Assinaturas, Assinatura, AssinaturaButtons, AssinaturaCampoImagem, AssinaturaImagem } from "../../styles/styles"
import LabelSolicitacaoMei from "../label/LabelSolicitacaoMei"
import Dalize from '../../assets/assinatura-dalize.png'
import Raquel from '../../assets/assinatura-raquel.png'
import Nelissa from '../../assets/assinatura-nelissa.png'
import { Document, Page, Text, View, PDFViewer, Image } from '@react-pdf/renderer';


function FormularioSolicitacaoMei() {
    const canvasRef = useRef(null);
    const navigate = useNavigate();

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
        <Formulario>
            <LabelSolicitacaoMei />
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
                    <Text>DATA</Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10}}>{document.getElementById('data').value}</Text>
                    <Text style={{ marginTop: 10, marginBottom: 10 }}>{document.getElementById('radio').checked ? '( x )' : '( )' } AGENDADO</Text>
                    <Text style={{ marginTop: 10, marginBottom: 10 }}>{document.getElementById('radio1').checked ? '( x )' : '( )' } ENCAIXE</Text>
                    <Text style={{ marginTop: 10 }}>HORA</Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('hora').value}</Text>
                    <Text style={{ marginTop: 10 }}>ÀS</Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('hora2').value}</Text>
                    <Text>NOME COMPLETO</Text>
                    <Text></Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('nome').value}</Text>
                    <Text>E-MAIL</Text>
                    <Text></Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('email').value}</Text>
                    <Text>CPF</Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('cpf').value}</Text>
                    <Text>TELEFONE</Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('celular').value}</Text>
                    <Text>CNPJ</Text>
                    <Text></Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('cnpj').value}</Text>
                    <Text>CIDADE</Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('cidade').value}</Text>
                    <Text>CEP</Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('cep').value}</Text>
                    <Text>COMPLEMENTO / NÚMERO</Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('complemento-numero').value}</Text>
                    
                    <Text style={{ marginTop: 10, marginBottom: 10}}>
                        {document.getElementById('check1').checked ? '   ( x )' : '   ( )' } GUIA DAS
                        {document.getElementById('check2').checked ? '   ( x )' : '   ( )' } GUIA DARF
                        {document.getElementById('check3').checked ? '   ( x )' : '   ( )' } NOTA FISCAL
                        {document.getElementById('check4').checked ? '   ( x )' : '   ( )' } CNPJ / CCMEI
                        {document.getElementById('check5').checked ? '   ( x )' : '   ( )' } BAIXA MEI
                        {document.getElementById('check6').checked ? '   ( x )' : '   ( )' } ORIENTAÇÕES MEI
                        {document.getElementById('check7').checked ? '   ( x )' : '   ( )' } ABERTURA DE PROCESSO EXTERNO
                        Nº{document.getElementById('processo').value}
                        {document.getElementById('check8').checked ? '   ( x )' : '   ( )' } PARCELAMENTO DAS
                        {document.getElementById('check9').checked ? '   ( x )' : '   ( )' } DECLARAÇÃO ANUAL MEI
                        {document.getElementById('check10').checked ? '  ( x )' : '   ( )' } INSCRIÇÃO MUNICIPAL
                        {document.getElementById('check11').checked ? '  ( x )' : '   ( )' } TRIBUTOS PREFEITURA
                        {document.getElementById('check12').checked ? '  ( x )' : '   ( )' } CONSULTA PROCESSO
                        {document.getElementById('check13').checked ? '  ( x )' : '   ( )' } SENHA GOV.BR
                        {document.getElementById('check14').checked ? '  ( x )' : '   ( )' } DECLARAÇÃO DE EXTINÇÃO
                        {document.getElementById('check15').checked ? '  ( x )' : '   ( )' } ATUALIZAÇÃO CADASTRAL
                        {document.getElementById('check16').checked ? '  ( x )' : '   ( )' } INSCRIÇÃO ESTADUAL
                        {document.getElementById('check17').checked ? '  ( x )' : '   ( )' } DESENQUADRO DO MEI
                        {document.getElementById('check18').checked ? '  ( x )' : '   ( )' } FORMALIZAÇÃO MEI
                        {document.getElementById('check19').checked ? '  ( x )' : '   ( )' } ENTREGUE MATERIAL
                    </Text>
                    <Text>DESCRIÇÃO</Text>
                    <Text></Text>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{document.getElementById('descricao').value}</Text>
                    <View style={PdfStyles.signatureContainer}>
                        <Image src={assinaturaBase64} style={PdfStyles.signature} />
                        <Text style={PdfStyles.signatureText}>ASSINATURA DO EMPREENDEDOR</Text>
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
                    <CanvasButtons onClick={handleGeneratePDF}>
                        Gerar PDF
                    </CanvasButtons>
                )}
            </CanvasButtonContainer>
        </Formulario>
    )
} export default FormularioSolicitacaoMei