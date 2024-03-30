const {prisma} = require('@/libs/db');

const getUserByEmail = async (data) => {
    try {
        const userFound = await prisma.user.findUnique({
            where: {
                email: data
            }
        });
        return userFound;
    } catch (error) {
        return null;
    }
}

const getUserById = async (data) => {
    try {
        const userFound = await prisma.user.findUnique({
            where: {
                id: data
            }
        });
        return userFound;
    } catch (error) {
        return null;
    }
}

const createUser = async (result, hashPassword) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                name: result.data.name,
                email: result.data.email,
                password: hashPassword,
                roleId: 1
            }
        });
        return newUser;
    } catch (error) {
        return null;
    }
}

module.exports = {
    getUserByEmail,
    getUserById,
    createUser
}