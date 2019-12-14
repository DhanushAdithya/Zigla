const Discord = require('discord.js');
const axios = require('axios');

const embed = new Discord.RichEmbed();

axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => res.data)
    .then(data => {
        l = (data.message).split('/') 
        l = l[4]
        if (l.includes('-')) {
            l = l.split('-').map(element => element.charAt(0).toUpperCase() + element.slice(1)).join(' ')
            embed
                .setColor(0x00AE86)
                .setImage(data.message)
                .setDescription(`**Breed**: ${l}`)
        } else {
            l = l.charAt(0).toUpperCase() + l.slice(1)
            embed
                .setColor(0x00AE86)
                .setImage(data.message)
                .setDescription(`**Breed**: ${l}`)
        }
    })
    .catch(err => console.warn(err))

exports.run = (client, message, args) => {
    message.channel.send(embed).catch(err => console.error(err))
};

exports.help = {
    name: 'pup'
}