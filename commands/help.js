const helps = '**Zigla Bot Help**\n\n**Fun Commands**\n\t`z#pup` - Get a puppy\n\t`z#avatar` - Get your Discord avatar with its link\n\t`z#ping` - Pong!\n';
exports.run = (client, message, args) => {
    message.channel.send(helps).catch(err => console.error(err))
}

exports.help = {
    name: 'help'
}