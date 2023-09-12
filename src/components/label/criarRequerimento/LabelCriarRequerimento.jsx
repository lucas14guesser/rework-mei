import AssPdfCriacaoReq from "../../sections/criarRequerimento/AssPdfCriacaoReq"
import SecaoRequerente from "../../sections/criarRequerimento/SecaoRequerente"
import SecaoSolicitacao from "../../sections/criarRequerimento/SecaoSolicitacao"

function LabelCriarRequerimento() {
    return (
        <>
            <SecaoRequerente />
            <SecaoSolicitacao />
            <AssPdfCriacaoReq />
        </>
    )
} export default LabelCriarRequerimento