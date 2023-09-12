import { GlobalLabel } from "../../../styles/styles"
import { Celular, Cpf, Nome, Telefone } from "../../layout/Input"

function SecaoRequerente() {
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
} export default SecaoRequerente