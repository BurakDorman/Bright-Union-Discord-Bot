const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  const faq = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("**Bright Union Refferal Program**")
    .setDescription("We’re excited to announce our new referral program! \n Refer a friend with your refferal link and both you and your refferal receive $20 worth of BRIGHT tokens when your friend gets coverage for a preminium of $200 or more.\n To learn more about refferal program please visit the following medium link: \n [Medium](https://brightunion.medium.com/bright-union-referral-program-bfde221c949a)")
   
    .addField('CoinMarketCap Link:', '[CoinMarketCap](https://coinmarketcap.com/currencies/bright-union/)', true)
  message.channel.send(faq);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'refer',
  description: 'Admin command.',
  usage: ''
};
