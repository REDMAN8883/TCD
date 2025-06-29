import { Link, useNavigate } from 'react-router-dom';
import { categorias } from '../data/data.js';
import '../css/ListarCategorias.css';


export default function ListarCategorias(){

    // Uso de las constantes 
    const navigate = useNavigate();

    

    return(
        <>
            <h1 className="titulo">LISTADO DE CATEGORíAS</h1>  
             
            <main className="contenedor-principal">
                {/* Boton para ir a agregar categorias */}
                    <Link to="/agregar/categoria" >
                        <button className="A-categorias">Agregar categoria nueva</button>
                    </Link>
                    
                <section  className="Listado">

                    {/* Proximo a cambiar a map  */}
                    {/* De momento esta visual */}
                    <table className="L-Categorias">
                        <thead>
                            <tr>
                                <th>Imagenes</th>
                                <th>Nombres</th>
                                <th>SubCategorías</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Aca se hace el tipo bucle para traer todas las categorias */}
                            {categorias.map((cat)=>
                            // La llave va ser por su id
                            <tr key={cat.id}>
                                <td><img src={cat.imagen} alt={cat.imagen} width="50%" /></td>
                                <td>{cat.nombre}</td>
                                <td>
                                    <Link to={`/categoria/${cat.nombre}`}>{cat.nombre}</Link>
                                </td>
                                <td>
                                    <Link to="/editar/categoria">
                                        <button className="btn btn-success btn-sm d-flex justify-content-center align-items-center mx-auto">
                                            <i className='bx bx-edit'></i>
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm d-flex justify-content-center align-items-center mx-auto">
                                        <i className='bx bx-trash'></i>
                                    </button>
                                </td>        
                            </tr>  
                            )}
                        </tbody>
                    </table>
                </section>  
                {/* Boton para regresar a la pagina anterior */}
                <div className='regresar'>
                    <button className="Regresar" onClick={() => navigate(-1)}>Atras</button>
                </div>              
            </main>
        </>
    );
}