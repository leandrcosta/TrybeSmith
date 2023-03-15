import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

const create = async (user: IUser): Promise<IUser> => {
  const { username, vocation, level, password } = user;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?,?,?,?)',
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
};

const userModel = { create };

export default userModel;