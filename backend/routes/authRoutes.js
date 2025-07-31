// routes/authRoutes.js
import express from 'express';
import { registerTienda } from '../controllers/authController.js';

const router = express.Router();

router.post('/api/auth/register/tienda', registerTienda);

export default router;
