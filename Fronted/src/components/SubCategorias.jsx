// Importaciones Link, etc...
import {  Link, useNavigate, useParams} from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Alertas
import Swal from 'sweetalert2'

// import del css
import '../css/Subcategorias.css'

export default function Subcategoria(){

    // Variables para usar 
    const {idCategoria} = useParams();
    const [subcategorias, setSubcategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [subSeleccionada, setSubSeleccionada] = useState(null);
    const [categoria, setCategoria] = useState(null); 
    const navigate = useNavigate();

        // Llamar los datos con las appi por eso el useEffect
    const getSubCategorias = useCallback(async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/subcategorias');
            const filtradas = res.data.filter(sub => sub.id_Categorias == idCategoria);
            setSubcategorias(filtradas);
        } catch (error) {
            console.error("Error al obtener subcategorías:", error);
        }
    }, [idCategoria]); // depende de idCategoria

    const getCategoria = useCallback(async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/categorias/${idCategoria}`);
                setCategoria(res.data);
            } catch (error) {
                console.error("Error al obtener la categoría:", error);
            }
        }, [idCategoria]);

    useEffect(() => {
        getSubCategorias();
        getCategoria();

        //Api de productos gramaje
        axios.get('http://localhost:3000/api/Productos/paquete')
            .then(res => setProductos(prev => [...prev, ...res.data]))
            .catch(err => console.error(err));
        //Api de productos en paquete
        axios.get('http://localhost:3000/api/Productos/gramaje')
            .then(res => setProductos(prev => [...prev, ...res.data]))
            .catch(err => console.error(err));
    }, [getSubCategorias, getCategoria]); //  importante para que lo escuche

    // Obtener la categoría por ID
    

    
    const deleteSub = (id) => {
        Swal.fire({
            title: "¿Estás segur@ de eliminar esta categoría?",
            text: "¡No podrás deshacer esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/api/subcategorias/delete/${id}`)
                    .then(() => {
                        getSubCategorias(); 
                        Swal.fire("Eliminado", "Subcategoría eliminada con éxito", "success");
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
                                <h3 className="Titulo-S"> {categoria ? `SUBCATEGORÍAS DE ${categoria.Nombre_categoria.toUpperCase()}` : "SUBCATEGORÍAS"} </h3>

                                {subcategorias.map(sub => (
                                    <div
                                        className="B-Subcategorias"
                                        key={sub.id}
                                        onClick={() => setSubSeleccionada(sub)}
                                        style={{ cursor: 'pointer' }}
                                        >
                                        <span>{sub.Nombre_Subcategoria}</span>

                                        <div className="botones-sub" onClick={(e) => e.stopPropagation()}>
                                            <Link to={`/editar/subcategoria/${sub.id}`}>
                                                <button className="btn btn-success btn-sm">
                                                    <i className='bx bx-edit'></i>
                                                </button>
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={(e) => {
                                                    e.stopPropagation(); // evita que se dispare el onClick del contenedor
                                                    deleteSub(sub.id);
                                                }}
                                                >
                                                <i className='bx bx-trash'></i>
                                            </button>
                                        </div>
                                    </div>
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