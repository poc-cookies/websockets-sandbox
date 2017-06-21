const static = require('node-static');
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const staticServer = new static.Server('.');
const server = http.createServer((req, res) => {
  staticServer.serve(req, res);
}).listen(port);



const WebSocket = require('ws');

const wsPort = 8081;
const wss = new WebSocket.Server({port: wsPort});

wss.on('connection', (ws) => {

  //let id = Math.random();
  console.log('Connection opened.');

  ws.on('message', (msg) => {
    console.log(`received: ${msg}`);

    wss.clients.forEach((client) => {
      if (client.readyState !== WebSocket.OPEN) return;
      client.send(msg);
    });
  });

  ws.on('close', () => {
    console.log('Connection closed.');
  });
});
