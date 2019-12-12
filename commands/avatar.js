exports.run = (client, message, args) => {
    message.reply(message.author.avatarURL).catch(err => console.error(err))
};

exports.help = {
    name: 'avatar'
}