import { AppContainer, AppTitulo, AppLista, AppListaItems, AppListaItem, Logo } from "./styles/styles"
import { listaServicosColunaEsquerda, listaServicosColunaDireita } from "./services/Functions"
import { Link } from "react-router-dom"
import Header from "./components/layout/Header"

function App() {
  return (
    <>
      <Header />
      <AppTitulo>Serviços de atendimento - MEI</AppTitulo>

      <AppContainer>
        <AppLista>
          <AppListaItems>{listaServicosColunaEsquerda.map((listaEsquerda) => (
            <Link to={`/${listaEsquerda.toLowerCase().replace(/\s+/g, '-')}`}><AppListaItem>{listaEsquerda}</AppListaItem></Link>
          ))}
          </AppListaItems>
        </AppLista>
        <AppLista>
          <AppListaItems>{listaServicosColunaDireita.map((listaDireita) => (
            <Link to={`/${listaDireita.toLowerCase().replace(/\s+/g, '-')}`}><AppListaItem>{listaDireita}</AppListaItem></Link>
          ))}
          </AppListaItems>
        </AppLista>
      </AppContainer>
    </>
  )
}

export default App
