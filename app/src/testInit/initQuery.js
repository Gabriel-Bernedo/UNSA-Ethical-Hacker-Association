const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
    await createRole();
    await createAdmin();
    await prisma.$disconnect();
}

main();

//Crear roles
async function createRole() {
    const roles = ["admin", "user"];
    const regs = await prisma.role.findMany();
    if (regs.length == 0) {
        for (let i = 0; i < roles.length; i++) {
            await prisma.role.create({
                data: {
                    id: i,
                    description: roles[i]
                }
            })
        }
    }
}

//Crear administrador Inicial
async function createAdmin() {

    const adminFound = await prisma.user.findFirst({
        where: {
            email: "admin@gmail.com"
        }
    });

    if (!adminFound) {
        const passwordHashed = await bcrypt.hash('admin', 10);
        await prisma.user.create({
            data: {
                name: "admin",
                email: "admin@gmail.com",
                password: passwordHashed,
                roleId: 0
            }
        });
    }
}