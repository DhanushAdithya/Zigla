const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const client = new Discord.Client();

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