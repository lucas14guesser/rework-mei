import { GlobalLabel } from "../../../styles/styles"
import { Celular, Cpf, Nome, Telefone } from "../../layout/Input"

function SecaoDadosRequerente() {
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
        </>
    )
} export default SecaoDadosRequerente