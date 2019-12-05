//make connection
const socket = io.connect('http://localhost:3000')

//get DOM elements
const output = document.getElementById('output')
const name = document.getElementById('name')
const message = document.getElementById('message')
const send = document.getElementById('send')
const feedback = document.getElementById('feedback')

//emit events
send.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value,
    name: name.value
  })
})

message.addEventListener('keypress', () => {
  socket.emit('typing', name.value)
})

//listen for events
socket.on('chat', (data) => {
  feedback.innerHTML = ``
  output.innerHTML += `<p><strong>${data.name}: </strong>${data.message}</p>`
})

socket.on('typing', (data) => {
  feedback.innerHTML = `<p><em>${data} is typing...</em></p>`
})