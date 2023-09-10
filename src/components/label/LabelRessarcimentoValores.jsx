import { GlobalLabel, TextoPadrao } from "../../styles/styles"
import ContaRadioCheck from "../check/ContaRadioCheck"
import { Agencia, Banco, Celular, Cnpj2, Conta, ContaCnpj, ContaCpf, ContaTerceiro, Cpf, Cpf2, Data, DescricaoRessarcimentoValores, Nome, Nome2, Operacao, SolicitacaoRessarcimentoValores, Telefone } from "../layout/Input"

function LabelRessarcimentoValores() {
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
            <TextoPadrao>Informações da conta para ressarcimento</TextoPadrao>
            <TextoPadrao>Dados da conta</TextoPadrao>
            <GlobalLabel>Nome titular</GlobalLabel>
            <Nome2 />
            <GlobalLabel>Cpf titular</GlobalLabel>
            <Cpf2 />
            <GlobalLabel>Cnpj titular</GlobalLabel>
            <Cnpj2 />
            <GlobalLabel>Banco</GlobalLabel>
            <Banco />
            <GlobalLabel>Agência</GlobalLabel>
            <Agencia />
            <GlobalLabel>Operação</GlobalLabel>
            <Operacao />
            <GlobalLabel>Conta</GlobalLabel>
            <Conta />
            <ContaRadioCheck />
            <TextoPadrao>Vínculo:</TextoPadrao>
            <GlobalLabel>Conta informada vinculada ao cnpj</GlobalLabel>
            <ContaCnpj />
            <GlobalLabel>Conta informada vinculada ao cpf</GlobalLabel>
            <ContaCpf />
            <GlobalLabel>Conta informada vinculada pertence a terceiro (informar no requerimento)</GlobalLabel>
            <ContaTerceiro />
            <TextoPadrao>Observação: Deve ser anexado cópia original do cartão ou outro documento oficial que confirme os dados bancários, para ressarcimento no processo</TextoPadrao>
            <GlobalLabel>Data</GlobalLabel>
            <Data />
        </>
    )
} export default LabelRessarcimentoValores