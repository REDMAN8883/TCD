import { useNavigate } from 'react-router-dom'

export default function EditarSubcategorias(){
    const navigate = useNavigate();
    return(
        <>
            <h1 className="titulo">EDITAR SUBCATEGORÍA</h1>  

            <main className="contenedor-principal">
                <div className="datos card p-4 shadow">
                    {/* Formulario principal en dos columnas */}
                    <form>
                        <div className="row mb-3">
                            {/* Columna izquierda */}
                            <div className="col-md-4">
                            <div className="mb-3">
                                {/* nombre de la subcategoria */}
                                <label className="form-label">Nombre de la subcategoría: <span className="span">*</span></label>
                                <input type="text" id="nombre" className="form-control" />
                            </div>
                            <div className="mb-3">
                                {/* Seleccion de la categoria */}
                                <label className="form-label">Tipo de categoría: <span className="span">*</span></label>
                                <select id="tipo" className="form-control">
                                <option value="">Ninguna</option>
                                </select>
                            </div>
                            </div>

                            {/* Columna derecha */}
                            <div className="col-md-8">
                            <div className="mb-3">
                                {/* Descripcion */}
                                <label className="form-label">Descripción:</label>
                                <textarea id="descripcion" rows="6" className="form-control" placeholder="Escribe una descripción aquí..."></textarea>
                            </div>
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="d-flex justify-content-center gap-3">
                            <button type="submit" className="btn btn-success">Guardar</button>
                            <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>Regresar</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}