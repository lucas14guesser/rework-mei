import TextoPadonizado from "../../texto/termoCienciaResponsabilidade/TextoPadrozinado"
import TextoPequeno from "../../texto/termoCienciaResponsabilidade/TextoPequeno"
import { Celular, Cnpj, DocumentoGeral, Email, Nome, Vinculo } from "../../layout/Input"
import { GlobalLabel } from "../../../styles/styles"

function SecaoDeclaranteTermoCiencia() {
    return (
        <>
            <TextoPadonizado />
            <TextoPequeno />
            <GlobalLabel>Nome do Declarante</GlobalLabel>
            <Nome />
            <GlobalLabel>Documento de Identificação</GlobalLabel>
            <DocumentoGeral />
            <GlobalLabel>Cnpj do Requerente</GlobalLabel>
            <Cnpj />
            <GlobalLabel>Vínculo com o Requerente</GlobalLabel>
            <Vinculo />
            <GlobalLabel>Telefone</GlobalLabel>
            <Celular />
            <GlobalLabel>E-mail</GlobalLabel>
            <Email />
        </>
    )
} export default SecaoDeclaranteTermoCiencia