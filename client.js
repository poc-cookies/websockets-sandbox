const ws = new WebSocket('ws://localhost:8081');

document.forms.publish.onsubmit = function () {
  let outMsg = this.message.value;
  ws.send(outMsg);
  return false;
};

const showMsg = (msg) => {
  let msgElem = document.createElement('div');
  msgElem.appendChild(document.createTextNode(msg));
  document.getElementById('subscribe').appendChild(msgElem);
};

ws.onmessage = (event) => {
  let inMsg = event.data;
  showMsg(inMsg);
};
