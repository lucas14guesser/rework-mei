import AssinaturaPdf from "../../sections/formularioCadastro/AssPdfFormCad"
import SecaoAtendente from "../../sections/formularioCadastro/SecaoAtendente"
import SecaoContribuinte from "../../sections/formularioCadastro/SecaoContribuinte"
import SecaoProcurador from "../../sections/formularioCadastro/SecaoProcurador"
import SecaoResponsavel from "../../sections/formularioCadastro/SecaoResponsavel"

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