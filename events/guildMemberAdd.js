module.exports = (client, member) => {

    let welcome = member.guild.channels.find(c => c.name === 'welcome')
    welcome.send(`${member.user.tag} has joined **${member.guild}**`)

}