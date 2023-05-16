import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import i18next from './translations/Translations'
import { I18nextProvider } from 'react-i18next'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18next={i18next}> 
    <App />
    </I18nextProvider>
  </React.StrictMode>,
)
