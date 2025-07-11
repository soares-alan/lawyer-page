import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Importa o BrowserRouter
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Envolve o App com o BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)