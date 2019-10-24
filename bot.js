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

client.login('NjM2NTQ1NzYyMjQyNTkyNzY5.XbFy1g.6EfROaWGLgKj52phDD3Lu3D5rko')