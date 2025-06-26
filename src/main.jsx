import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Demo from './Greeting.jsx'
import Img from './Food.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Demo />
    <Img />
  </StrictMode>,
)
