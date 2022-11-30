let baseUrl = 'ws://localhost:3000/';
let socket = io(baseUrl);

let agentList = document.getElementById('agent-list');
socket.on('join-chat', function (msg) {
  var row = agentList.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = msg;

  let btn = document.createElement('button')
  btn.setAttribute('class', 'btn btn-primary')
  btn.innerText = 'JOIN'
  cell2.append(btn);
});