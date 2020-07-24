const { Embed } = require('../assets')

module.exports = {
    name: 'ping',
    description: 'Pong!',
    async execute(message, args) {
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
                value: `${Math.floor(message.createdAt)}ms`,
                inline: true
            }],
            timestamp: new Date(),
            thumbnail: `${message.author.displayAvatarURL()}`
        }
        msg.delete()
        message.channel.send(Embed(ping_embed))
    }
}