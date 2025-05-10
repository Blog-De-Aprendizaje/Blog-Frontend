import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Homes } from './pages/Homes'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homes />
  </StrictMode>,
)
