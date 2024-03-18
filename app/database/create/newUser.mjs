import { PrismaClient } from '@prisma/client'
import inquirer from 'inquirer'

const prisma = new PrismaClient()

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "Nombre de Usuario: ",
  },
  {
    type: 'input',
    name: 'email',
    message: "Correo Electronico: ",
  },
  {
    type: 'input',
    name: 'password',
    message: "Contraseña: ",
  }
]

async function main() {
  console.log("| Bienvenido a creacion de nuevo usuario para UEHA")
  inquirer.prompt(questions).then(async function(form){
    const user = await prisma.user.create({
      data : form
    })
    console.log("| --------")
    console.log("| El usuario ha sido creado con exito, buena suerte")
    console.log(user)

  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })