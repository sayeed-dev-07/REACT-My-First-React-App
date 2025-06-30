import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppButton from './Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppButton />
  </StrictMode>,
)
