import { Link } from "react-router-dom"
import { Container, Titulo } from "../styles/styles"
import FormularioSimplesNacional from "../components/forms/requerimentoSimplesNacional/FormularioSimplesNacional"

function RequerimentoSimplesNacional() {
    return (
        <>
            <Titulo>Requerimento - A reconsideração do simples nacional mei</Titulo>
            <Container>
                <Link to='/'>Voltar para os serviços</Link>
                <FormularioSimplesNacional />
            </Container>
        </>
    )
} export default RequerimentoSimplesNacional