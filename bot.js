const fs = require('fs')
const { Client, Collection } = require('discord.js')
// const filterFactory = require('profanity-light')
const { fetchURL } = require('./assets')

const client = new Client()
client.commands = new Collection()
// const filter = filterFactory.ProfanityFactory({ replacer: _ => _.split('').reverse().join('') })

/* Thanks to 2Toad/Profanity devs for the profanity words */

// fetchURL('https://cdn.jsdelivr.net/gh/2Toad/Profanity/src/words.txt', 'text').then(data => filter.addWords(data.split('\n')))

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log(`Ready player ${client.user.username} as ${client.user.tag}`)
})

client.on('message', message => {
    // if (!message.author.bot && filter.check(message.content)) {
    //     message.channel.send(filter.sanitize(message.content))
    //     message.delete()
    // }

    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()

    if (!client.commands.has(command)) message.react('🤷')

    try {
        client.commands.get(command).execute(message, args)
    } catch (error) {
        console.log(error)
    }

})

client.login(process.env.BOT_TOKEN)