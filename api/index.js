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

app.use(cors({ origin: '*' }));

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
