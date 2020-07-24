const {
    fetchURL
} = require('../assets')

module.exports = {
    name: 'pup',
    description: 'Gives you a puppy image',
    execute(message, args) {
        fetchURL('https://dog.ceo/api/breeds/image/random', 'json').then(data => message.channel.send(data.message))
    }
}