import express from 'express';
import productRoutes from './routes/product.routes';
import usersRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes); // routes products
app.use('/users', usersRoutes); // routes users
export default app;
