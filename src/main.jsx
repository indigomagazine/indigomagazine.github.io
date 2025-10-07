import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import './styles/NOThome.css'
import './styles/laQuinta.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)