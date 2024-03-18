import {NextResponse} from "next/server"
import prisma from "@/database/prisma"


export async function GET (req){
  const {searchParams} = new URL(req.url)
  let data
  console.log(searchParams)
  if(searchParams) {
    const user = await prisma.user.findMany()
    data = await prisma.user.findMany()
  } else {
    data = {msg: "No tiene permisos suficientes"}
  }
  return NextResponse.json(data);
}

export async function POST(req){
  const {searchParams} = new URL(req.url)
  console.log(req.body[0] == undefined)
  console.log(await req.json?.())
  // let data = await req.json()
  // console.log(data)
  return NextResponse.json({})
  // const params = data.params
  // const prisma = new PrismaClient()
  // const user = prisma.user.findUnique({
  //   where: {>>>>>>> backend
  //     name: params.name,
  //     password : params.password,
  //   }
  // })

  // return  NextResponse.json(
  //   {auth: {
  //     message,
  //     error,
  //   }}
  // )
}