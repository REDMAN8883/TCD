import { useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function EditarProducto(){
    const navigate = useNavigate();
    const [tipoProducto, setTipoProducto] = useState('');
    const [imagenFormulario1, setImagenFormulario1] = useState(null);
    const [imagenFormulario2, setImagenFormulario2] = useState(null);

    const handleImagenChange1 = (e) => {
        const file = e.target.files[0];
        if (file){
            setImagenFormulario1(URL.createObjectURL(file))
        }
    }
    const handleImagenChange2 = (e) => {
        const file = e.target.files[0];
        if (file){
            setImagenFormulario2(URL.createObjectURL(file))
        }
    }
return(
        <>
            <h1 className="titulo">AGREGAR PRODUCTO NUEVO</h1>  

            <main className="contenedor-principal">

                <div className="Formulario-producto">
                    {/* Seleccion de formulario gramaje o paquete */}
                    <label htmlFor="tipo" >Tipo de prodcuto</label>
                    <select className="form-control" id="tipo" value={tipoProducto}  onChange={(e) => setTipoProducto(e.target.value)}>
                        <option value="">--Selecciona un opción--</option>
                        <option value="paquete">Productos en paquetes</option>
                        <option value="gramaje">Productos en gramaje</option>
                    </select>

                    {/* Primer formulario: Paquete */}
                    {tipoProducto === 'paquete' &&(
                        <div className="datos card p-4 shadow">
                            {/* Formulario principal en dos columnas */}
                            <form>
                                <div className="row mb-3">
                                    {/* Columna izquierda */}
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <div className="mb-3 text-center">
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

                                                        {imagenFormulario1 ? (
                                                            <img src={imagenFormulario1} alt="preview" 
                                                            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                            ) : (
                                                                <span style={{ color: "#666", fontSize: "12px" }}>Sin imagen</span>
                                                        )}
                                                </div>
                                                <label className="btn btn-primary btn-sm">Seleciona una imagen
                                                    <input type="file" accept="image/" onChange={handleImagenChange1} hidden />
                                                </label>
                                        </div>
                                            
                                            {/* Nombre del producto */}
                                            <label className="form-label">Nombre del producto: <span className="span">*</span></label>
                                            <input type="text" id="nombre" className="form-control" />

                                            {/* Cantidad de productos */}
                                            <label className="form-label">Cantidad de productos: <span className="span">*</span></label>
                                            <input type="number" id="number" className="form-control" placeholder="999" />
                                        </div>
                                        
                                    </div>

                                    {/* Columna derecha */}
                                    <div className="col-md-8">
                                        <div className="mb-3">
                                            {/* Codigo de barras del producto */}
                                            <label className="form-label">Código de barras:</label>
                                            <input type="number" id="number" className="form-control" placeholder="0000000"/>

                                            

                                            {/* Descripcion del producto */}
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
                    )}

                    {/* Segundo formulario: Gramaje */}
                    {tipoProducto === 'gramaje' && (
                        <div className="datos card p-4 shadow">
                            <form>
                                <div className="row mb-3">
                                {/* Columna izquierda */}
                                    <div className="col-md-4">
                                        <div className="mb-3 text-center">
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

                                        {/* Nombre del producto */}
                                        <div className="mb-3">
                                        <label className="form-label">Nombre del producto: <span className="span">*</span></label>
                                        <input type="text" id="nombre" className="form-control" />
                                        </div>

                                    </div>

                                    {/* Columna derecha */}
                                    <div className="col-md-8">
                                        <div className="mb-3">
                                            {/* Peso KG */}
                                            <label className="form-label">Peso <span className="span">*</span></label>
                                            <input type="number" className="form-control" placeholder="Kilogramos " />
                                            <label className="form-label">Precio: <span className="span">*</span></label>
                                            <input type="number" className="form-control" placeholder=""/>

                                            {/* Peso LB */}
                                            <label className="form-label">Peso <span className="span">*</span></label>
                                            <input type="number" className="form-control" placeholder="Libras"/>
                                            <label className="form-label">Precio: <span className="span">*</span></label>
                                            <input type="number" className="form-control" />
                                            </div>                                    

                                            {/* Descripción */}
                                            <div className="mb-3">
                                            <label className="form-label">Descripción:</label>
                                            <textarea
                                                id="descripcion"
                                                rows="6"
                                                className="form-control"
                                                placeholder="Escribe una descripción aquí..."
                                            ></textarea>
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
                    )}

                </div>
            </main>
        </>
    );
}