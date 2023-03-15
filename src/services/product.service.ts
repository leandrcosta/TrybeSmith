import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

const create = async (product: IProduct) => {
  const newProduct = await productModel.create(product);
  return newProduct;
};

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const productService = { create, getAll };

export default productService;
