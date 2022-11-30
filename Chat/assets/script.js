let baseUrl = 'http://localhost:3000/v1';
let username = prompt('Enter your username:')
let userdata = {}

// set user data 
async function addUser(username){
  return await fetch(`${baseUrl}/join?username=${username}`, {
    method: 'POST', 
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
  })
}
if (username) {
  userdata = addUser(username)
  let usernameEl = document.getElementById('username');
  usernameEl.innerHTML = username;
  console.log(userdata);
} else {
  window.location.reload();
}

// let socket = io(baseUrl);

// let form = document.getElementById('form');
// let input = document.getElementById('input');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   if (input.value) {
//     socket.emit('chat message', input.value);
//     input.value = '';
//   }
// });

// socket.on('chat message', function (msg) {
//   var item = document.createElement('li');
//   item.textContent = msg;
//   messages.appendChild(item);
//   window.scrollTo(0, document.body.scrollHeight);
// });