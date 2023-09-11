import React from 'react'
import SecaoDadosEmpreendedor from '../../sections/relatorioReceitasBrutas/SecaoDadosEmpreendedor'
import SecaoRevendaMercadoria from '../../sections/relatorioReceitasBrutas/SecaoRevendaMercadoria'
import SecaoVendaProdutos from '../../sections/relatorioReceitasBrutas/SecaoVendaProdutos'
import SecaoPrestacaoServicos from '../../sections/relatorioReceitasBrutas/SecaoPrestacaoServicos'
import AssPdfReceitasBrutas from '../../sections/relatorioReceitasBrutas/AssPdfReceitasBrutas'

const LabelRelatorioReceitasBrutas = () => {
    return (
        <>
            <SecaoDadosEmpreendedor />
            <SecaoRevendaMercadoria />
            <SecaoVendaProdutos />
            <SecaoPrestacaoServicos />
            <AssPdfReceitasBrutas />
        </>
    )
}

export default LabelRelatorioReceitasBrutas