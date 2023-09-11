import { GlobalLabel, Texto, FormCheckbox, TextoCheckbox, InputCheckbox } from "../../styles/styles";
import { Cnpj, Nome } from "../../components/layout/Input";

function SecaoCadastroServico() {
    return (
        <>
        <GlobalLabel>Cnpj</GlobalLabel>
        <Cnpj />
        <GlobalLabel>Empreendedor</GlobalLabel>
        <Nome />
        <Texto>Empreendedor está ciente que somente poderá emitir notas referente aos cnaes que constam em seu cnpj.</Texto>
        <Texto>A utilização de cnaes não cadastrados em seu cnpj poderá acarretar na exclusão do empreendedor da categoria mei.</Texto>
        </>
    )
} export default SecaoCadastroServico