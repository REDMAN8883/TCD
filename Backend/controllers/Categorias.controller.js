// Nos conectamos a la bases de datos desde mi archivo CONEXION.JS.
const db = require('../config/db');

// Creamos las categorias, insertamos los nuevos datos.
const crearCategorias = (req, res) => {
    // Variable para pedir la informacion del formulario.
    const { Imagen_categoria, Nombre_categoria, Descripcion } = req.body;
    const query =   
        `INSERT INTO Categorias ( Imagen_categoria, Nombre_categoria, Descripcion) 
        VALUES ( ?, ?, ?)`; // Insercion de los datos a la base de datos.
    const values = [Imagen_categoria, Nombre_categoria, Descripcion]; 

    // Controlador de errores. 
    db.query(query, values, (err, result) => {
        if(err) return res.status(500).json({ error: err.message }); // Da el mensaje si hay un error para la incersion.
        res.status(201).json({ id: result.insertId }); // Muestra la insercion de forma exitosa. y da un ID.
    });
};


const listarCategorias = (req, res) => {
    db.query("SELECT * FROM Catgeorias", (err, rows) => { // Traemos todas las categorias exitentes en las bases de datos.
        if(err) return res.status(500).json({ error: err.message});
        res.status(201).json({ error: err.message })
    });
};

const actualizarCategorias = (req, res) => {
    const {id} = req.params; // 
    const { Imagen_categoria, Nombre_categoria, Descripcion} = req.body;
    const query = 
        `UPDATE Categorias
        SET Imagen_categoria=?, Nombre_categoria=?, Descripcion=? WHERE id=?`; // Actualizamos todos los datos exitentes dependiendo del id 
    const values = [Imagen_categoria, Nombre_categoria, Descripcion, id];

    db.query(query, values, (err, result) =>{
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ error: err.message })
    });
};

const eliminarCategorias = (req, res) => {
    const {id} = req.params;
    db.query("DELETE FROM Categorias WHERE id =?", [id], (err) =>{  // Eliminamos la categoria dependiendo del "ID". 
        if (err) return res.status(500).json({ error: err.message });
        res.json({message: 'La categoria ha sido eliminado exitosamente' });
    });
};

// Exportamos todos lo modulos de las consultas. 
module.exports = {
    crearCategorias,
    listarCategorias,
    actualizarCategorias,
    eliminarCategorias
};
