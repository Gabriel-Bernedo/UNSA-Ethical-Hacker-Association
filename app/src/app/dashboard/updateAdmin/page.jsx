"use client"

function UpdateAdminPage() { //una vez que se relaize la actualizacion debe automaticamente terminar la sesion del usuario actual con el signout
    //ruta protegida por el middleware
    return (
        <section className="h-[calc(100vh-7rem)] flex  justify-center items-center">
            <h1 className="text-white text-5xl">Form to update admin, only admin can do this</h1>
        </section>
    )
}

export default UpdateAdminPage