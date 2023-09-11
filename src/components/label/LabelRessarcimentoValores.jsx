import AssPdfRessarcimentoValores from "../sections/AssPdfRessarcimentoValores"
import SecaoContaRessarcimentoValores from "../sections/SecaoContaRessarcimentoValores"
import SecaoDadosRequerente from "../sections/SecaoDadosRequerente"

function LabelRessarcimentoValores() {
    return (
        <>
            <SecaoDadosRequerente />
            <SecaoContaRessarcimentoValores />
            <AssPdfRessarcimentoValores />
        </>
    )
} export default LabelRessarcimentoValores