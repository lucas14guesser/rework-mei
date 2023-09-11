import { Link } from "react-router-dom"
import { Container, Formulario, Titulo } from "../styles/styles"
import LabelRelatorioReceitasBrutas from "../components/label/relatorioReceitasBrutas/LabelRelatorioReceitasBrutas"

function ReceitasBrutas() {
    return (
        <>
            <Titulo>Relatório mensal das receitas brutas</Titulo>
            <Container>
                <Link to='/'>Voltar para os serviços</Link>
                <Formulario>
                    <LabelRelatorioReceitasBrutas />
                </Formulario>
            </Container>
        </>
    )
} export default ReceitasBrutas