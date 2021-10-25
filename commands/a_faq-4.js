const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  const faq = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("**Unstake Procedure: **")

    .setDescription("\n\n There is a 7-day cool-down period if you want to unstake your $BRIGHT tokens.\n Then, You will have 2 days to withdraw your tokens. If you do not withdraw them in a given time, $BRIGHT tokens will go to the staking pool automatically.")
 
  message.channel.send(faq);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'unstake',
  description: 'Admin command.',
  usage: ''
};
