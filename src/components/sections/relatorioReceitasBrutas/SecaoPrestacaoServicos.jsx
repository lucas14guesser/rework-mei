import { GlobalLabel, Subtitulo } from "../../../styles/styles"
import { Data, Local, Sifrao10, Sifrao7, Sifrao8, Sifrao9 } from "../../layout/Input"

function SecaoPrestacaoServicos() {
    return (
        <>
            <Subtitulo>Receita bruta mensal - Prestação de serviços</Subtitulo>
            <GlobalLabel>vii - Receita com prestação de serviços com dispensa de emissão de documento fiscal</GlobalLabel>
            <Sifrao7 />
            <GlobalLabel>viii - Receita com prestação de serviços com documento fiscal emitido</GlobalLabel>
            <Sifrao8 />
            <GlobalLabel>ix - Total das receitas com prestação de serviços (vii + viii)</GlobalLabel>
            <Sifrao9 />
            <GlobalLabel>xx - Total geral das receitas brutas no mês (iii + vi + ix)</GlobalLabel>
            <Sifrao10 />
            <GlobalLabel>Local</GlobalLabel>
            <Local />
            <GlobalLabel>Data</GlobalLabel>
            <Data />
        </>
    )
} export default SecaoPrestacaoServicos