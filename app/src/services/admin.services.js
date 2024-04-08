const {prisma} = require('@/services/libs/db');

const setRole = async (emailAdmin, roleIdAdmin) => {
    try {
        const adminUpdate = await prisma.user.update({
            where: {
                email: emailAdmin,
            },    
            data: {
                    roleId: roleIdAdmin
            }
            
        });
        return adminUpdate;
    } catch (error) {
        return null;
    }
}

const getAdminActual = async () => {
    try {
        const adminFound = await prisma.user.findFirst({
            where: {
                email: "admin@gmail.com"
            }
        });
        return adminFound;
    } catch (error) {
        return null;
    }
}

module.exports = {
    setRole,
    getAdminActual
}