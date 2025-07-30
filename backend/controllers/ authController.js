// controllers/authController.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

export const registerTienda = async (req, res) => {
  try {
    const {
      email,
      password,
      nombre,
      nombreComercial,
      cuit,
      direccion,
      localidad
    } = req.body;

    // Validar existencia previa
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ error: 'Usuario ya registrado.' });

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario base
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'TIENDA',
        tienda: {
          create: {
            nombre,
            nombreComercial,
            cuit,
            direccion,
            localidad
          }
        }
      },
      include: { tienda: true }
    });

    // Generar JWT
    const token = jwt.sign(
      { id: newUser.id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({ message: 'Tienda registrada', token, user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar la tienda.' });
  }
};
