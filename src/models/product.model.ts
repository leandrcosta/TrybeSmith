import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

const create = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name,amount) VALUES(?,?)',
    [name, amount],
  );
  return { id: insertId, name, amount }; // Return  object ( {id, name, amount} )
};

const productModel = { create }; // Dica do Profº Zambelli pra facilitar as importações

export default productModel;
