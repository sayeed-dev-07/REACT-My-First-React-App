import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FeedbackForm from './FeedBackForm'
import Color from './Color'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Color />
  </StrictMode>,
)
