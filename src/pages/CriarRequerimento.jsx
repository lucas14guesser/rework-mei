import { Link } from "react-router-dom"
import { Container, Titulo } from "../styles/styles"
import FormCriarRequerimento from "../components/forms/criarRequerimento/FormCriarRequerimento"

function CriarRequerimento() {
    return (
        <>
            <Titulo>Requerimento - Criar requerimento</Titulo>
            <Container>
                <Link to='/'>Voltar para os serviços</Link>
                <FormCriarRequerimento />
            </Container>
        </>
    )
} export default CriarRequerimento