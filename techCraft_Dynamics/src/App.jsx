// Importaciones de rutas etc.
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
// importaciones de componentes
import Sidebar from "./components/Sidebar";
import Categorias from "./components/Categorias";
import ListarCategorias from "./components/listarCategorias";
// import Edicion from "./components/Edicion";
import Subcategoria from './components/SubCategorias';
import Agregar from './components/AgregarCategorias';




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
          <Route path="Categorias/Listado" element={<ListarCategorias />} />
          <Route path="Agregar-Categorias" element={<Agregar />} />
          <Route path="Categoria/:nombreCategoria" element={<Subcategoria />} />
          
          {/* <Route path="Accessorios" element={<Edicion />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
