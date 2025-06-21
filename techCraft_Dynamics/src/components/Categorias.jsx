import '../css/Estilos.css';

export default function Categorias(){
    return(
        <>
            <h1 className="titulo">Categorias</h1>   

            <div className="Tabla">

                <button>Gestionar categorias</button>
                <table>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Imagen</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Categoria 1</td>
                            <td>Imagen</td>
                            <td><button>Editar</button></td>
                            <td><button>Eliminar</button></td>
                        </tr>
                        <tr>
                            <td>Categoria 2</td>
                            <td>Imagen</td>
                            <td><button>Editar</button></td>
                            <td><button>Eliminar</button></td>
                        </tr>
                    </tbody>
                        
                </table>

            </div>
        </>
    );
}