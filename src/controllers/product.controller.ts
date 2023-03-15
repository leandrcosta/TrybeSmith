import { Request, Response } from 'express';
import productService from '../services/product.service';

const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const newProduct = await productService.create({ name, amount });
  return res.status(201).json(newProduct);
};

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const productController = { create, getAll };

export default productController;
