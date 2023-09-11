import { GlobalLabel } from "../../../styles/styles"
import { Cnpj, Nome, PeriodoApuracao } from "../../layout/Input"

function SecaoDadosEmpreendedor() {
    return (
        <>
            <GlobalLabel>Cnpj</GlobalLabel>
            <Cnpj />
            <GlobalLabel>Empreendedor individual</GlobalLabel>
            <Nome />
            <GlobalLabel>Período de apuração</GlobalLabel>
            <PeriodoApuracao />
        </>
    )
} export default SecaoDadosEmpreendedor