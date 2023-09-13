import { GlobalLabel } from "../../../styles/styles"
import { Data, Requerimento, Solicitacao } from "../../layout/Input"
import LeiLgpd from "../../texto/atendimentoMeiAbertura/TextoSolicitacao"

function SecaoSolicitacao() {
    return (
        <>
            <GlobalLabel>Solicitação</GlobalLabel>
            <Solicitacao />
            <GlobalLabel>Requerimento</GlobalLabel>
            <Requerimento />
            <GlobalLabel>Data</GlobalLabel>
            <Data />
            <LeiLgpd />
        </>


    )
} export default SecaoSolicitacao