const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Ready! ${client.user.tag} !`);
});

client.on('message', msg => {
    if ((msg.content).toLowerCase() === 'ping') {
        msg.reply('Pong!');
    }

    if (msg.content === 'hi') {
        msg.reply('Hello!');
    }

    if (msg.content === 'avatar') {
        msg.reply(msg.author.avatarURL);
    }
});

client.login(process.env.BOT_TOKEN);