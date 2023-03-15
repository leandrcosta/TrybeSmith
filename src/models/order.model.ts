import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';
// https://universodosdados.com/tag/json_arrayagg/
// https://docs.oracle.com/en/database/oracle/oracle-database/18/sqlrf/JSON_ARRAYAGG.html#GUID-6D56077D-78DE-4CC0-9498-225DDC42E054
// --> JSON_ARRAYAGG agupa os IDs dos produtos associados a cada pedido em um unico array 
const getAll = async (): Promise<IOrder[]> => {
  const [rows] = await connection.execute<IOrder[] & RowDataPacket[]>(`
  SELECT O.id, O.user_id AS userId,
  JSON_ARRAYAGG(P.id) AS productsIds
  FROM Trybesmith.orders AS O
  INNER JOIN Trybesmith.products AS P
  ON O.id = P.order_id
  GROUP BY O.id;`);
  console.log(rows);
  return rows;
};
const orderModel = { getAll };
export default orderModel;