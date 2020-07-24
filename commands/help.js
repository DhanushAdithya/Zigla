const fs = require('fs')

module.exports = {
    name: 'help',
    description: 'Help command',
    execute(message, args) {
        const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js') && file !== 'help.js')
        message.channel.send(`[${files.join(', ')}]`)
    }
}