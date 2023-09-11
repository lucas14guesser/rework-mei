import { GlobalLabel, RadioCheckbox } from "../../../styles/styles"
import { Celular2,  Email2,  Endereco2, Nome2,  RadioFormCadastro } from "../../layout/Input"

function SecaoProcurador() {
    return (
        <>
        <GlobalLabel>Representado por procurador</GlobalLabel>
        <RadioCheckbox>
            <RadioFormCadastro />
        </RadioCheckbox>
        <GlobalLabel>Nome do procurador</GlobalLabel>
        <Nome2 />
        <GlobalLabel>Endereco</GlobalLabel>
        <Endereco2 />
        <GlobalLabel>E-mail</GlobalLabel>
        <Email2 />
        <GlobalLabel>Telefone</GlobalLabel>
        <Celular2 />
        </>
    )
} export default SecaoProcurador