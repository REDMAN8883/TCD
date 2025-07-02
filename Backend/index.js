const express = require('express'); // Conexion al APPI
const app = express(); // Se manda los datos al app.
const cors = require('cors'); // Para manejar mejor las bases de datos"
const path = require('path'); // Decimos que el path va ser "/".

app.use(cors()); 
app.use(express.json()); // Creo que aca la informacion va ser en tipo JSON.
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Aca van las rutas principales 
// app.use('/', proveedorRoutes); <-- EJEMPLO 

/* app.use('/', (req, res) => {
    res.send('API funcionando!')
}); */ // Solo son pruebas de que funciona el APPI

// Corremos todo el backend en el puerto 3000.
app.listen(3000, () => {
    console.log('Servidor backend corriendo en: http://localhost:3000');
})


