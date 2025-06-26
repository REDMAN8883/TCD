import '../css/ListarCategorias.css'

export default function ListarCategorias(){
    return(
        <>
            <h1 className="titulo">LISTADO DE CATEGORíAS</h1>   
            <main className="contenedor-principal">
                    <button className="A-categorias">Agregar</button>
                <section  className="Listado">

                    {/* Proximo a cambiar a map  */}
                    {/* De momento esta visual */}
                    <table className="L-Categorias">
                            <thead>
                                <tr>
                                    <th>Imagenes</th>
                                    <th>Nombres</th>
                                    <th>SubCategorías</th>
                                    <th>Precio</th>
                                    <th>Cantidadades</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="" alt="" /></td>
                                    <td>Collar</td>
                                    <td><a href="/Personal/index4.html">Accesorios</a></td>
                                    <td>$25,000</td>
                                    <td>100</td>
                                    <td class="actions">
                                        <button class="edit" onclick="location.href='/Personal/EditarCate.html'"></button>
                                        <button class="delete"></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="" alt="" /></td>
                                    <td>Collar </td>
                                    <td>Accesorios</td>
                                    <td>$25,000</td>
                                    <td>100</td>
                                    <td class="actions">
                                        <button class="edit">Editar</button>
                                        <button class="delete">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="" alt="" /></td>
                                    <td>Collar </td>
                                    <td>Accesorios</td>
                                    <td>$25,000</td>
                                    <td>100</td>
                                    <td class="actions">
                                        <button class="edit" >Editar</button>
                                        <button class="delete">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </section>
            </main>
            
        </>
    );
}