// src/routes/carRoutes.ts
import express from 'express';
import { CarController } from '../controllers/CarController';
import { authenticateToken } from '../middleware/auth';
import { authorizeRoles } from '../middleware/authorize';

const router = express.Router();

router.post('/cars', authenticateToken, authorizeRoles('admin', 'superadmin'), CarController.createCar);
router.get('/cars', authenticateToken, CarController.getAllCars);
router.get('/cars/:id', authenticateToken, CarController.getCarById);
router.put('/cars/:id', authenticateToken, authorizeRoles('admin', 'superadmin'), CarController.updateCar);
router.delete('/cars/:id', authenticateToken, authorizeRoles('admin', 'superadmin'), CarController.deleteCar);

export default router;
