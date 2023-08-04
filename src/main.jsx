import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './assets/styles/globalStyle.jsx';
import { HeaderTop } from '../src/assets/styles/HeaderTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <HeaderTop />
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>
)
