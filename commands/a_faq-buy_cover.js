const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  if (message.guild !== null)
  if (message.guild.id === "890247463817072671")
  if (message.channel.id === "902144996147355688" || message.channel.id === "890247978038726677") {
    //message.delete();
    const cover = new Discord.MessageEmbed()
      .setColor("#00a5ff")
      .setTitle("How to Buy Decentralized Crypto Coverage?")
      .setURL("https://docs.brightunion.io/faq/faq-buy-cover")
      .setDescription("You can check out all the covers available at [app.brightunion.io/coverages](https://app.brightunion.io/coverages) and [here is a tutorial video](https://www.youtube.com/watch?v=1D1KIvjuw-Y) for the process.")
    message.channel.send(cover);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cover',
  description: 'Useful command.',
  usage: ''
};
