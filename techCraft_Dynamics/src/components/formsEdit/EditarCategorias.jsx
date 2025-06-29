import { Link, useNavigate } from 'react-router-dom';

export default function EditarCategoria(){
    const navigate = useNavigate(); // Variable para regresar 1 pagina 
    return(
        <>
            <h1 className="titulo">CATEGORíAS</h1>  
            <main class="contenedor-principal">
                <div className="datos card p-4 shadow">

                    {/* Titulo superior  */}
                    <div className="T-superior text-center mb-4">
                        <h4>Editar categoría nueva</h4>
                    </div>

                    {/* Imagen con su informacion */}
                    <div className="row mb-4 align-items-center ">
                        <div className="col-md-4 text-center  imagen">
                            <div
                                className="rounded-circle bg-secondary mx-auto mb-2"
                                style={{ width: "120px", height: "120px" }} >
                            </div>

                            {/* Este h3 se cambia para que se un boton que habilita 
                            el cambio de imagen */}
                            <h3>Imagen de la categoria " PROXIMO BOTON "</h3>
                        </div>

                                {/* Los inputs van a la derecha */}
                        <section className="col-md-8 formulario">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">

                                        {/* Nombre de la categoria */}
                                        <div className="mb-3">
                                            <label className="form-label">Nombre de la categoría:</label>
                                            <input type="text" id="nombre" className="form-control" />
                                        </div>

                                        {/* Descripcion de la categoria */}
                                        <div className="mb-3 peticiones">
                                            <label className="form-label">Descripción:</label>
                                            <textarea className="form-control" id="descripcion" name="descripcion" rows="4" placeholder="Escribe una descripcion aqui..."></textarea>
                                        </div>
                                        </div>
                                    </div>

                                    {/* Botones */}
                                    <div className="d-flex justify-content-center gap-3 mt-4">
                                        <button type="submit" className="btn btn-success">Guardar</button>
                                        <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>Regresar</button>
                                    </div>
                            </form>
                        </section>
                    </div>
                </div>
            </main>   
        </>
    );
}
