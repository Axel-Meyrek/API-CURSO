const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middleware/auth');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware global
app.use(cors());
app.use(express.json());

// Logger simple para propósitos educativos
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Ruta base
app.get('/', (req, res) => {
  res.json({
    message: "Bienvenido a la API REST de Música Educativa",
    status: "online",
    auth: "Bearer TOKEN123"
  });
});

// Aplicar autenticación a todas las rutas de la API
app.use('/api', authMiddleware, routes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`Usa Bearer TOKEN123 para autenticación en /api/...`);
});
