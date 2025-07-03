import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FeedbackForm from './FeedBackForm'
import Color from './Color'
import Person from './Person'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>,
)
