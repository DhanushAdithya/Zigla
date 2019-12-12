exports.run = (client, message, args) => {
    message.reply('Pong!').catch(err => console.error(err))
};

exports.help = {
    name: 'ping'
}