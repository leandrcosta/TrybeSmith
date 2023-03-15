import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const create = async (user: IUser) => {
  const newUser = await userModel.create(user);
  return newUser;
};

const userService = { create };

export default userService;