import { GlobalLabel } from "../../../styles/styles"
import { Celular, Cpf, Data, DescricaoSimplesNacional, Nome, SolicitacaoSimplesNacional, Telefone } from "../../layout/Input"
import LeiLgpd from "../../layout/LeiLgpd"

const SecaoDadosReq = () => {
    return (
        <>
            <GlobalLabel>Requerente</GlobalLabel>
            <Nome />
            <GlobalLabel>Cpf</GlobalLabel>
            <Cpf />
            <GlobalLabel>Telefone fixo</GlobalLabel>
            <Telefone />
            <GlobalLabel>Celular</GlobalLabel>
            <Celular />
            <GlobalLabel>Solicitação</GlobalLabel>
            <SolicitacaoSimplesNacional />
            <GlobalLabel>Requerimento</GlobalLabel>
            <DescricaoSimplesNacional />
            <GlobalLabel>Data</GlobalLabel>
            <Data />
            <LeiLgpd />
        </>
    )
}

export default SecaoDadosReq