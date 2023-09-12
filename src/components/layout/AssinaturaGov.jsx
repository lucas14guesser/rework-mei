import { AssinaturaDigital, AssinaturaGovBr, AssinaturaLink } from "../../styles/styles"

function AssinaturaGov() {
    return (
        <>
            <AssinaturaGovBr>
                <AssinaturaDigital>Clique no link a seguir para ser redirecionado para a página de assinatura digital do gov.br:</AssinaturaDigital>
                <AssinaturaLink href="https://assinador.iti.br/assinatura/" target="_blank">https://assinador.iti.br/assinatura/</AssinaturaLink>
            </AssinaturaGovBr>
        </>
    )
} export default AssinaturaGov