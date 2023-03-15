import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRoutes = Router();

productRoutes.post('/', productController.create); // Create new product

export default productRoutes;