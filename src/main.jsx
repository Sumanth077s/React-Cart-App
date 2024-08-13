import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import ContextProvider from './Features/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <StrictMode>
    <App />
  </StrictMode>


  </ContextProvider>
  
)
