import { GlobalLabel } from "../../styles/styles"
import { Celular, Cnpj, Cpf, Descricao, Email, Nome } from "../layout/Input"
import EnderecoSolicitacao from "../sections/EnderecoSolicitacao"
import HorarioSolicitacao from "../sections/HorarioSolicitacao"
import OpcoesSolicitacao from "../sections/OpcoesSolicitacao"
import TextoSolicitacao from "../texto/TextoSolicitacao"

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
            <TextoSolicitacao />
        </>
    )
}

export default SecaoEmpreendedorSolicitacao