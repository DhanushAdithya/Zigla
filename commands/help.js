const helps = `**Fun Commands**
z#pup - Get a puppy
z#avatar - Get your Discord avatar with its link
z#ping - Pong!
`

exports.run = (client, message, args) => {
    message.channel.send(helps).catch(err => console.error(err))
}

exports.help = {
    name: 'help'
}