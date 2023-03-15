import { Router } from 'express';
import orderController from '../controllers/order.controller';

const orderRoutes = Router();
orderRoutes.get('/', orderController.getAll); // Get all orders

export default orderRoutes;