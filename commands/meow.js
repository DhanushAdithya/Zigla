const Discord = require('discord.js');
const axios = require('axios');

const embed = new Discord.RichEmbed();    

exports.run = (client, message, args) => {

    axios.get('https://aws.random.cat/meow')
        .then(res => res.data)
        .then(data => embed.setColor(0x00AE86).setImage(data.file))
        .catch(err => console.warn(err))

    message.channel.send(embed).catch(err => console.error(err))
};

exports.help = {
    name: 'meow'
}