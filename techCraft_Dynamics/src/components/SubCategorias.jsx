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
                    <h1 className="titulo">CATEGORíAS</h1> 
                    <main className="contenedor-principal">
                        <div style={{ display: "flex" }}>

                        {/* Subcategorías */}
                            <div className="C-SubCategorias">
                                <Link to="/agregar/subcategoria">
                                    <button className="A-Subcategorias">Agregar subcategoria</button>
                                </Link>
                                <h3 className="Titulo-S">{categoria.nombre.toUpperCase()}</h3>
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
                                <button onClick={() => navigate(-1)}>
                                regresar
                                </button>
                            </div>

                        {/* Productos */}
                            <div >
                                <h3>PRODUCTOS</h3>
                                {subSeleccionada ? (
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                    {subSeleccionada.productos.map((p) => (
                                    <div
                                        key={p.id}
                                        style={{
                                        width: "150px",
                                        height: "200px",
                                        background: "#333",
                                        color: "white",
                                        padding: "1rem",
                                        borderRadius: "8px",
                                        }}
                                    >
                                        <p>{p.nombre}</p>
                                        <p>${Number(p.precio).toLocaleString()}</p>
                                    </div>
                                    ))}
                                </div>
                                ) : (
                                <p style={{ color: "white" }}>Selecciona una subcategoría</p>
                                )}
                            </div>
                        </div>
                    </main> 
                </>
                );
}