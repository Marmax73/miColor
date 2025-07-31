import authRoutes from './routes/authRoutes.js';
const express = require('express');

const app = express();
app.use(express.json());
app.use('/', authRoutes);
