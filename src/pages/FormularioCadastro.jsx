import { Link } from "react-router-dom"
import { Container, Titulo } from "../styles/styles"
import FormularioFormCadastro from "../components/forms/FormularioFormCadastro"

function FormularioCadastro() {
    return (
        <>
        <Titulo>Formulário de cadastro</Titulo>
        <Container>
            <Link to='/'>Voltar para os serviços</Link>
            <FormularioFormCadastro />
        </Container>
        </>
    )
} export default FormularioCadastro