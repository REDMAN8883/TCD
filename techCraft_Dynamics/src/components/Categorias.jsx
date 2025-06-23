import '../css/Categorias.css'

export default function Categorias(){
    return(
        <>
            <h1 className="titulo">CATEGORIAS</h1>   
            {/* Contenedor trasero */}
            <main className="contenedor-principal">
                <button className="G-categorias">Gestionar categorias</button>
                    
                <div className="Tabla">

                    {/* Es mejor ponerlo solo cuando se le de click a la gestion */}
                        {/* Actualizar la tabla a map */}
                    {/* <table>
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
                    </table> */}
                </div>
                        {/* Seccion donde se visualiza los productos mas vendidos 4xC.U */}
                
                    <section id="mas-vendidos" className="mas-vendidos">
                        <h2 className="Mas-V">Productos Más Vendidos</h2>           
                        
                        {/* <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Ventas</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alimento Premium para Perros</td>
                                    <td>120 unidades</td>
                                    <td>$50,000</td>
                                </tr>
                                <tr>
                                    <td>Juguete de Peluche</td>
                                    <td>95 unidades</td>
                                    <td>$20,000</td>
                                </tr>
                                <tr>
                                    <td>Cama Grande para Mascotas</td>
                                    <td>80 unidades</td>
                                    <td>$120,000</td>
                                </tr>
                            </tbody>
                        </table> */}

                        <div className="galeria-productos">
                            <div className="producto">
                                <img src="" alt="Imagen del producto" className="I-producto" />
                                <h3>Alimento Premium</h3>
                                <p>$50,000</p>
                            </div>
                            <div className="producto">
                                <img src="" alt="Imagen del producto" className="I-producto" />
                                <h3>Juguete para Gatos</h3>
                                <p>$20,000</p>
                            </div>
                            <div className="producto">
                                <img src="" alt="Imagen del producto" className="I-producto" />
                                <h3>Cama para Mascotas</h3>
                                <p>$120,000</p>
                            </div>
                            <div className="producto">
                                <img src="" alt="Imagen del producto" className="I-producto" />
                                <h3>Shampoo para Perros</h3>
                                <p>$25,000</p>
                            </div>
                        </div>            
                    </section>
                            {/* Seccion donde se visualiza los productos mas vendidos 4xC.U */}
                <section id="menos-vendidos" className="menos-vendidos">
                    <h2 className="Menos-V">Productos Menos Vendidos</h2>

                    {/* <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Ventas</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Correa Sencilla</td>
                                <td>5 unidades</td>
                                <td>$15,000</td>
                            </tr>
                            <tr>
                                <td>Shampoo para Gatos</td>
                                <td>3 unidades</td>
                                <td>$25,000</td>
                            </tr>
                            <tr>
                                <td>Casa para Hámsters</td>
                                <td>1 unidad</td>
                                <td>$45,000</td>
                            </tr>
                            
                        </tbody>
                    </table> */}

                    <div className="galeria-productos">
                        <div className="producto">
                            <img src="" alt="Imagen de productos" className="I-producto" />
                            <h3>Correa Sencilla</h3>
                            <p>$50,000</p>
                        </div>
                        <div className="producto">
                            <img src="" alt="Imagen de productos" className="I-producto" />
                            <h3>Casa para Hámsters</h3>
                            <p>$20,000</p>
                        </div>
                        <div className="producto">
                            <img src="" alt="Imagen de productos" className="I-producto" />
                            <h3>Shampoo Para Gatos</h3>
                            <p>$120,000</p>
                        </div>
                        <div className="producto">
                            <img src="" alt="Imagen de productos" className="I-producto" />
                            <h3>Shampoo Para Gatos 2</h3>
                            <p>$120,000</p>
                        </div>
                    </div>           
                </section>
            </main>
        </>
    );
}