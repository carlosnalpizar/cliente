import React from 'react'
import { Link } from 'react-router-dom'
import '../css/App.css'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/RegistroPersona">Registrar Persona</Link></li>
        <li><Link to="/RegistroProducto">Registrar Producto</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
