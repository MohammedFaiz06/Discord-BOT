module.exports = (client) => {
    const channelId = '785396659442024469' // welcome channel
    const targetChannelId = '785396659442024470' // rules and info
  
    client.on('guildMemberAdd', (member) => {
      console.log(member)

      const message = `Welcome to Topper Production Here and thank u soo much for joining 🥳 ❤ <@${
        member.id
      }> Please read ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }
  