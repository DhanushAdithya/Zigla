const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login('NjM2NTQ1NzYyMjQyNTkyNzY5.XbFyNQ.uWe4N-qrbW3BSRZtTOoUC83Gbz0')