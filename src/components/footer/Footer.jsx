import Logo from '../../assets/logo-mei.png'
import { FooterContainer, FooterImagem, FooterTexto } from '../../styles/styles'

function Footer() {
    return (
        <FooterContainer>
            <FooterImagem src={Logo} alt="Logo do espaço do empreendedor" />
            <FooterTexto>Prefeitura Municipal de São José &copy;</FooterTexto>
        </FooterContainer>
    )
} export default Footer