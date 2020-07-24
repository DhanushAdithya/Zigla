const {
    fetchURL
} = require('../assets')

module.exports = {
    name: 'meow',
    description: 'Gives you a kitty image',
    execute(message, args) {
        fetchURL('https://api.thecatapi.com/v1/images/search?format=json', 'json').then(data => message.channel.send(data[0].url))
    }
}