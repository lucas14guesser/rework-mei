import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/styles.js'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router.jsx'
import Footer from './components/footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Router />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
