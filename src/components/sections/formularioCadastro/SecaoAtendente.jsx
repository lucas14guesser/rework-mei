import { GlobalLabel, RadioCheckbox, TextoPadrao, TextoTermos } from "../../../styles/styles"
import { CaixaTexto, Data2, IdentificarTributos, Nome4, NumeroAcordo, NumeroParcelaAutorizada, Parcelamento, RadioFormCadastro2, RadioFormCadastro3 } from "../../layout/Input"
import LeiLgpd from "../../texto/atendimentoMeiAbertura/TextoSolicitacao"

function SecaoAtendente() {
    return (
        <>
        <TextoPadrao>Para preenchimento do atentende</TextoPadrao>
        <GlobalLabel>Dívidas que integram o parcelamento</GlobalLabel>
        <TextoTermos>(informar o tipo de tributo e a competência)</TextoTermos>
        <CaixaTexto />
        <GlobalLabel>Número de parcelas autorizadas</GlobalLabel>
        <NumeroParcelaAutorizada />
        <GlobalLabel>Data de vencimento da primeira parcela</GlobalLabel>
        <Data2 />
        <GlobalLabel>Número do acordo</GlobalLabel>
        <NumeroAcordo />
        <GlobalLabel>Compõe o acordo, dívidas já parceladas</GlobalLabel>
        <RadioCheckbox>
            <RadioFormCadastro2 />
        </RadioCheckbox>
        <IdentificarTributos />
        <GlobalLabel>Quantas vezes essa dívida foi objeto de parcelamento</GlobalLabel>
        <RadioCheckbox>
            <RadioFormCadastro3 />
        </RadioCheckbox>
        <Parcelamento />
        <TextoPadrao>(as dívidas que já foram parceladas por duas vezes não podem ser objeto de um terceiro parcelamento - art 73 da lc 021/2005)</TextoPadrao>
        <GlobalLabel>Nome do atendente</GlobalLabel>
        <Nome4 />
        <LeiLgpd />
        </>
    )
} export default SecaoAtendente