import {NextResponse} from "next/server"

const BASE_URL = "http:localhost:3000" 

function route(endpoint){
  return `${BASE_URL}${endpoint}`
}

export async function GET (){
  const routes = {
    user : {
      URL: route("/user"),
      methods: [
        "GET", 
        "POST",
      ]
    },
    resource: {
      URL: route("/resource"),
      methods: [
        "GET",
        "POST"
      ]
    }
  }
  return NextResponse.json(routes);
}