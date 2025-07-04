import {  Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

import '../css/Subcategorias.css'

export default function Subcategoria(){

    const [subcategorias, setSubcategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [subSeleccionada, setSubSeleccionada] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getSubCategorias();

        axios.get('http://localhost:3000/api/Productos/paquete')
            .then(res => setProductos(prev => [...prev, ...res.data]))
            .catch(err => console.error(err));

        axios.get('http://localhost:3000/api/Productos/gramaje')
            .then(res => setProductos(prev => [...prev, ...res.data]))
            .catch(err => console.error(err));
        }, []);

    const getSubCategorias = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/subcategorias');
            setSubcategorias(res.data);
        } catch (error) {
            console.error("Error al obtener subcategorías:", error);
        }
    };
    


    // Alerta al borrar categoria
        const deleteSub = (id) => {
            Swal.fire({
                title: "¿Estas segur@ de eliminar esta categoría?",
                text: "!No podras deshacer esta accion!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Eliminar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed){
                    axios.delete(`http://localhost:3000/api/subcategorias/delete/${id}`)
                    .then(() =>{
                        getSubCategorias();
                        Swal.fire("Eliminado", "Categoria eliminada con exito", "success");
                    })
                    .catch(err => Swal.fire('Error al eliminar', err.message, 'error'));
                }
            });
        };

        // Buscador, filtra lo que uno busca en la tabla en base a el nombre.
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
                                <h3 className="Titulo-S"> SUBCATEGORIAS </h3>

                                {subcategorias.map(sub => (
                                    <button
                                        className="B-Subcategorias"
                                        key={sub.id}
                                        onClick={() => setSubSeleccionada(sub)}
                                    >
                                        <span>{sub.Nombre_Subcategoria}</span>

                                        <div className="botones-sub">
                                            <Link to={`/editar/subcategoria/${sub.id}`}>
                                                <button className="btn btn-success btn-sm">
                                                    <i className='bx bx-edit'></i>
                                                </button>
                                            </Link>
                                            <button className="btn btn-danger btn-sm" onClick={() => deleteSub(sub.id)}>
                                                <i className='bx bx-trash'></i>
                                            </button>
                                        </div>
                                    </button>
                                ))}

                                {/* Solo para regresar a la pagina anterior */}
                                <button onClick={() => navigate('/Categorias/Listado')} className="Regresar">
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