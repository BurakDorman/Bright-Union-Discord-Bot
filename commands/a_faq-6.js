const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  const faq = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("**How does referral program work?**")
    .setDescription("We are excited to announce our new referral program!\nRefer a friend with your referral link and both you and your referral receive $20 worth of $BRIGHT tokens when your friend gets coverage for a premium of $200 or more.\nTo learn more about refferal program please visit this [Medium post](https://brightunion.medium.com/bright-union-referral-program-bfde221c949a).")
  message.channel.send(faq);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'referral',
  description: 'Admin command.',
  usage: ''
};
