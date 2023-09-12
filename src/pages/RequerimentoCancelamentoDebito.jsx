import { Link } from "react-router-dom"
import { Container, Titulo } from "../styles/styles"
import LabelCancelamentoDebito from "../components/label/requerimentoCancelamentoDebito/LabelCancelamentoDebito"

function RequerimentoCancelamenteDebito() {
    return (
        <>
        <Titulo>Requerimento - Cancelamento de débitos</Titulo>
        <Container>
            <Link to='/'>Voltar para os serviços</Link>
            <LabelCancelamentoDebito />
        </Container>
        </>
    )
} export default RequerimentoCancelamenteDebito