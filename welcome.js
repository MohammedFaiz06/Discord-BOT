module.exports = (client) => {
    const channelId = '' // welcome channel
    const targetChannelId = '' // rules and info
  
    client.on('guildMemberAdd', (member) => {
      console.log(member)

      const message = `Welcome to (server name) and thank u soo much for joining 🥳 ❤ <@${
        member.id
      }> Please read ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }
  
