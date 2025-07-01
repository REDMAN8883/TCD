import { useParams, Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { categorias  } from '../data/data';

import '../css/Subcategorias.css'

export default function Subcategoria(){
    const {nombreCategoria} = useParams();
    const categoria = categorias.find((c) => c.nombre === nombreCategoria);
    const [subSeleccionada, setSubSeleccionada] = useState(null);
    const navigate = useNavigate();

    if(!categoria) return <p>Categoria no existe</p>
 
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
                                <h3 className="Titulo-S">{categoria.nombre.toUpperCase()}</h3>

                                {/* MAP */}
                                {categoria.subcategorias.map((sub) => (
                                    // Este boton sirve para selecionar la subcategoria deseada 
                                <button className="B-Subcategorias" key={sub.id} onClick={() => setSubSeleccionada(sub)}>
                                    <span>{sub.nombre}</span> 

                                    {/* Contiene los botones de editar y agregar subcategorias */}
                                    <div className="botones-sub">
                                        <Link to="/editar/subcategoria">
                                            <button className="btn btn-success btn-sm d-flex justify-content-center align-items-center mx-auto">
                                                <i className='bx bx-edit'></i>
                                            </button> 
                                        </Link>
                                        <button className="btn btn-danger btn-sm d-flex justify-content-center align-items-center mx-auto">
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
                                        {subSeleccionada.productos.map((p) => (
                                        <div key={p.id} className="card-producto">

                                            <img src={p.imagen} alt={p.nombre} className="img.producto" />
                                            <p className="nombre-producto">{p.nombre}</p>
                                            <p className="precio-producto">${Number(p.precio).toLocaleString()}</p>

                                            {/* Botones de lo productos */}
                                            <div className="botones-pro">
                                                <Link to="/editar/producto">
                                                    <button className="btn btn-success btn-sm d-flex justify-content-center align-items-center mx-auto">
                                                        <i className='bx bx-edit'></i>
                                                    </button> 
                                                </Link>
                                                <button className="btn btn-danger btn-sm d-flex justify-content-center align-items-center mx-auto">
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