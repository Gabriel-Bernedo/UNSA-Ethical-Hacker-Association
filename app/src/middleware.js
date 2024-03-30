import {withAuth} from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        let condicion = (req.nextUrl.pathname.startsWith("/createUser") || req.nextUrl.pathname.startsWith("/updateAdmin"));
        if(condicion && req.nextauth.token.role != 0) {
            return NextResponse.json({
                message: "You are not authorized for this action"
            }, {
                status: 403
            })
        }
    },
    {
        callbacks: {
            authorized: ({token}) => !!token,
        },
    }
)

export const config = {
    matcher: ["/dashboard/createUser/:path*", "/dashboard/updateAdmin/:path*"], //cambiar ruta, dentro de dashboard debe ir el formulario para registrar usuarios
}