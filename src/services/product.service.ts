import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

const create = async (product: IProduct) => {
  const newProduct = await productModel.create(product);
  return newProduct;
};

const productService = { create };

export default productService;
