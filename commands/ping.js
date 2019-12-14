exports.run = (client, message, args) => {
    const msg = await message.channel.send('🏓 Pinging ...')
    msg
        .edit(`🏓 Pong ! 
        Lag rate      : ${Math.floor(msg.createdAt - message.createdAt)}ms
        API lag rate  : ${client.ping}ms`)
        .catch(err => console.error(err))
};

exports.help = {
    name: 'ping'
}