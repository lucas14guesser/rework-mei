import { Link } from "react-router-dom"
import { Container, Titulo } from "../styles/styles"
import FormularioSolicitacaoMei from "../components/forms/atendimentoMeiSolicitacao/FormularioSolicitacaoMei"

function SolicitacaoMei() {
    return (
        <>
            <Titulo>Atendimento MEI - Formulário de solicitação</Titulo>
            <Container>
                <Link to='/'>Voltar para os serviços</Link>
                <FormularioSolicitacaoMei />
            </Container>
        </>
    )
} export default SolicitacaoMei