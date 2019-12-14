const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const client = new Discord.Client();

client.commands = new Enmap();

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);

    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded evt : ${evtName}`);
        client.on(evtName, evt.bind(null, client));

    });
})

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