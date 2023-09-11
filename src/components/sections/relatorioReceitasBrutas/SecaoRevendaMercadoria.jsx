import { GlobalLabel, Subtitulo } from "../../../styles/styles"
import { Sifrao, Sifrao2, Sifrao3 } from "../../layout/Input"

function SecaoRevendaMercadoria() {
    return (
        <>
            <Subtitulo>Receita bruta mensal - revenda de mercadorias (comércio)</Subtitulo>
            <GlobalLabel>i - Revenda de mercadorias com dispensa de emissão de documento fiscal</GlobalLabel>
            <Sifrao />
            <GlobalLabel>ii - Revenda de mercadorias com documento fiscal emitido</GlobalLabel>
            <Sifrao2 />
            <GlobalLabel>iii - Total das receitas com revenda de mercadorias (i + ii)</GlobalLabel>
            <Sifrao3 />
        </>
    )
} export default SecaoRevendaMercadoria