import { Link } from "react-router-dom"
import { Container, Titulo } from "../styles/styles"
import FormularioRessarcimentoValores from "../components/forms/FormularioRessarcimentoValores"

function RequerimentoRessarcimentoValores() {
    return (
        <>
            <Titulo>Requerimento - Ressarcimento de valores</Titulo>
            <Container>
                <Link to='/'>Voltar para os serviços</Link>
                <FormularioRessarcimentoValores />
            </Container>
        </>
    )
} export default RequerimentoRessarcimentoValores