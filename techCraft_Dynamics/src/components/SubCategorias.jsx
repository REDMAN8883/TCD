import { useParams, Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { categorias  } from '../data/data';

export default function Subcategoria(){
    const {nombreCategoria} = useParams();
    const categoria = categorias.find((c) => c.nombre === nombreCategoria);
    const [subSeleccionada, setSubSeleccionada] = useState(null);
    const navigate = useNavigate();

    if(!categoria) return <p>Categoria no existe</p>

    
            return (
                    <div style={{ display: "flex" }}>
                    {/* Subcategorías */}
                    <div style={{ width: "30%", padding: "1rem", background: "#0d4e0d" }}>
                        <h3 style={{ color: "white" }}>{categoria.nombre.toUpperCase()}</h3>
                        {categoria.subcategorias.map((sub) => (
                        <button
                            key={sub.id}
                            style={{ display: "block", margin: "0.5rem", background: "brown", color: "white" }}
                            onClick={() => setSubSeleccionada(sub)}
                        >
                            {sub.nombre}
                        </button>
                        ))}
                        <button onClick={() => navigate(-1)} style={{ marginTop: "1rem" }}>
                        regresar
                        </button>
                    </div>

                    {/* Productos */}
                    <div style={{ width: "70%", padding: "1rem", background: "#222" }}>
                        <h3 style={{ color: "white" }}>PRODUCTOS</h3>
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
                );
}