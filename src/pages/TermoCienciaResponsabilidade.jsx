import { Link } from "react-router-dom"
import { Container,  Titulo } from "../styles/styles"
import FormularioTermoCienciaResponsabilidade from "../components/forms/FormularioTermoCienciaResponsabilidade"

function TermoCienciaResponsabilidade() {
    return (
        <>
            <Titulo>Termo de ciência e responsabilidade</Titulo>
            <Container>
                <Link to='/'>Voltar para os serviços</Link>
                <FormularioTermoCienciaResponsabilidade />
            </Container>
        </>
    )
} export default TermoCienciaResponsabilidade