module.exports = (client) => {
    const channelId = '785751499611439124'
  
    const updateMembers = (guild) => {
      const channel = guild.channels.cache.get(channelId)
      channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }
  
    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))
  
    const guild = client.guilds.cache.get('785396658451251221')
    updateMembers(guild)
  }