const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Connected as ${client.user.tag}`)
})

client.login('NjM2NTQ1NzYyMjQyNTkyNzY5.XbFk0w.zAQLiNIQB8HI9HtxAfK3QQYMlB0')