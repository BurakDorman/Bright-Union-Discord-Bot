const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => { 
  if (message.guild.id === "890247463817072671") {
    const kategori = args[0]
    if(!kategori) return message.channel.send('Please input a category id!')
    db.set(`destekkg_${message.guild.id}`, kategori)
    message.channel.send('This category has been set as Support Category.')
  }
}

exports.conf = {
  enable: true,
  guildOnly: true,
  permLevel: 2,
  aliases: []
}

exports.help = {
  name: 'support-cat'    
}