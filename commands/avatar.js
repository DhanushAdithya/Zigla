const Discord = require('discord.js');

const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {
    embed.setColor(0x00AE86).setImage(message.author.avatarURL)
    message.reply(embed).catch(err => console.error(err))
};

exports.help = {
    name: 'avatar'
}