import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { Document, Page, Text, View, PDFViewer, Image } from '@react-pdf/renderer';
import { ButtonCanvas, Canvas, CanvasAssinaturaTexto, CanvasContainer, Texto, PdfStyles, CanvasButtonContainer, ButtonReload, CanvasButtons } from "../../../styles/styles"
import AssinaturaGov from "../../layout/AssinaturaGov";
import ExplicacaoAssinatura from "../../layout/ExplicacaoAssinatura";

const AssPdfRessarcimentoValores = () => {
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
      <ExplicacaoAssinatura />
      {showPDF ? (
        <PDFViewer style={{ width: '100%', height: '700px' }} className='mb-3'>
          <Document>
            <Page size='A4' style={PdfStyles.page}>
              <View style={PdfStyles.section}>
                <Text>Requerente</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('nome').value}</Text>
                <Text style={{ marginTop: 10 }}>CPF</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cpf').value}</Text>
                <Text style={{ marginTop: 10 }}>Telefone Fixo</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('telefone').value}</Text>
                <Text style={{ marginTop: 10 }}>Celular</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('celular').value}</Text>
                <Text style={{ marginTop: 10 }}>Solicitação</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('solicitacao').value}</Text>
                <Text style={{ marginTop: 10 }}>Requerimento</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('requerimento').value}</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>Dados da conta:</Text>
                <Text></Text>
                <Text style={{ marginTop: 10 }}>Nome Titular</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('nome2').value}</Text>
                <Text style={{ marginTop: 10 }}>CPF Titular</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cpf2').value}</Text>
                <Text style={{ marginTop: 10 }}>CNPJ Titular</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('cnpj2').value}</Text>
                <Text style={{ marginTop: 10 }}>Banco</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('banco').value}</Text>
                <Text style={{ marginTop: 10 }}>Agencia</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('agencia').value}</Text>
                <Text style={{ marginTop: 10 }}>Operação</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('operacao').value}</Text>
                <Text style={{ marginTop: 10 }}>Conta</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('conta').value}</Text>
                <Text style={{ marginTop: 10, marginBottom: 10 }}>
                  {document.getElementById('radio').checked ? '   ( x )' : '   ( )'} Conta Corrente
                  {document.getElementById('radio1').checked ? '   ( x )' : '   ( )'} Conta Salário
                  {document.getElementById('radio2').checked ? '   ( x )' : '   ( )'} Banco Digital
                </Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>Vínculo:</Text>
                <Text></Text>
                <Text style={{ marginTop: 10 }}>Conta informada vinculada ao CNPJ</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('conta-cnpj').value}</Text>
                <Text style={{ marginTop: 10 }}>Conta informada vinculada ao CPF</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('conta-cpf').value}</Text>
                <Text style={{ marginTop: 10 }}>Conta informada pertence a terceiro (Informar no requerimento)</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('conta-terceiro').value}</Text>
                <Text style={{ marginTop: 10 }}>Data</Text>
                <Text></Text>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>{document.getElementById('data').value}</Text>
                <Text></Text>
                <Text style={PdfStyles.text}>Em observância à lei nº. 13.709/18-lei geral de proteção de dados pessoais e demais normativas aplicáveis sobre proteção de dados pessoais, manifesto-me de forma informada, livre, expressa e consciente, no sentido de autorizar o espaço do empreendedor de são josé sc a realizar o tratamento de meus dados pessoais para as finalidades e de acordo com as condições aqui estabelecidas.</Text>
                <View style={PdfStyles.signatureContainer}>
                  <Image src={assinaturaBase64} style={PdfStyles.signature} />
                  <Text style={PdfStyles.signatureText}>REQUERENTE</Text>
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
    </>
  )
}

export default AssPdfRessarcimentoValores