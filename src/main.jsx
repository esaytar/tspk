import React from 'react'
import Provider from './Provider'
import { HelmetProvider } from 'react-helmet-async'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <HelmetProvider>
        <Provider>
          <App /> 
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
