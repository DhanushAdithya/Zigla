const fetch = require('node-fetch')
const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    fetchURL: async (url, mode) => {
        const res = await fetch(url)
        return await res[mode]()
    },
    Embed: (obj) => {
        return new MessageEmbed(obj).setThumbnail(obj.thumbnail)
    }
}