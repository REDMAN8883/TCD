const express = require('express');
const router = express.Router();
const categoriasCtrl = require('../controllers/Categorias.controller'); 
const multer = require('multer');

console.log('Archivo de rutas Categorias cargado');

// Multer para poder guardar de buena forma las imagenes.
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb){
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// ruta para poder crear las categorias y guardar las imagenes.
router.post('/', upload.single('imagen'), categoriasCtrl.crearCategorias); 

// ruta para poder enlistar las categorias.
router.get('/', categoriasCtrl.listarCategorias); 

// ruta que donde dependiendo del "id" va actualizar la categoria correspondiente.
router.put('/:id', categoriasCtrl.actualizarCategorias);

 // ruta que donde dependiendo del "id" va eliminar la categoria correspondiente.
router.delete('/:id', categoriasCtrl.eliminarCategorias);

module.exports = router;