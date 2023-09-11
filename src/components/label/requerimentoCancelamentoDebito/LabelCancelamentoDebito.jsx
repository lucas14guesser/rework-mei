import { Formulario } from "../../../styles/styles"
import AssPdfCancelamentoDebito from "../../sections/requerimentoCancelamentoDebito/AssPdfCancelamentoDebito"
import SecaoDadosRequerente from "../../sections/requerimentoCancelamentoDebito/SecaoDadosRequerente"
import SecaoSolicitacaoRequerente from "../../sections/requerimentoCancelamentoDebito/SecaoSolicitacaoRequerente"

function LabelCancelamentoDebito() {
    return (
        <>
        <Formulario>
            <SecaoDadosRequerente />
            <SecaoSolicitacaoRequerente />
            <AssPdfCancelamentoDebito />
        </Formulario>
        </>
    )
} export default LabelCancelamentoDebito