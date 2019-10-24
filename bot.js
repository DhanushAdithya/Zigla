const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Connected as ${client.user.tag}`)
})

client.login('NjM2NTQ1NzYyMjQyNTkyNzY5.XbFhuA.ZlTYU6kTN8LGp5dotcoXBrAxV7Q')