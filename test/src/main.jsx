import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./style.css"
import { BrowserRouter } from 'react-router-dom'
import Usercontext from './ContextAPI/Usercontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Usercontext><App /></Usercontext>
    </BrowserRouter>
  </StrictMode>,
)
