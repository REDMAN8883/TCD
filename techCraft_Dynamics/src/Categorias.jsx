import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'

export default function BootstrapSidebar(){
  const [open, setOpen] = useState(false);

  return (
    <div className = "container mt-3">
      <button className="btn btn-primary" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="bg-light border p-3 mt-2">
          <img src="#" alt="Image Perfil" />
          <h5>Rol</h5>
          <ul className="nav flex-column">
            
            <li className="nav-item">
              <a className="nav-link active" href="#">Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ventas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Usuarios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categorias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Proveedores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Reportes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cerrar sesión</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}