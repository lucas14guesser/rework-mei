import { GlobalLabel } from "../../../styles/styles"
import { Celular, Cnpj, Cpf, Descricao, Email, Nome } from "../../layout/Input"
import EnderecoSolicitacao from "./EnderecoSolicitacao"
import HorarioSolicitacao from "./HorarioSolicitacao"
import OpcoesSolicitacao from "./OpcoesSolicitacao"
import LeiLgpd from "../../texto/atendimentoMeiAbertura/TextoSolicitacao"

const SecaoEmpreendedorSolicitacao = () => {
    return (
        <>
            <HorarioSolicitacao />
            <GlobalLabel>Nome completo</GlobalLabel>
            <Nome />
            <GlobalLabel>E-mail</GlobalLabel>
            <Email />
            <GlobalLabel>Cpf</GlobalLabel>
            <Cpf />
            <GlobalLabel>Telefone</GlobalLabel>
            <Celular />
            <GlobalLabel>Cnpf</GlobalLabel>
            <Cnpj />
            <EnderecoSolicitacao />
            <OpcoesSolicitacao />
            <GlobalLabel>Descrição</GlobalLabel>
            <Descricao />
            <LeiLgpd />
        </>
    )
}

export default SecaoEmpreendedorSolicitacao