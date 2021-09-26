/*
 _____ _                      
|_   _| |                     
  | | | |__   ___  _ __ _ __  
  | | | '_ \ / _ \| '__| '_ \ 
  | | | | | | (_) | |  | | | |
  \_/ |_| |_|\___/|_|  |_| |_|
                              */

// ██████ Integrations █████████████████████████████████████████████████████████

const API = require("./Structures/API");
const Thorn = require("./Structures/Thorn");

// ██████ Initialization ███████████████████████████████████████████████████████

const client = new Thorn();
client.start();

new API(client).start(8080);

for (const event of [
  "rejectionHandler",
  "unhandledRejection",
  "uncaughtException",
])
  process.on(event, (err) => console.error(err));
