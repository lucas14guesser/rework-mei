import { GlobalLabel, Subtitulo } from "../../../styles/styles"
import { Sifrao4, Sifrao5, Sifrao6 } from "../../layout/Input"

function SecaoVendaProdutos() {
    return (
        <>
            <Subtitulo>Receita bruta mensal - venda de produtos indrustrializados (indústria)</Subtitulo>
            <GlobalLabel>iv - Venda de produtos industrializados com dispensa de emissão de documento fiscal</GlobalLabel>
            <Sifrao4 />
            <GlobalLabel>v - Venda de produtos industrializados com documento fiscal emitido</GlobalLabel>
            <Sifrao5 />
            <GlobalLabel>vi - Total das receitas com venda de produtos industrializados (iv + v)</GlobalLabel>
            <Sifrao6 />
        </>
    )
} export default SecaoVendaProdutos