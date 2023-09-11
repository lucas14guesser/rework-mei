import { Routes, Route } from "react-router-dom"
import App from "../App"
import CadastroServico from "../pages/CadastroServico"
import TermoCienciaResponsabilidade from "../pages/TermoCienciaResponsabilidade"
import AberturaMei from "../pages/AberturaMei"
import RequerimentoSimplesNacional from "../pages/RequerimentoSimplesNacional"
import RequerimentoRessarcimentoValores from "../pages/RequerimentoRessarcimentoValores"
import SolicitacaoMei from "../pages/SolicitacaoMei"
import FormularioCadastro from "../pages/FormularioCadastro"
import ReceitasBrutas from "../pages/ReceitasBrutas"
import RequerimentoCancelamenteDebito from "../pages/RequerimentoCancelamentoDebito"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cadastro-para-emissão-de-notas-de-prestação-de-serviço" element={<CadastroServico />} />
            <Route path="/termo-de-ciência-e-responsabilidade" element={<TermoCienciaResponsabilidade />} />
            <Route path="/atendimento-mei-abertura" element={<AberturaMei />} />
            <Route path="/requerimento-simples-nacional" element={<RequerimentoSimplesNacional />} />
            <Route path="/requerimento-ressarcimento-valores" element={<RequerimentoRessarcimentoValores />} />
            <Route path="/atendimento-mei-solicitação" element={<SolicitacaoMei />} />
            <Route path="/formulário-de-cadastro" element={<FormularioCadastro />} />
            <Route path="/relatório-mensal-das-receitas-brutas" element={<ReceitasBrutas />} />
            <Route path="/requerimento-cancelamento-débito" element={<RequerimentoCancelamenteDebito />} />
        </Routes>
    )
} export default Router