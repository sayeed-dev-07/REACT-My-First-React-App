import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FeedbackForm from './FeedBackForm'
import Color from './Color'
import Person from './Person'
import MailClient from './App2'
import SyncedInputs from './App3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>,
)
