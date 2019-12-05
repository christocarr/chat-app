const express = require('express')
const socket = require('socket.io')

//App setup
const app = express()
const server = app.listen(3000, () => {
  console.log('Listening on port 3000')
})

//static files
app.use(express.static('public'))

//socket setup
const io = socket(server)

io.on('connection', (socket) => {
  console.log('Socket connection', socket.id)
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data)
  })
  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data)
  })
})