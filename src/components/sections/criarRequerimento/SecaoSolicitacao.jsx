import { GlobalLabel } from "../../../styles/styles"
import { Data, Requerimento, Solicitacao } from "../../layout/Input"

function SecaoSolicitacao() {
    return (
        <>
            <GlobalLabel>Solicitação</GlobalLabel>
            <Solicitacao />
            <GlobalLabel>Requerimento</GlobalLabel>
            <Requerimento />
            <GlobalLabel>Data</GlobalLabel>
            <Data />
        </>


    )
} export default SecaoSolicitacao