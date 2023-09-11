import { GlobalLabel, Subtitulo } from "../../../styles/styles"
import { Celular3, Cep2, Cidade2, Cpf3, Endereco3, Nome3, Observacao } from "../../layout/Input"

function SecaoResponsavel() {
    return (
        <>
        <Subtitulo>Dados do responsável pelas informações preenchidas neste formulário</Subtitulo>
        <GlobalLabel>Nome</GlobalLabel>
        <Nome3 />
        <GlobalLabel>Cpf</GlobalLabel>
        <Cpf3 />
        <GlobalLabel>Telefone</GlobalLabel>
        <Celular3 />
        <GlobalLabel>Endereço</GlobalLabel>
        <Endereco3 />
        <GlobalLabel>Cidade</GlobalLabel>
        <Cidade2 />
        <GlobalLabel>Cep</GlobalLabel>
        <Cep2 />
        <GlobalLabel>Observações</GlobalLabel>
        <Observacao />
        </>
    )
} export default SecaoResponsavel