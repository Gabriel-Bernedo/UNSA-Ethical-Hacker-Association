import {NextRequest, NextResponse} from "next/server"
import {promises as fs} from 'fs'
import { PrismaClient } from "@prisma/client"


export async function GET (req, params){
  const greeting = "Hello World!!"
  const data = {greeting}
 
    const json = {
        greeting,
        message: "testing my app api :P"
    };
  console.log("------------------------")
    return NextResponse.json(json);
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