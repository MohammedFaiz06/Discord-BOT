module.exports = (client) => {
    const channelId = '' //channel in which you want to show the member count
  
    const updateMembers = (guild) => {
      const channel = guild.channels.cache.get(channelId)
      channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }
  
    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))
  
    const guild = client.guilds.cache.get('')  //channel from which you want to get the member list
    updateMembers(guild)
  }
