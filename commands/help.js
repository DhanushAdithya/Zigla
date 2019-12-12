const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {
    embed
        .setColor(0x000000)
        .setAuthor(message.author.tag)
        .setThumbnail(message.author.avatarURL)
        .setDescription('\n**Fun Commands**\n`**z#pup**` - Get a puppy\n`**z#avatar**` - Get your Discord avatar with its link\n`**z#ping**` - Pong!\n')
    message.channel.send(embed).catch(err => console.error(err))
}

exports.help = {
    name: 'help'
}