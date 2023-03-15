import { Router } from 'express';
import userController from '../controllers/user.controller';

const usersRoutes = Router();

usersRoutes.post('/', userController.create); // route create user

export default usersRoutes; 