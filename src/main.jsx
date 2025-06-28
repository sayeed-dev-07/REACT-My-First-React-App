import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { App } from './Animal'
import RecipeList from './Data'
import Poem from './Poem'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Poem />
  </StrictMode>,
)
