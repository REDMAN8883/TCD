// Conexion a la base de datos.
const db = require('../config/db');

// Creamos las Subcategorias.
const crearSubcategorias = (req, res) =>{
    const { Nombre_Subcategoria,  Descripcion, id_Categorias} = req.body;
    const query = 
        `INSERT INTO SubCategorias ( Nombre_Subcategoria,  Descripcion, id_Categorias) 
        VALUES ( ?, ?, ? )`; 
    const values = [Nombre_Subcategoria,  Descripcion, id_Categorias];
 
    db.query(query, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({id: result.insertId });
    });
};

// Listamos todas las subcategorias exitentes 
const listarSubcategorias = (req, res) => {
    db.query("SELECT * FROM SubCategorias", (err, rows) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.status(200).json(rows); // enviar los datos

    });
};

// Actualizamos las subcategorias dependiendo del id.
const actualizarSubcategorias = (req, res) => {
    const { id } = req.params;
    const { nombre_subcategoria, tipo_categoria, descripcion, id_Categorias} = req.body;
    const query = 
        `UPDATE SubCategorias 
        SET Nombre_subcategoria=?, Tipo_categoria=?, Descripcion=?, id_Categorias
        WHERE id=?`;
    const values = [nombre_subcategoria, tipo_categoria, descripcion, id_Categorias, id];

    db.query(query, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ error: err.message });
    });
};

// Eliminamos la subcategorias dependiendo del id.
const eliminarSubcategorias = (req, res) => {
    const {id} = req.params;
    db.query("UPDATE SubCategorias SET activo = 0 WHERE id =?", [id], (err) =>{  // Usamo el soft delete para desactivar y no eliminar. 
        if (err) return res.status(500).json({ error: err.message });
        res.json({message: 'La categoria ha sido desactivada (soft delete).' });
    });
};

// EXportamos lo modulos.
module.exports = {
    crearSubcategorias,
    listarSubcategorias,
    actualizarSubcategorias,
    eliminarSubcategorias
};