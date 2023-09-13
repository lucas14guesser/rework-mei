import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { ButtonCanvas, ButtonReload, Canvas, CanvasAssinaturaTexto, CanvasButtonContainer, CanvasButtons, CanvasContainer, PdfStyles, Assinaturas, Assinatura, AssinaturaButtons, AssinaturaCampoImagem, AssinaturaImagem, Texto } from "../../../styles/styles";
import { Document, Page, Text, View, PDFViewer, Image } from '@react-pdf/renderer';
import Dalize from '../../../assets/assinatura-dalize.png'
import Raquel from '../../../assets/assinatura-raquel.png'
import Nelissa from '../../../assets/assinatura-nelissa.png'
import Laisy from '../../../assets/assinatura-laisy.png'
import AssinaturaGov from "../../layout/AssinaturaGov";
import ExplicacaoAssinatura from "../../layout/ExplicacaoAssinatura";

function AssinaturaPdf() {
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [assinaturaBase64, setAssinaturaBase64] = useState('');
    const [showPDF, setShowPDF] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

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

    const handleClickLaisy = () => {
        setSelectedImage('laisy');
    };

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
                <CanvasAssinaturaTexto>Assinatura requerente</CanvasAssinaturaTexto>
            </CanvasContainer>
            <Assinaturas>
                <Assinatura>
                    <AssinaturaButtons type="button" onClick={handleClickRaquel}>Assinatura Raquel</AssinaturaButtons>
                    <AssinaturaButtons type="button" onClick={handleClickDalize}>Assinatura Dalize</AssinaturaButtons>
                    <AssinaturaButtons type="button" onClick={handleClickLaisy}>Assinatura Laisy</AssinaturaButtons>
                    <AssinaturaButtons type="button" onClick={handleClickNelissa}>Assinatura Nelissa</AssinaturaButtons>
                </Assinatura>
            </Assinaturas>
            <AssinaturaCampoImagem>
                {selectedImage === 'raquel' && <AssinaturaImagem src={Raquel} />}
                {selectedImage === 'dalize' && <AssinaturaImagem src={Dalize} />}
                {selectedImage === 'laisy' && <AssinaturaImagem src={Laisy} />}
                {selectedImage === 'nelissa' && <AssinaturaImagem src={Nelissa} />}
            </AssinaturaCampoImagem>
            {showPDF ? (
                <PDFViewer style={{ width: '100%', height: '700px' }} className='mb-3'>
                    <Document>
                        <Page size='A4' style={PdfStyles.page}>
                            <View style={PdfStyles.section}>
                                <Text style={{ marginBottom: 10, textTransform: 'uppercase' }}>Dados do Contribuinte</Text>
                                <Text></Text>
                                <Text>Nome</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('nome').value}</Text>
                                <Text style={{ marginTop: 10 }}>CNPJ</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cnpj').value}</Text>
                                <Text style={{ marginTop: 10 }}>CPF</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cpf').value}</Text>
                                <Text style={{ marginTop: 10 }}>Endereço</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('endereco').value}</Text>
                                <Text style={{ marginTop: 10 }}>E-mail</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('email').value}</Text>
                                <Text style={{ marginTop: 10 }}>Telefone</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('celular').value}</Text>
                                <Text style={{ marginTop: 10 }}>Dívidas Pretendidas a Parcelar</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('parcela').value}</Text>
                                <Text style={{ marginTop: 10 }}>Número de Parcelas Pretendidas</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('numero-parcela').value}</Text>
                                <Text style={{ marginTop: 5 }}>Representado por Procurador</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 10, marginBottom: 10 }}>{document.getElementById('radio').checked ? '( x )' : '( )'} SIM</Text>
                                <Text style={{ marginTop: 10, marginBottom: 10 }}>{document.getElementById('radio1').checked ? '( x )' : '( )'} NÃO</Text>
                                <Text style={{ marginTop: 10 }}>Nome do Procurador</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('nome2').value}</Text>
                                <Text style={{ marginTop: 10 }}>Endereço</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('endereco2').value}</Text>
                                <Text style={{ marginTop: 10 }}>E-mail</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('email2').value}</Text>
                                <Text style={{ marginTop: 10 }}>Telefone</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('celular2').value}</Text>
                                <Text style={{ marginTop: 10, marginBottom: 10, textTransform: 'uppercase' }}>Dados do Responsável pelas Informações Preenchidas neste Formulário</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 10 }}>Nome</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('nome3').value}</Text>
                                <Text style={{ marginTop: 10 }}>CPF</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cpf3').value}</Text>
                                <Text style={{ marginTop: 10 }}>Telefone</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('celular3').value}</Text>
                                <Text style={{ marginTop: 10 }}>Endereço</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('endereco3').value}</Text>
                                <Text style={{ marginTop: 10 }}>Cidade</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cidade2').value}</Text>
                                <Text style={{ marginTop: 10 }}>CEP</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cep2').value}</Text>
                                <Text style={{ marginTop: 10 }}>Obervações</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('observacao').value}</Text>
                                <Text style={PdfStyles.smallText}>(Para preenchimento do atendente)</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 10 }}>Dívidas que Integram o Parcelamento</Text>
                                <Text style={PdfStyles.smallText}>(informar o tipo de tributo e a competência)</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('caixa-texto').value}</Text>
                                <Text style={{ marginTop: 10 }}>Número de Parcelas Autorizadas</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('numero-parcela-autorizada').value}</Text>
                                <Text style={{ marginTop: 10 }}>Data de Vencimento da Primeira Parcela</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('data2').value}</Text>
                                <Text style={{ marginTop: 10 }}>Número do Acordo</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('numero-acordo').value}</Text>
                                <Text style={{ marginTop: 10 }}>Compôe o Acordo, Dívidas já Parcelada</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 10, marginBottom: 10 }}>{document.getElementById('radio2').checked ? '( x )' : '( )'} SIM</Text>
                                <Text style={{ marginTop: 10, marginBottom: 10 }}>{document.getElementById('radio3').checked ? '( x )' : '( )'} NÃO (se sim, identificar os tributos que foram parcelados e/ou reparcelados, bem como o número do acordo que integravam)</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 10 }}>Quantas Vezes essa Dívida foi Objeto de Parcelamento</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 10, marginBottom: 10 }}>{document.getElementById('radio4').checked ? '( x )' : '( )'} UMA</Text>
                                <Text style={{ marginTop: 10, marginBottom: 10 }}>{document.getElementById('radio5').checked ? '( x )' : '( )'} DUAS</Text>
                                <Text style={{ marginTop: 10, marginBottom: 10 }}>{document.getElementById('radio6').checked ? '( x )' : '( )'} OUTROS (identifique quantas vezes)</Text>
                                <Text></Text>
                                <Text style={PdfStyles.smallText}>(As dívidas que já foram parceladas por duas vezes não podem ser objeto de um terceiro parcelamento - art. 73 da LC 021/2005)</Text>
                                <Text style={{ marginTop: 10 }}>Nome do Atendente</Text>
                                <Text></Text>
                                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('nome4').value}</Text>
                                <View style={PdfStyles.signatureContainer}>
                                    <Image src={assinaturaBase64} style={PdfStyles.signature} />
                                    <Text style={PdfStyles.signatureText}>Assinatura do Requerente</Text>
                                </View>
                                <View style={PdfStyles.imageContainer}>
                                    {selectedImage === 'raquel' && (
                                        <Image src={Raquel} style={PdfStyles.signaturedefaul} />
                                    )}
                                    {selectedImage === 'dalize' && (
                                        <Image src={Dalize} style={PdfStyles.signaturedefaul} />
                                    )}
                                    {selectedImage === 'laisy' && (
                                        <Image src={Laisy} style={PdfStyles.signaturedefaul} />
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
} export default AssinaturaPdf