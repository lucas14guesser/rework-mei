import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { ButtonCanvas, ButtonReload, Canvas, CanvasAssinaturaTexto, CanvasButtonContainer, CanvasButtons, CanvasContainer, PdfStyles, Assinaturas, Assinatura, AssinaturaButtons, AssinaturaCampoImagem, AssinaturaImagem, Texto } from "../../../styles/styles";
import { Document, Page, Text, View, PDFViewer, Image } from '@react-pdf/renderer';
import SecaoAnexos from "./SecaoAnexos";
import AssinaturaGov from "../../layout/AssinaturaGov";
import ExplicacaoAssinatura from "../../layout/ExplicacaoAssinatura";

function AssPdfReceitasBrutas() {
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



    const handleReload = () => {
        navigate(window.location.pathname)
    }

    const handleClearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

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
            <Texto>Assinatura</Texto>
            <AssinaturaGov />
            <CanvasContainer>
                <Canvas ref={canvasRef} />
                <ButtonCanvas type='button' onClick={handleClearCanvas}>
                    Limpar Assinatura
                </ButtonCanvas>
                <input type='hidden' value={assinaturaBase64} id='assinatura' />
                <CanvasAssinaturaTexto>Requerente</CanvasAssinaturaTexto>
            </CanvasContainer>
            <SecaoAnexos />
            {showPDF ? (
                <PDFViewer style={{ width: '100%', height: '700px' }} className='mb-3'>
                    <Document>
                        <Page size='A4' style={PdfStyles.page}>
                            <View style={PdfStyles.section}>
                                <Text>CNPJ</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cnpj').value}</Text>
                                <Text style={{ marginTop: 10 }}>Empreendedor Individual</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('nome').value}</Text>
                                <Text style={{ marginTop: 10 }}>Período de Apuração</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('periodo-apuracao').value}</Text>
                                <Text style={{ marginTop: 10, textTransform: 'uppercase' }}>Receita Bruta Mensal - Revenda de Mercadorias (Comércio)</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 10 }}>I - Revenda de mercadorias com dispensa de emissão de documento fiscal</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>R$ {document.getElementById('sifrao').value}</Text>
                                <Text style={{ marginTop: 10 }}>II - Revenda de mercadorias com documento fiscal emitido</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>R$ {document.getElementById('sifrao2').value}</Text>
                                <Text style={{ marginTop: 10 }}>III - Total das receitas com revenda de mercadorias (I + II)</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>R$ {document.getElementById('sifrao3').value}</Text>
                                <Text style={{ marginTop: 10, textTransform: 'uppercase' }}>Receita Bruta Mensal - Venda de Produtos Industrializados (Indústria)</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 10 }}>IV - Venda de produtos industrializados com dispensa de emissão de documento fiscal</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>R$ {document.getElementById('sifrao4').value}</Text>
                                <Text style={{ marginTop: 10 }}>V - Venda de produtos industrializados com documento fiscal emitido</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>R$ {document.getElementById('sifrao5').value}</Text>
                                <Text style={{ marginTop: 10 }}>VI - Total das receitas com venda de produtos indrustrializados (IV + V)</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>R$ {document.getElementById('sifrao6').value}</Text>
                                <Text style={{ marginTop: 10, textTransform: 'uppercase' }}>Receita Bruta Mensal - Prestação de Serviços</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 10 }}>VII - Receita com prestação de serviços com dispensa de emissão de documento fiscal</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>R$ {document.getElementById('sifrao7').value}</Text>
                                <Text style={{ marginTop: 10 }}>VIII - Receita com prestação de serviços com documento fiscal emitido</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>R$ {document.getElementById('sifrao8').value}</Text>
                                <Text style={{ marginTop: 10 }}>IX - Total das receitas com prestação de serviços (VII + VIII)</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>R$ {document.getElementById('sifrao9').value}</Text>
                                <Text style={{ marginTop: 10 }}>XX - Total geral das receitas brutas no mês (III + VI + IX)</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>R$ {document.getElementById('sifrao10').value}</Text>
                                <Text>Local</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('local').value}</Text>
                                <Text>Data</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('data').value}</Text>
                                <Text style={PdfStyles.text}>
                                    Encontram-se Anexados e Este Relatório:
                                </Text>
                                <Text></Text>
                                <Text style={PdfStyles.text}>
                                    - Os documentos fiscais comprobatórios das entradas  de mercadorias e serviços tomados referentes ao período;
                                </Text>
                                <Text></Text>
                                <Text style={PdfStyles.text}>
                                    - As notas fiscais relativas às operações ou prestações realizadas eventualmente emitidas.
                                </Text>
                                <View style={PdfStyles.signatureContainer}>
                                    <Image src={assinaturaBase64} style={PdfStyles.signature} />
                                    <Text style={PdfStyles.signatureText}>ASSINATURA DO EMPRESÁRIO</Text>
                                </View>
                            </View>
                        </Page>
                    </Document>
                </PDFViewer>
            ) : null}
            <ExplicacaoAssinatura />
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
        </>
    )
} export default AssPdfReceitasBrutas