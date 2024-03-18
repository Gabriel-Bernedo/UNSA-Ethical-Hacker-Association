
import prisma from "@/database/prisma";
import { NextResponse } from "next/server";

export async function GET(req, params){
  const resource = await prisma.resource.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        name: true
      }
    }
  })

  return NextResponse.json({props: resource})
}