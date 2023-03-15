import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRoutes = Router();

productRoutes.post('/', productController.create); // Create new product
productRoutes.get('/', productController.getAll); // Get all products

export default productRoutes;