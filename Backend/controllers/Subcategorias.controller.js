// Conexion a la base de datos.
const db = require('../config/db');

// Creamos las Subcategorias.
const crearSubcategorias = (req, res) =>{
    const { nombre_subcategoria, tipo_subcategoria, descripcion, id_Categorias } = req.body;
    const query = 
        `INSERT INTO SubCategorias ( Nombre_subcategoria, tipo_ctageoria, Descripcion, id_Categorias) 
        VALUES ( ?, ?, ? )`; 
    const values = [nombre_subcategoria, tipo_subcategoria, descripcion, id_Categorias];

    db.query(query, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({id: result.insertId });
    });
};

// Listamos todas las subcategorias exitentes 
const listarSubcatgeorias = (req, res) => {
    db.query("SELECT * FROM SubCategorias", (err, rows) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.status(201).json({ error: err.message });
    });
};

// Actualizamos las subcategorias dependiendo del id.
const actualizarSubcategorias = (req, res) => {
    const { id } = req.params;
    const { nombre_subcategoria, tipo_categoria, descripcion, id_Categorias} = req.body;
    const query = 
        `UPDATE SubCategorias 
        SET Nombre_subcategoria=?, Tipo_categoria=?, Descripcion, id_Categorias`;
    const values = [nombre_subcategoria, tipo_categoria, descripcion, id_Categorias, id];

    db.query(query, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ error: err.message });
    });
};

// Eliminamos la subcategorias dependiendo del id.
const eliminarSubcategorias = (req, res) =>{
    const { id } = req.params;
    db.query("DELETE FROM SubCategorias WHERE id =?", [id], (err) => {
        if(err) return res.status(500).json({ error: err.message });
        res.json({message: 'La subcategoria ha sido eliminado exitosamente'});
    });
};

// EXportamos lo modulos.
module.exports = {
    crearSubcategorias,
    listarSubcatgeorias,
    actualizarSubcategorias,
    eliminarSubcategorias
};