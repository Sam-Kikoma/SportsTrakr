import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWT_SECRET } from '$env/static/private';

export const createJWT = (user: { id: string; username: string }) => {
	const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);
	return token;
};

export const comparePasswords = (password: string, hash: string) => {
	return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string) => {
	return bcrypt.hash(password, 5);
};

export async function verifyJWT(token: string) {
	return jwt.verify(token, JWT_SECRET);
}
