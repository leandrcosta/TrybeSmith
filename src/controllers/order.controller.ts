import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAll = async (req: Request, res: Response) => {
  const orderProducts = await orderService.getAll();
  res.status(200).json(orderProducts);
};

const orderController = { getAll }; // Dica do profº Zambelli pra melhorar o auto-complit
export default orderController;