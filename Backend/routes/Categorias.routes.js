const express = require('express');
const router = express.Router();
const categoriasCtrl = require('../controllers/Categorias.controller'); 

// ruta para poder crear las categorias.
router.post('/', categoriasCtrl.crearCategorias); 

// ruta para poder enlistar las categorias.
router.get('/', categoriasCtrl.listarCategorias); 

// ruta que donde dependiendo del "id" va actualizar la categoria correspondiente.
router.put('/:id', categoriasCtrl.actualizarCategorias);

 // ruta que donde dependiendo del "id" va eliminar la categoria correspondiente.
router.delete('/:id', categoriasCtrl.eliminarCategorias);

module.exports = router;