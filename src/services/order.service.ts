import { IOrder } from '../interfaces';
import orderModel from '../models/order.model';

const getAll = async (): Promise<IOrder[]> => {
  const orderProducts = await orderModel.getAll();
  return orderProducts;
};

const orderService = { getAll };
export default orderService;