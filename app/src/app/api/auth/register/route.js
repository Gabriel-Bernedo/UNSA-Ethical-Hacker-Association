const {NextResponse} = require('next/server');
const bcrypt = require('bcrypt');
const {registerSchema} = require('@/schemas/auth.schema');
const userServices = require("@/services/user.services");

export async function POST(request) {
    const data = await request.json();

    const result = registerSchema.safeParse(data);

    if (!result.success) {
        return NextResponse.json(result.error);
    }

    //confirmar existencia
    const userFound = await userServices.getUserByEmail(result.data.email);

    if (userFound) {
        return NextResponse.json({
            message: "Email already exist"
        }, {
            status: 400
        });
    }

    const hashPassword = await bcrypt.hash(result.data.password, 10);
    const newUser = await userServices.createUser(result, hashPassword);

    return NextResponse.json({message: "User created!"});
    
}