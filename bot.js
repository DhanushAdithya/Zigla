const Discord = require('discord.js');
const client = new Discord.Client();

console.log(`${client.user.email}`)

client.on('ready', () => {
    console.log(`Ready! ${client.user.tag}`);
});

client.on('message', msg => {
    if ((msg.content).toLowerCase() === 'ping') {
        msg.reply('Pong!');
    }
});

client.login(process.env.BOT_TOKEN);