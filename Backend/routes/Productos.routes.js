const express = require('express');
const router = express.Router();
const productoCtrl = require('../controllers/Productos.controller');

// Rutas  para crear los productos de paquetes y gramajes.
router.post('/', productoCtrl.crearProductoGramaje);
router.post('/', productoCtrl.crearProductoPaquetes);

// Rutas para enlistar los productos de paquetes y gramajes.
router.get('/', productoCtrl.listarProductosGramaje);
router.get('/', productoCtrl.listarProductosPaquetes);

// Rutas para actualizar los productos de paquetes y gramaje.
router.put('/:id', productoCtrl.actualizarProductosGramaje);
router.put('/:id', productoCtrl.actualizarProductosPaquetes);

// Rutas para eliminar los productos de paquetes y gramaje.
router.delete('/:id', productoCtrl.eliminarProductosGramaje);
router.delete('/:id', productoCtrl.eliminarProductosPaquetes);
