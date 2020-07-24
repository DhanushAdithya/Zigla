module.exports = {
    name: 'avatar',
    description: 'Shows the avatar of the user',
    async execute(message, args) {
        try {
            if (message.mentions.users.first()) {
                message.channel.send(message.mentions.users.first().displayAvatarURL())
            } else if (!args[0]) {
                message.channel.send(message.author.displayAvatarURL())
            } else {
                let t = await message.guild.members.fetch(args[0])
                message.channel.send(t.user.displayAvatarURL())
            }
        } catch (e) {
            message.channel.send('Error displaying the avatar')
        }
    }
}