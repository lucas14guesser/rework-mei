import FormularioAberturaMei from "../components/forms/FormularioAberturaMei"
import { Container, Titulo } from "../styles/styles"
import { Link } from 'react-router-dom'

function AberturaMei() {
    return (
        <>
            <Titulo>Atendimento mei - Formulário de abertura</Titulo>
            <Container>
                <Link to='/'>Voltar para os serviços</Link>
                <FormularioAberturaMei />
            </Container>
        </>
    )
} export default AberturaMei