import { NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function GET(req){
  const {searchParams} = new URL(req.url)
  let type = searchParams.get("type"), data
  switch(type){
    case 1, 2, 3:
      data = await prisma.resource.findMany({
        where: {
          visible: true,
          type: type
        }
      })
      break
    default:
      data = await prisma.resource.findMany({
        where: {
          visible: true
        }
      })
  }

  const feed = await prisma.resource.findMany({
    where: {
      type: 2
    }
  })  

  console.log(req)
  const res = {
    props: { data },
    validate: 10
  }
  return NextResponse.json(res)
}