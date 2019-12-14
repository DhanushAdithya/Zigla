const {
    RichEmbed
} = require('discord.js')
const embed = new RichEmbed()

exports.run = async (client, message, args) => {
    const msg = await message.channel.send('🏓 Pinging ...')
    const ping_embed = {
        color: 0x47FF78,
        title: '🏓 Pong !',
        fields: [{
            name: 'Lag Rate      :',
            value: `${Math.floor(msg.createdAt - message.createdAt)}ms`,
            inline: true
        }, {
            name: 'API Lag Rate  :',
            value: `${Math.floor(client.ping)}ms`,
            inline: true
        }],
        timestamp: new Date(),
        thumbnail: {
            url: `${message.author.avatarURL}`
        }
    }
    msg.edit({
            embed: ping_embed
        })
        .catch(err => console.warn(err))
};

exports.help = {
    name: 'ping'
}