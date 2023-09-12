import { GlobalLabel } from "../../../styles/styles"
import { Data, RequerimentoCancelamento, SolicitacaoRequerente } from "../../layout/Input"
import LeiLgpd from "../../texto/atendimentoMeiAbertura/TextoSolicitacao"

function SecaoSolicitacaoRequerente() {
    return (
        <>
            <GlobalLabel>Solicitação</GlobalLabel>
            <SolicitacaoRequerente />
            <GlobalLabel>Requerimento</GlobalLabel>
            <RequerimentoCancelamento />
            <GlobalLabel>Data</GlobalLabel>
            <Data />
            <LeiLgpd />
        </>

    )
} export default SecaoSolicitacaoRequerente