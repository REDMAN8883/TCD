import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../css/Agregar.css';

export default function AgregarCategoria(){

    // Constantes en uso para logicas
    const navigate = useNavigate();

    const [imagenFormulario2, setImagenFormulario2] = useState(null);

    const handleImagenChange2 = (e) => {
        const file = e.target.files[0];
        if (file){
            setImagenFormulario2(URL.createObjectURL(file))
        }
    }
    return (
        <>  
            {/* Titulo */}
            <h1 className="titulo">AGREGAR CATEGORíA NUEVA</h1>  

            {/* Contenedor trasero */}
            <main className="contenedor-principal">
                <div className="datos card p-4 shadow">

                    {/* Imagen con su informacion */}
                    <div className="row mb-4 align-items-center ">
                        <div className="col-md-4 text-center  imagen">
                            {/* Imagen del producto */}
                            <div className="rounded-circle bg-secondary mx-auto mb-2" 
                                    style={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    backgroundColor: "#ccc",
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    }}
                                            >

                                    {imagenFormulario2 ? (
                                        <img src={imagenFormulario2} alt="preview" 
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        ) : (
                                            <span style={{ color: "#666", fontSize: "12px" }}>Sin imagen</span>
                                    )}
                            </div>
                            <label className="btn btn-primary btn-sm">Seleciona una imagen
                                                <input type="file" accept="image/" onChange={handleImagenChange2} hidden />
                            </label>
                        </div>

                                {/* Los inputs van a la derecha */}
                        <section className="col-md-8 formulario">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">

                                        {/* Nombre de la categoria */}
                                        <div className="mb-3">
                                            <label className="form-label">Nombre de la categoría: <span className="span">*</span></label>
                                            <input type="text" id="N-Categorias" className="form-control" />
                                        </div>

                                        {/* Descripcion de la categoria */}
                                        <div className="mb-3 peticiones">
                                            <label className="form-label">Descripción:</label>
                                            <textarea className="form-control" id="D-Categorias" name="descripcion" rows="4" placeholder="Escribe una descripcion aqui..."></textarea>
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