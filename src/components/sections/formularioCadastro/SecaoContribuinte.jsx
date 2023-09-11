import { GlobalLabel, Subtitulo } from "../../../styles/styles"
import { Celular, Cnpj, Cpf, DividasParcela, Email, Endereco, Nome, NumeroParcela } from "../../layout/Input"

function SecaoContribuinte() {
    return (
        <>
        <Subtitulo>Dados do contribuinte</Subtitulo>
        <GlobalLabel>Nome</GlobalLabel>
        <Nome />
        <GlobalLabel>Cnpj</GlobalLabel>
        <Cnpj />
        <GlobalLabel>Cpf</GlobalLabel>
        <Cpf />
        <GlobalLabel>Endereço</GlobalLabel>
        <Endereco />
        <GlobalLabel>E-mail</GlobalLabel>
        <Email />
        <GlobalLabel>Telefone</GlobalLabel>
        <Celular />
        <GlobalLabel>Dívidas pretendidas a parcelar</GlobalLabel>
        <DividasParcela />
        <GlobalLabel>Número de parcelas pretendidas</GlobalLabel>
        <NumeroParcela />
        </>
    )
} export default SecaoContribuinte