import { Endereco, GlobalLabel } from "../../styles/styles"
import { Cep, Cidade, ComplementoNumero } from "../layout/Input"

function EnderecoSolicitacao() {
    return (
        <Endereco>
            <GlobalLabel>Cidade</GlobalLabel>
            <Cidade />
            <GlobalLabel>Cep</GlobalLabel>
            <Cep />
            <GlobalLabel>Complemento e número</GlobalLabel>
            <ComplementoNumero />
        </Endereco>
    )
} export default EnderecoSolicitacao