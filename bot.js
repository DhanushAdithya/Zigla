const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Ready! ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);