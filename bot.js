const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Ready! ${client.user.tag}`);
});

client.login('NjM2NTQ1NzYyMjQyNTkyNzY5.XbF5lg.JvywihcgXnb22k8aOmypel__vYU');