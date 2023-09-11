import InputMask from 'react-input-mask';
import { AreaTexto, GlobalLabel, InputRadio, LabelRadio } from '../../styles/styles';

export const Cnpj = () => {
    return (
        <InputMask id='cnpj' mask='99.999.999/9999-99' placeholder='00.000.000/0000-00'/>
    )
}

export const Cpf = () => {
    return (
        <InputMask id='cpf' mask='999.999.999-99' placeholder='000.000.000-00' />
    )
}

export const Nome = () => {
    return (
        <InputMask id='nome'
            mask="****************************************************************************************************"
            maskChar=''
            placeholder='Digite o nome'
            formatChars={{
                '*': '[A-Za-z ]' 
              }}
            />
    )
}

export const DocumentoGeral = () => {
    return (
        <InputMask id='documento'
        maskChar=""
        placeholder='Digite o documento ou número de identificação' />
    )
}

export const Vinculo = () => {
    return (
        <InputMask id='vinculo'
        maskChar=""
        placeholder='Digite o vínculo' />
    )
}

export const Telefone = () => {
    return (
        <InputMask id='telefone'
        mask="(99)9999-9999"
        placeholder='(00)0000-0000' />
    )
}

export const Celular = () => {
    return (
        <InputMask id='celular'
        mask="(99)99999-9999"
        placeholder='(00)00000-0000' />
    )
}

export const Email = () => {
    return (
        <InputMask id='email' maskChar='' placeholder='exemplo@email.com' />
    )
}

export const InputFederal = () => {
    return (
        <>
            <InputRadio name="group1" type="radio" id="radio1"/>
            <LabelRadio htmlFor="radio1">Sim</LabelRadio>
            <InputRadio name="group1" type="radio" id="radio2" />
            <LabelRadio htmlFor="radio2">Não</LabelRadio>
        </>
    )
}

export const InputMunicipal = () => {
    return (
        <>
            <InputRadio name="group2" type="radio" id="radio3"/>
            <LabelRadio htmlFor="radio3">Sim</LabelRadio>
            <InputRadio name="group2" type="radio" id="radio4" />
            <LabelRadio htmlFor="radio4">Não</LabelRadio>
        </>
    )
}

export const InputEstadual = () => {
    return (
        <>
            <InputRadio name="group3" type="radio" id="radio5"/>
            <LabelRadio htmlFor="radio5">Sim</LabelRadio>
            <InputRadio name="group3" type="radio" id="radio6" />
            <LabelRadio htmlFor="radio6">Não</LabelRadio>
        </>
    )
}

export const InputSeguroDesemprego = () => {
    return (
        <>
            <InputRadio name="group4" type="radio" id="radio7"/>
            <LabelRadio htmlFor="radio7">Sim</LabelRadio>
            <InputRadio name="group4" type="radio" id="radio8" />
            <LabelRadio htmlFor="radio8">Não</LabelRadio>
        </>
    )
}

export const InputBeneficio = () => {
    return (
        <>
            <InputRadio name="group5" type="radio" id="radio9"/>
            <LabelRadio htmlFor="radio9">Sim</LabelRadio>
            <InputRadio name="group5" type="radio" id="radio10" />
            <LabelRadio htmlFor="radio10">Não (se sim, qual?)</LabelRadio>
        </>
    )
}

export const Beneficio = () => {
    return (
        <InputMask maskChar='' id='beneficio' placeholder='Digite o benefício' />
    )
}

export const SolicitacaoSimplesNacional = () => {
    return (
        <InputMask 
            id='solicitacao'
            value='A reconsideração do simples nacional MEI'
        />
    )
}

export const DescricaoSimplesNacional = () => {
    return (
        <InputMask 
            id='requerimento'
            value="Solicito a reconsideração do simples nacional MEI, que foi excluído da categoria por débitos indevidos, conforme a lei complementar 118/2022."
        />
    )
}

export const Data = () => {
    return (
        <InputMask 
            id='data'
            type='date'
        />
    )
}

export const SolicitacaoRessarcimentoValores = () => {
    return (
        <InputMask 
            id='solicitacao'
            value='Perguntar para a Raquel o que escrever aqui porque eu joguei as folhas que ela me deu no lixo'
        />
    )
}

export const DescricaoRessarcimentoValores = () => {
    return (
        <InputMask 
            id='requerimento'
            value='Perguntar para a Raquel o que escrever aqui porque eu joguei as folhas que ela me deu no lixo'
        />
    )
}

export const Nome2 = () => {
    return (
        <InputMask id='nome2'
            mask="****************************************************************************************************"
            maskChar=''
            placeholder='Digite o nome'
            formatChars={{
                '*': '[A-Za-z ]' 
              }}
            />
    )
}

export const Cpf2 = () => {
    return (
        <InputMask 
            id='cpf2'
            mask='999.999.999-99'
            placeholder='000.000.000-00'
        />
    )
}

export const Cnpj2 = () => {
    return (
        <InputMask 
            id='cnpj2'
            mask='99.999.999/9999-99'
            placeholder='00.000.000/0000-00'
        />
    )
}

export const Banco = () => {
    return (
        <InputMask 
            id='banco'
            type='text'
            placeholder='Digite o nome do banco'
        />
    )
}

export const Agencia = () => {
    return (
        <InputMask 
            id='agencia'
            placeholder='Digite o número da agência'
        />
    )
}

export const Operacao = () => {
    return (
        <InputMask 
            id='operacao'
            placeholder='Digite o número de operação'
        />
    )
}

export const Conta = () => {
    return (
        <InputMask 
            id='conta'
            placeholder='Digite o número da conta'
        />
    )
}

export const RadioConta = () => {
    return (
        <>
            <InputRadio name="group1" type="radio" id="radio"/>
            <LabelRadio htmlFor="radio">Conta corrente</LabelRadio>
            <InputRadio name="group1" type="radio" id="radio1" />
            <LabelRadio htmlFor="radio1">Conta salário</LabelRadio>
            <InputRadio name="group1" type="radio" id="radio2" />
            <LabelRadio htmlFor="radio2">Banco digital</LabelRadio>
        </>
    )
}

export const ContaCnpj = () => {
    return (
        <InputMask 
            id='conta-cnpj'
            placeholder='Digite o número da conta vinculada ao CNPJ'
        />
    )
}

export const ContaCpf = () => {
    return (
        <InputMask 
            id='conta-cpf'
            placeholder='Digite o número da conta vinculada ao CPF'
        />
    )
}

export const ContaTerceiro = () => {
    return (
        <InputMask 
            id='conta-terceiro'
            placeholder='Digite se a conta vinculada pertence a terceiro'
        />
    )
}

export const RadioSolicitacao = () => {
    return (
        <>
            <InputRadio name="group1" type="radio" id="radio"/>
            <LabelRadio htmlFor="radio">Agendado</LabelRadio>
            <InputRadio name="group1" type="radio" id="radio1" />
            <LabelRadio htmlFor="radio1">Encaixe</LabelRadio>
        </>
    )
}

export const Hora = () => {
    return (
        <InputMask 
            id='hora'
            type='time'
        />
    )
}

export const Hora2 = () => {
    return (
        <InputMask 
            id='hora2'
            type='time'
        />
    )
}

export const Cidade = () => {
    return (
        <InputMask 
            id='cidade'
            mask='****************************************************************************************************'
            maskChar=''
            formatChars={{
                '*': '[A-Za-z ]'
            }}
            placeholder='Digite a cidade onde reside'
        />
    )
}

export const Cep = () => {
    return (
        <InputMask 
            id='cep'
            mask='99.999-999'
            placeholder='00.000-000'
        />
    )
}

export const ComplementoNumero = () => {
    return (
        <InputMask 
            id='complemento-numero'
            placeholder='Complemento / Número'
        />
    )
}

export const CheckboxSolicitacao = () => {
    return (
        <>
            <InputRadio name="group1" type="checkbox" id="check1"/>
            <LabelRadio htmlFor="check1">Guia DAS</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check2" />
            <LabelRadio htmlFor="check2">Guia DARF</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check3" />
            <LabelRadio htmlFor="check3">Nota fiscal</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check4" />
            <LabelRadio htmlFor="check4">Cnpj / Ccmei</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check5" />
            <LabelRadio htmlFor="check5">Baixa Mei</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check6" />
            <LabelRadio htmlFor="check6">Orientações Mei</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check7" />
            <LabelRadio htmlFor="check7">Abertura de processo externo</LabelRadio>
            <GlobalLabel>Nº</GlobalLabel>
            <InputMask id='processo' mask='99999/9999' placeholder='00000/0000'/>
            <InputRadio name="group1" type="checkbox" id="check8"/>
            <LabelRadio htmlFor="check8">Parcelamento DAS</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check9"/>
            <LabelRadio htmlFor="check9">Declaração anual Mei</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check10"/>
            <LabelRadio htmlFor="check10">Inscrição municipal</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check11"/>
            <LabelRadio htmlFor="check11">Tributos prefeitura</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check12"/>
            <LabelRadio htmlFor="check12">Consulta processo</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check13"/>
            <LabelRadio htmlFor="check13">Senha gov.br</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check14"/>
            <LabelRadio htmlFor="check14">Declaração de extinção</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check15"/>
            <LabelRadio htmlFor="check15">Atualização cadastral</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check16"/>
            <LabelRadio htmlFor="check16">Inscrição estadual</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check17"/>
            <LabelRadio htmlFor="check17">Desenquadro do Mei</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check18"/>
            <LabelRadio htmlFor="check18">Formalização Mei</LabelRadio>
            <InputRadio name="group1" type="checkbox" id="check19"/>
            <LabelRadio htmlFor="check19">Entregue material</LabelRadio>
        </>
    )
}

export const Descricao = () => {
    return (
        <AreaTexto id="descricao" rows={5}></AreaTexto>
    )
}

export const Endereco = () => {
    return (
        <InputMask 
            id='endereco'
            placeholder='Digite o endereço'
        />
    )
}

export const DividasParcela = () => {
    return (
        <InputMask 
            id='parcela'
            placeholder='Dívidas que pretende parcelar'
        />
    )
}

export const NumeroParcela = () => {
    return (
        <InputMask 
            id='numero-parcela'
            placeholder='Número de parcelas que pretende pagar'
        />
    )
}

export const RadioFormCadastro = () => {
    return (
        <>
            <InputRadio name="group1" type="radio" id="radio"/>
            <LabelRadio htmlFor="radio">Sim</LabelRadio>
            <InputRadio name="group1" type="radio" id="radio1" />
            <LabelRadio htmlFor="radio1">Não (Se sim, responder com os dados do procurador)</LabelRadio>
        </>
    )
}

export const Endereco2 = () => {
    return (
        <InputMask 
            id='endereco2'
            placeholder='Digite o endereço'
        />
    )
}

export const Email2 = () => {
    return (
        <InputMask id='email2' maskChar='' placeholder='exemplo@email.com' />
    )
}

export const Celular2 = () => {
    return (
        <InputMask id='celular2'
        mask="(99)99999-9999"
        placeholder='(00)00000-0000' />
    )
}

export const Nome3 = () => {
    return (
        <InputMask id='nome3'
            mask="****************************************************************************************************"
            maskChar=''
            placeholder='Digite o nome'
            formatChars={{
                '*': '[A-Za-z ]' 
              }}
            />
    )
}

export const Cpf3 = () => {
    return (
        <InputMask id='cpf3' mask='999.999.999-99' placeholder='000.000.000-00' />
    )
}

export const Celular3 = () => {
    return (
        <InputMask id='celular3'
        mask="(99)99999-9999"
        placeholder='(00)00000-0000' />
    )
}

export const Endereco3 = () => {
    return (
        <InputMask 
            id='endereco3'
            placeholder='Digite o endereço'
        />
    )
}

export const Cidade2 = () => {
    return (
        <InputMask 
            id='cidade2'
            mask='****************************************************************************************************'
            maskChar=''
            formatChars={{
                '*': '[A-Za-z ]'
            }}
            placeholder='Digite a cidade onde reside'
        />
    )
}

export const Cep2 = () => {
    return (
        <InputMask 
            id='cep2'
            mask='99.999-999'
            placeholder='00.000-000'
        />
    )
}

export const Observacao = () => {
    return (
        <AreaTexto id="observacao" rows={3}></AreaTexto>
    )
}

export const CaixaTexto = () => {
    return (
        <AreaTexto id='caixa-texto' rows={2}/>
    )
}

export const NumeroParcelaAutorizada = () => {
    return (
        <InputMask 
            id='numero-parcela-autorizada'
            placeholder='Número de parcelas que foram autorizadas'
        />
    )
}

export const Data2 = () => {
    return (
        <InputMask 
            id='data2'
            type='date'
        />
    )
}

export const NumeroAcordo = () => {
    return (
        <InputMask 
            id='numero-acordo'
            placeholder='Número do acordo'
        />
    )
}

export const RadioFormCadastro2 = () => {
    return (
        <>
            <InputRadio name="group2" type="radio" id="radio2"/>
            <LabelRadio htmlFor="radio2">Sim</LabelRadio>
            <InputRadio name="group2" type="radio" id="radio3" />
            <LabelRadio htmlFor="radio3">Não (Se sim, identificar os tributos que foram parcelados e/ou reparcelados, bem como o número do acordo que integravam)</LabelRadio>
        </>
    )
}

export const IdentificarTributos = () => {
    return (
        <InputMask 
            id='identificar-tributos'
            placeholder='Identifique os tributos parcelados e/ou reparcelados'
        />
    )
}

export const RadioFormCadastro3 = () => {
    return (
        <>
            <InputRadio name="group3" type="radio" id="radio4"/>
            <LabelRadio htmlFor="radio4">Uma</LabelRadio>
            <InputRadio name="group3" type="radio" id="radio5" />
            <LabelRadio htmlFor="radio5">Duas</LabelRadio>
            <InputRadio name="group3" type="radio" id="radio6" />
            <LabelRadio htmlFor="radio6">Outros (identifique quantas vezes)</LabelRadio>
        </>
    )
}

export const Parcelamento =() => {
    return (
        <InputMask 
            id='x-parcelamento'
            placeholder='Digite a quantidade de vezes'
        />
    )
}

export const Nome4 = () => {
    return (
        <InputMask id='nome4'
            mask="****************************************************************************************************"
            maskChar=''
            placeholder='Digite o nome'
            formatChars={{
                '*': '[A-Za-z ]' 
              }}
            />
    )
}
