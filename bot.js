const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

const prefix = 'z#'

client.on('ready', () => {
    console.log(`Ready! ${client.user.tag} !`);
});

client.on('message', message => {
    var img;

    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => res.data)
        .then(data => {
            img = data.message
        })
        .catch(err => console.warn(err))
    let msg = message.content;
    if (msg === `${prefix}dog`) {
        message.channel.send('', {
            files: [img]
        });
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