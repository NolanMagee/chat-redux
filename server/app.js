const WebSocket = require('ws')
const express = require('express')
const path = require('path')
const http = require('http')

const app = express()

app.use(express.static(path.join(__dirname, '../build')))

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

const port = process.env.PORT || 8989;
console.log("PORT IS: ", port)


const server = http.createServer(app)
server.listen(port)

const wss = new WebSocket.Server({server: server})

//IMPORTANT APPARENTLY:
app.on('upgrade', wss.handleUpgrade);

const users = []

const broadcast = (data, ws) => {
  wss.clients.forEach((client)=>{
    if (client.readyState === WebSocket.OPEN && client !== ws){
      client.send(JSON.stringify(data))
    }
  })
}

wss.on('connection', (ws)=>{
  console.log("USER CONNECTED")
  let index
  ws.on('message', (message)=>{
    const data = JSON.parse(message)
    switch(data.type){
      case 'ADD_USER':{
        index = users.length
        users.push({name: data.name, id: index+1})
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
        break
      }
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author
        }, ws)
        break
      default:
        break
    }
  })

  ws.on('close', ()=>{
    users.splice(index,1)
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })



})
