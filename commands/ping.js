const {
    RichEmbed
} = require('discord.js')
const embed = new RichEmbed()

exports.run = async (client, message, args) => {
    const msg = await message.channel.send('🏓 Pinging ...')
    embed
        .setAuthor(client.user.tag)
        .setColor()
        .setDescription(`🏓 Pong ! 
        Lag rate      : ${Math.floor(msg.createdAt - message.createdAt)}ms
        API lag rate  : ${Math.floor(client.ping)}ms`)
        .setTimestamp()
    msg.edit(embed)
        .catch(err => console.warn(err))
};

exports.help = {
    name: 'ping'
}