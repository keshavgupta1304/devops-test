
import { prisma } from "@repo/db"

import { WebSocketServer } from "ws"

const wss= new WebSocketServer({port:3001});

wss.on("connection",async(socket)=>{
  await prisma.user.create({
    data:{
      username:Math.random().toString(),
      password:Math.random().toString(),
    }
  })
  socket.send("Hello from server");

})