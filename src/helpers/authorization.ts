import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'BatatinhadoZambelli';

const createToken = (data: object) =>
  jwt.sign({ data }, secret, { algorithm: 'HS256', expiresIn: '7d' });

const verifyToken = (token: string) => jwt.verify(token, secret);

const althToken = { createToken, verifyToken };
export default althToken;