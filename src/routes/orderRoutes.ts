// src/routes/orderRoutes.ts
import express from 'express';
import { OrderController } from '../controllers/OrderController';
import { authenticateToken } from '../middleware/auth';
import { authorizeRoles } from '../middleware/authorize';

const router = express.Router();

router.post('/orders', authenticateToken, authorizeRoles('member'), OrderController.createOrder);
router.get('/orders', authenticateToken, authorizeRoles('admin', 'superadmin'), OrderController.getAllOrders);
router.get('/orders/:id', authenticateToken, authorizeRoles('admin', 'superadmin'), OrderController.getOrderById);
router.put('/orders/:id', authenticateToken, authorizeRoles('admin', 'superadmin'), OrderController.updateOrder);
router.delete('/orders/:id', authenticateToken, authorizeRoles('admin', 'superadmin'), OrderController.deleteOrder);

export default router;
