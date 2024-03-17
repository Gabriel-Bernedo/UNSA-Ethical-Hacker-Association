import prisma from "../prisma";

const errorsMsg = {
  none: "",
  user: {
    name: "User not Found",
    password: "Password Incorrect",
    token: "User not Logged In Properly",
    auth: "User not have permissions"
  },
  text: {
    password: "Password Invalid",
  }
}

async function getUser(params){
  const user = await prisma.user.findUnique({
    where: {
      name: params.get("name")
    }
  })
  return {user}
}

async function getUserAuth(params){
  const {user} = getUser(params)
  let loggedIn = false, err = errorsMsg.none, auth = []

  if (user){
    loggedIn = user.token == params.get("token")
  } else {
    err = errorsMsg.user.name
  }

  if(loggedIn){

  } else {
    err = errorsMsg.user.token
  }

  return {err, loggedIn, user}
}

export const authUser = async function(params){
  const {user} = getUser(params)
  let loggedIn = false, err = errorsMsg.none
  if (user){
    authenticated = user.token == params.get("token")
  } else {
    err = errorsMsg.user.name
  }

  if (loggedIn){

  } else {
    err = errorsMsg.user.token
  }
  return {err, loggedIn, user, enabled}
}

export const logInUser = async function(params){
  let {user} = getUser(params)
  let err = errorsMsg.none, loggedIn = false
  
  if(user){
    loggedIn = user.password == params.get("password")
  } else {
    err = errorsMsg.user.name
  }
  
  if (loggedIn){
    user = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        token: generateToken(id)
      }
    }) 
  } else {
    err = errorsMsg.user.password
  }

  return {err, loggedIn, user}
}

function generateToken(id){
  const date = new Date()
  let day = date.getDate(),
  month = date.getMonth() + 1,
  year = date.getFullYear()
  return `${day}-${month}-${year}-${id}`
}



