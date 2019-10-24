const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log(`Ready! ${client.user.tag}`);
});

client.login('NjM2NTQ1NzYyMjQyNTkyNzY5.XbF35A.ihH5XBopBK3Vk530x_BCQ3mx5_I');