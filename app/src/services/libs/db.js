const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis;
let prisma = globalForPrisma.prisma;

if (!prisma) {
  prisma = prismaClientSingleton();
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
}

module.exports = {
  prisma
}

