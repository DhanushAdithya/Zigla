const cheerio = require('cheerio')
const {
    fetchURL,
    Embed
} = require('../assets')

module.exports = {
    name: 'github',
    description: 'Show your Guthub stats',
    execute(message, args) {
        fetchURL(`https://github.com/${args[0]}`, 'text')
            .then(data => {
                const $ = cheerio.load(data)
                try {
                    message.channel.send(
                        Embed({
                            title: $('.p-name').text(),
                            description: $('.p-nickname').text(),
                            thumbnail: $('img.width-full').attr('src'),
                            color: '#000',
                            fields: [{
                                name: 'Repositories',
                                value: $('.box-shadow-none > nav:nth-child(1) > a:nth-child(2) > span:nth-child(2)').text()
                            }, {
                                name: 'Followers',
                                value: $('a.link-gray:nth-child(1) > span:nth-child(2)').text() || '0',
                                inline: true
                            }, {
                                name: 'Following',
                                value: $('span.text-gray-dark:nth-child(1)').text() || '0',
                                inline: true
                            }]
                        })
                    )
                } catch (e) {
                    message.channel.send(
                        Embed({
                            title: `User with ${args[0]} as username not found`,
                            color: 0xff0000,
                            description: 'Try another name instead'
                        })
                    )
                }
            })
    },
}