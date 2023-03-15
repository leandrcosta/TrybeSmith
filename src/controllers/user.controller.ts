import { Request, Response } from 'express';
import althToken from '../helpers/authorization';
import userService from '../services/user.services';

const create = async (req: Request, res: Response) => {
  /* const { username, vocation, level, password } = req.body; */ // mesma função da linha 7
  const newUser = await userService.create(req.body);
  const { password, ...userWithoutPassword } = newUser; // não exibir senha no token
  const token = althToken.createToken(userWithoutPassword);
  return res.status(201).json({ token });
};

const userController = { create };

export default userController;