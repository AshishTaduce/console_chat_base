const socket = require('socket.io-client')('http://localhost:3000');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin,  output: process.stdout });

// write your code here
let username;
let eventName = 'simple chat message';
rl.question("Enter your name", (name) => {
    username = name;
    console.log("Successfully connected to server.");
    socket.on(
        eventName, (data) => {
            console.log(data);
});
});

rl.addListener('line', (msg) => {
    socket.emit(eventName, username + ' said : ' + msg);
})