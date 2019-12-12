exports.run = (client, message, args) => {
    message.channel.send('Pong!').catch(err => {
        console.error(err);

    })
};

exports.help = {
    name: 'ping'
}