import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import "./assets/css/style.css"
import GeneralStatus from './components/context/GeneralStatus'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralStatus>
      <App />
    </GeneralStatus>
  </React.StrictMode>,
)
