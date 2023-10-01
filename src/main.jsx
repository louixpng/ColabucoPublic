import React from 'react'
import ReactDOM from 'react-dom/client'
import NavbarWithSearch from './Header.jsx'
import NavbarSimple from './HeaderFiltros.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarWithSearch />
    <NavbarSimple  />
  </React.StrictMode>,
)
