import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const getAll = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(
    `SELECT id, name, amount, order_id as orderId
     FROM Trybesmith.products;`,
  );
  return rows;
};

const productModel = { create, getAll }; // Dica do Profº Zambelli pra facilitar as importações

export default productModel;
