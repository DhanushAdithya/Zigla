const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'Zigla, ' || 'z! ';

client.on('ready', () => {
    console.log(`Ready! ${client.user.tag} !`);
});

client.on('message', msg => {
    if ((msg.content).toLowerCase() === 'ping') {
        msg.reply('Pong!');
    }
    if (msg.content === prefix + 'help') {
        msg.reply('Working on it :grin:')
    }
});

client.login(process.env.BOT_TOKEN);