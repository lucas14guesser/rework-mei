import AssinaturaPdf from "../sections/AssPdfFormCad"
import SecaoAtendente from "../sections/SecaoAtendente"
import SecaoContribuinte from "../sections/SecaoContribuinte"
import SecaoProcurador from "../sections/SecaoProcurador"
import SecaoResponsavel from "../sections/SecaoResponsavel"

function LabelFormCadastro() {
    return (
        <>
        <SecaoContribuinte />
        <SecaoProcurador />
        <SecaoResponsavel />
        <SecaoAtendente />
        <AssinaturaPdf />
        </>
    )
} export default LabelFormCadastro