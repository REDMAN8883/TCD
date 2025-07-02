const express = require('express');
const router = express.Router();
const subcategoriaCtrl = require('../controllers/Subcategorias.controller');

router.get('/', subcategoriaCtrl.listarSubcatgeorias); // ruta para listar
router.post('/', subcategoriaCtrl.crearSubcategorias); // ruta para crear
router.put('/:id', subcategoriaCtrl.actualizarSubcategorias); // ruta para actualizar
router.delete('/:id', subcategoriaCtrl.eliminarSubcategorias); // ruta para eliminar

module.exports = router;