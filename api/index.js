require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const logger = require('./utils/logger');
const errorHandler = require('./middlewares/errorHandler');
const rateLimiter = require('./middlewares/rateLimiter');
const routes = require('./routes');

const app = express();

// Middlewares globales
app.use(helmet());
//app.use(cors());
const allowedDomains = ['http://localhost:3000', 'https://netconnow.com', 'https://www.netconnow.com'];

app.use(cors({
  origin: (origin, callback) => {
    // Si no hay origen en la solicitud o el origen está en la lista permitida
    if (!origin || allowedDomains.includes(origin)) {
      callback(null, true); // Permitir el acceso
    } else {
      callback(new Error(`No permitido por CORS NAS ${origin}`)); // Denegar el acceso
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
  credentials: true // Permitir cookies o autenticación
}));

app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter);

// Rutas
app.use('/api', routes);

// Middleware de manejo de errores
app.use(errorHandler);

// Listen (solo para desarrollo local)
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
