import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FeedbackForm from './FeedBackForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedbackForm />
  </StrictMode>,
)
