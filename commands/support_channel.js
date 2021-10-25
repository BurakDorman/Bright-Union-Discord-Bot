const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {
  if (message.guild.id === "890247463817072671") {
    const kanal = message.mentions.channels.first() || args.slice(0).join(' ')
    if(!kanal) return message.channel.send('Please tag a channel!')
    db.set(`destekkanal_${message.guild.id}`, kanal.id)
    message.channel.send('This channel has been set for free usage of !ticket command.')
  }
}

exports.conf = {
  enable: true,
  guildOnly: true,
  permLevel: 2,
  aliases: []
}

exports.help = {
  name: 'support-ch'    
}