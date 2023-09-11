import AssinaturaPdfTermo from "../../sections/termoCienciaResponsabilidade/AssPdfTermoCIencia"
import SecaoDeclaranteTermoCiencia from "../../sections/termoCienciaResponsabilidade/SecaoDeclaranteTermoCIencia"

function LabelTermoCIencia() {
    return(
        <>
            <SecaoDeclaranteTermoCiencia />
            <AssinaturaPdfTermo />
        </>
    )
} export default LabelTermoCIencia