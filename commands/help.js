const helps = '**Zigla Bot Help**\n**Fun Commands**\n**`z#pup`** - Get a puppy\n**`z#avatar`** - Get your Discord avatar with its link\n**`z#ping`** - Pong!\n';
exports.run = (client, message, args) => {
    message.channel.send(helps).catch(err => console.error(err))
}

exports.help = {
    name: 'help'
}