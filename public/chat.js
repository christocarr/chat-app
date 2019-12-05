//make connection
const socket = io.connect('http://localhost:3000')

//get DOM elements
const output = document.getElementById('output')
const name = document.getElementById('name')
const message = document.getElementById('message')
const send = document.getElementById('send')

//emit events
send.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.nodeValue,
    name: name.value
  })
})

