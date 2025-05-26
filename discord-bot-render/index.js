const { Client, GatewayIntentBits } = require('discord.js');
const keepAlive = require('./keepAlive');
require('dotenv').config();
const fetch = require('node-fetch');

keepAlive(); // Inicia el servidor Express

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.login(process.env.TOKEN);

// Auto ping cada 4 minutos (opcional si Render ya lo hace)
setInterval(() => {
  fetch('https://TU-APP-RENDER.onrender.com');
}, 4 * 60 * 1000);