import { adminSchema } from '@/services/database/schemas/admin.schema';
const {NextResponse} = require('next/server');
const adminServices = require("@/services/admin.services");

export async function POST(request) {
    const data = await request.json();

    const result = adminSchema.safeParse(data);

    if (!result.success) {
        return NextResponse.json(result.error);
    }
    const oldAdmin = await adminServices.getAdminActual();
    console.log('OLD:', oldAdmin);
    const removeAdmin = await adminServices.setRole(oldAdmin.email, 1); 
    console.log("OLD ADMIN UPDATE: ", removeAdmin);
    const adminUpdate = await adminServices.setRole(result.data.email, result.data.roleId);
    console.log("NEW ADMIN UPDATE: ", adminUpdate);

    if (!adminUpdate) {
        return NextResponse.json({
            message: "Internal server error"
        }, {
            status: 500
        });
    }

    return NextResponse.json({message: "Admin Update!"});
    
}