import {NextResponse} from "next/server"
import prisma from "@/database/prisma"


export async function GET (req){
  const {searchParams} = new URL(req.url)
  let data
  console.log(searchParams)
  if(searchParams) {
    const user = prisma.user.findUnique({
      where: {
        
      }
    })
    data = await prisma.user.findMany()
  } else {
    data = {msg: "No tiene permisos suficientes"}
  }
  prisma.$disconnect()
  return NextResponse.json(data);
}

export async function POST(req, data){
  const params = data.params
  const prisma = new PrismaClient()
  const user = prisma.user.findUnique({
    where: {
      name: params.name,
      password : params.password,
    }
  })

  return  NextResponse.json(
    {auth: {
      message,
      error,
    }}
  )
}