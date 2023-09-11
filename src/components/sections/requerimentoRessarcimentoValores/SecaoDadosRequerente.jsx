import { GlobalLabel } from "../../../styles/styles"
import { Celular, Cpf, DescricaoRessarcimentoValores, Nome, SolicitacaoRessarcimentoValores, Telefone } from "../../layout/Input"

const SecaoDadosRequerente = () => {
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
            <SolicitacaoRessarcimentoValores />
            <GlobalLabel>Requerimento</GlobalLabel>
            <DescricaoRessarcimentoValores />

        </>
    )
}

export default SecaoDadosRequerente