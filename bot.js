const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

const embed = new Discord.RichEmbed();

const prefix = 'z#'

client.on('ready', () => {
    console.log(`Ready! ${client.user.tag} !`);
});

client.on('message', message => {
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
                    .setDescription(`Breed:`, l)
            }
        })
        .catch(err => console.warn(err))

    let msg = message.content;
    if (msg === `${prefix}dog`) {
        message.channel.send(embed);
    }
});

client.on('message', msg => {
    if ((msg.content).toLowerCase() === 'ping') {
        msg.reply('Pong!');
    }

    if (msg.content === `${prefix}hi`) {
        msg.reply('Hello!');
    }

    if (msg.content === 'avatar') {
        msg.reply(msg.author.avatarURL);
    }
});

client.login(process.env.BOT_TOKEN);