import {  Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/Subcategorias.css'

export default function Subcategoria(){

    const [subcategorias, setSubcategoria] = useState([]);
    const [productos, setProductos] = useState([]);
    const [subSeleccionada, setSubSeleccionada] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Traemos las subcategorias
        axios.get('http://localhost:3000/api/Subcategorias')
            .then(res => {
                setSubcategoria(res.data);
            })
            .catch(err => console.error(err));

        // Traemos los productos en paquetes.
        axios.get('http://localhost:3000/api/Productos/paquete')
            .then(res => {
                setProductos(prev => [...prev, ...res.data]);
            })
            .catch(err => console.error(err));

        // Traemos los productos en gramaje.
        axios.get('http://localhost:3000/api/Productos/paquete')
            .then(res => {
                setProductos(prev => [...prev, ...res.data]);
            })
            .catch(err => console.error(err));
    }, []);

    const productosFiltrados = subSeleccionada 
        ? productos.filter(p => p.subcategoria_id === subSeleccionada.id) : []
 
            return (
                <>
                    <h1 className="titulo">SUBCATEGORíAS</h1> 
                    <main className="contenedor-principal">

                            {/* Boton para agregar subcategorias */}
                            <Link to="/agregar/subcategoria">
                                <button className="A-Subcategorias">Agregar subcategoria nueva</button>
                            </Link>

                            {/* Contenedor derecho para subcategorias */}
                        <div style={{ display: "flex" }}>
                        {/* Subcategorías */}
                            <div className="C-SubCategorias">
                                <h3 className="Titulo-S"> Subcategorias </h3>

                                {subcategorias.map(sub => (
                                    <button
                                        className="B-Subcategorias"
                                        key={sub.id}
                                        onClick={() => setSubSeleccionada(sub)}
                                    >
                                        <span>{sub.nombre}</span>

                                        <div className="botones-sub">
                                            <Link to={`/editar/subcategoria/${sub.id}`}>
                                                <button className="btn btn-success btn-sm">
                                                    <i className='bx bx-edit'></i>
                                                </button>
                                            </Link>
                                            <button className="btn btn-danger btn-sm">
                                                <i className='bx bx-trash'></i>
                                            </button>
                                        </div>
                                    </button>
                                ))}

                                {/* Solo para regresar a la pagina anterior */}
                                <button onClick={() => navigate(-1)} className="Regresar">
                                regresar
                                </button>
                            </div>

                        {/* Productos */}
                            <div className="Productos col-12 col-md-10 col-lg-8  ">
                                    <Link to="/agregar/producto">
                                        <button className="A-Subcategorias">Agregar producto nuevo</button>
                                    </Link>
                                <h3 className="Titulo-P">PRODUCTOS</h3>
                                {subSeleccionada ? (
                                    <div className="Apartado-P" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                        {/* MAP */}
                                        {productosFiltrados.map(p => (
                                            <div key={p.id} className="card-producto">
                                                <img src={p.imagen} alt={p.nombre} className="img-producto" />
                                                <p className="nombre-producto">{p.nombre}</p>
                                                <p className="precio-producto">${Number(p.precio).toLocaleString()}</p>
                                                <div className="botones-pro">
                                                    <Link to={`/editar/producto/${p.id}`}>
                                                        <button className="btn btn-success btn-sm">
                                                            <i className='bx bx-edit'></i>
                                                        </button>
                                                    </Link>
                                                    <button className="btn btn-danger btn-sm">
                                                        <i className='bx bx-trash'></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                <p className="Subtitulo">Selecciona una subcategoría</p>
                                )}
                            </div>
                        </div>
                    </main> 
                </>
                );
}