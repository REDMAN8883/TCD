import { useState } from 'react';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import Categorias from "./Categorias";
import './App.css';

function Layout(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-flex">
      <Sidebar isOpen={isOpen}/>

      <div className="flex-grow-1 p-3">
        <button className="btn btn-primary mb-3"
        style={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: 2 }}
        onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
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
          {/* <Route path="Categorias" element={<Categorias />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

