import { PrismaClient } from '@prisma/client';
// Global variables aren't hot reloaded so this will make sure only one prisma client is instantiated
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV == 'development') {
	global.prisma = prisma;
}

export { prisma };
