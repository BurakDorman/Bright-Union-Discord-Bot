const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {
  if (message.guild.id === "890247463817072671") {
    const roletiketle = message.mentions.roles.first() || args.slice(0).join(' ')
    if(!roletiketle) return message.channel.send('Please tag a role!')
    db.set(`destekrol_${message.guild.id}`, roletiketle.id)
    message.channel.send('This role has been set as Support Team.')
  }
}

exports.conf = {
  enable: true,
  guildOnly: true,
  permLevel: 2,
  aliases: []
}

exports.help = {
  name: 'support-role'    
}