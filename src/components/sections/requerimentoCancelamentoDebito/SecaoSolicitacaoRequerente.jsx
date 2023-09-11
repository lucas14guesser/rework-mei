import { GlobalLabel } from "../../../styles/styles"
import { Data, RequerimentoCancelamento, SolicitacaoRequerente } from "../../layout/Input"

function SecaoSolicitacaoRequerente() {
    return (
        <>
            <GlobalLabel>Solicitação</GlobalLabel>
            <SolicitacaoRequerente />
            <GlobalLabel>Requerimento</GlobalLabel>
            <RequerimentoCancelamento />
            <GlobalLabel>Data</GlobalLabel>
            <Data />
        </>

    )
} export default SecaoSolicitacaoRequerente