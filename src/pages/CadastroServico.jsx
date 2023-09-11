import { Link } from "react-router-dom"
import { Titulo, Container} from "../styles/styles"
import FormularioCadastroServico from "../components/forms/cadastroNotasServicos/FormularioCadastroServico"


function CadastroServico() {
    return (
        <>
        <Titulo>Cadastro para emissão de notas de prestação de serviço</Titulo>
        <Container>
            <Link to="/">Voltar para os serviços</Link>
            <FormularioCadastroServico />            
        </Container>
        </>
    )
} export default CadastroServico