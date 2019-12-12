const Discord = require('discord.js');
const axios = require('axios');
const fs = require('fs');
const Enmap = require('enmap');
const client = new Discord.Client();

const embed = new Discord.RichEmbed();

const prefix = 'z#';

client.commands = new Enmap();

client.on('ready', () => {
    console.log(`Ready! ${client.user.tag} !`);
});

client.on('message', message => {

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;

    cmd.run(client, message, args);

    // axios.get('https://dog.ceo/api/breeds/image/random')
    //     .then(res => res.data)
    //     .then(data => {
    //         l = (data.message).split('/')
    //         l = l[4]
    //         if (l.includes('-')) {
    //             l = l.split('-').map(element => element.charAt(0).toUpperCase() + element.slice(1)).join(' ')
    //             embed
    //                 .setColor(0x00AE86)
    //                 .setImage(data.message)
    //                 .setDescription(`**Breed**: ${l}`)
    //         } else {
    //             l = l.charAt(0).toUpperCase() + l.slice(1)
    //             embed
    //                 .setColor(0x00AE86)
    //                 .setImage(data.message)
    //                 .setDescription(`**Breed**: ${l}`)
    //         }
    //     })
    //     .catch(err => console.warn(err))

    // let msg = message.content;
    // if (msg === `${prefix}dog`) {
    //     message.channel.send(embed);
    // }
});

fs.readdir('./commands/', async (err, files) => {
    if (err) return console.error(err);

    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`Loaded cmd : ${cmdName}`);
        client.commands.set(cmdName, props);

    });
})

client.login(process.env.BOT_TOKEN);