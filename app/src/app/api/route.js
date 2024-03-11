import {NextRequest, NextResponse} from "next/server"
import {promises as fs} from 'fs'
export async function GET (request){
  const greeting = "Hello World!!"
  const data = {greeting}
 
    const json = {
        greeting,
        message: "testing my app api :P"
    };
  console.log("------------------------")
    return NextResponse.json(json);
}