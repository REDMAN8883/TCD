import { useState } from 'react';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Categorias from "./components/Categorias";
import Perfil from "./components/Perfil";
import './App.css';


function Layout(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Sidebar con apertura y cierre */}
      <Sidebar isOpen={isOpen} />  

      
        {/* Boton fijo */}
        <button className="sidebar-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'fixed',
            top: '1rem',
            left: isOpen ? '260px' : '1rem', // Mover si se abre el Sidebar
            zIndex: 1000,
            transition: 'left 0.3s ease'
          }}>
          ☰
        </button>

        <div className="main-content"
        style={{
          marginLeft: isOpen ? '250px' : '0',
          transition: 'margin-left 0.3s ease',
          padding: '4rem 2rem 2rem 2rem',
          minHeight: '100vh',
          width: isOpen ? 'calc(100vw - 260px)' : '100vw' // Ocupar todo el ancho disponible
          
        }}>
        <Outlet />
        </div>
    </div>
  );
}

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Categorias" element={<Categorias />} />
          <Route path="Perfil" element={<Perfil />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
