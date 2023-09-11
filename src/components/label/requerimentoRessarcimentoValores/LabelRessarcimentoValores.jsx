import AssPdfRessarcimentoValores from "../../sections/requerimentoRessarcimentoValores/AssPdfRessarcimentoValores"
import SecaoContaRessarcimentoValores from "../../sections/requerimentoRessarcimentoValores/SecaoContaRessarcimentoValores"
import SecaoDadosRequerente from "../../sections/requerimentoRessarcimentoValores/SecaoDadosRequerente"

function LabelRessarcimentoValores() {
    return (
        <>
            <SecaoDadosRequerente />
            <SecaoContaRessarcimentoValores />
            <AssPdfRessarcimentoValores />
        </>
    )
} export default LabelRessarcimentoValores