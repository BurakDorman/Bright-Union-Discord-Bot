const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  const faq = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription("How to Buy Decentralized Crypto Coverage?  \n Check out all the covers available at app.brightunion.io/coverages and here is a tutorial for the process: \n  https://www.youtube.com/watch?v=1D1KIvjuw-Y")
  message.channel.send(faq);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'buy_coverage',
  description: 'Admin command.',
  usage: ''
};
