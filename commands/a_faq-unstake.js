const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  if (message.guild !== null)
  if (message.guild.id === "890247463817072671")
  if (message.channel.id === "902144996147355688" || message.channel.id === "890247978038726677") {
    //message.delete();
    const faq = new Discord.MessageEmbed()
      .setColor("#00a5ff")
      .setTitle("How to unstake?")
      .setDescription("There is a 7-day cooldown period if you want to unstake your $BRIGHT tokens.\n Then, You will have 2 days to withdraw your tokens. If you do not withdraw them in a given time, $BRIGHT tokens will go to the staking pool automatically.")
    message.channel.send(faq);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unstake',
  description: 'Common command.',
  usage: ''
};
