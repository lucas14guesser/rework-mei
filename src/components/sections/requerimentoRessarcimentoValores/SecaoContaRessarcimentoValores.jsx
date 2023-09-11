import ContaRadioCheck from "../../check/requerimentoRessarcimentoValores/ContaRadioCheck"
import { Agencia, Banco, Cnpj2, Conta, ContaCnpj, ContaCpf, ContaTerceiro, Cpf2, Data, Nome2, Operacao } from "../../layout/Input"
import { GlobalLabel, TextoPadrao } from "../../../styles/styles"

const SecaoContaRessarcimentoValores = () => {
    return (
        <>
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
}

export default SecaoContaRessarcimentoValores