"use client"

function CreateUserPage() {
    //ruta protegida por el middleware
    return (
        <section className="h-[calc(100vh-7rem)] flex  justify-center items-center">
            <h1 className="text-white text-5xl">Create User only for admin</h1>
        </section>
    )
}

export default CreateUserPage