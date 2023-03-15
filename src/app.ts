import express from 'express';
import productRoutes from './routes/product.routes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes); // routes products

export default app;
