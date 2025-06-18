import { useState } from 'react';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Categorias from "./components/Categorias";
//import Perfil from "./components/Perfil";
import './App.css';


function Layout(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Sidebar con apertura y cierre */}
      <Sidebar isOpen={isOpen} />  

      
        {/* Boton fijo */}
        <button className="btn btn-primary"
        onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'fixed',
            top: '1rem',
            left: isOpen ? '260px' : '1rem', // Mover si se abre el Sidebar
            zIndez: 999
          }}>
          ☰
        </button>

        <div className="main-content"
        style={{
          marginLeft: isOpen ? '260px' : 0,
          transition: 'margin-left 0.3s',
          padding: '2rem'
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
          {/* <Route path="Perfil" element={<Perfil />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
