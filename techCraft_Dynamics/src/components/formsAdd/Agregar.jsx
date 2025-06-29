// Elemento padre. Donde renderizamos la opcion escojida

//Importaciones de los componentes hijos
import AgregarCategoria from './AgregarCategorias';
import AgregarSubcategoria from './AgregarSubcategoria';
// import AgregarProducto from './AgregarProducto';

// Importamos la capturacion de las url useParams
import { useParams } from 'react-router-dom';

export default function Agregar(){
    const { tipo } = useParams(); // Vamos a capturar los componentes 'Categoria', 'Subcategoria' y 'Producto' todo eso para agregar 

    const renderFormulario = () =>{
        switch (tipo){
            case 'categoria':
                return <AgregarCategoria />;
            case 'subcategoria':
                return <AgregarSubcategoria />;
            case 'producto':
                return <AgregarProducto />;
            default:
                return <p>El tipo de dato no es valido</p>
        }
    };

    return(
        <div className="container mt-4">
            {renderFormulario()}
        </div>
    )
}