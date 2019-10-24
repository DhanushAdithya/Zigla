const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Ready! ${client.user.tag}`);
});

client.login('NjM2NTQ1NzYyMjQyNTkyNzY5.XbF5Jg.hmk5JOhujeeUrY3OicxleNRJlSk');