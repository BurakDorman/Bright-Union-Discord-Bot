const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  const faq = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("How to buy $BRIGHT?")
    .setDescription("Please check the following video to learn how to buy $BRIGHT on Uniswap: \n [Youtube](https://www.youtube.com/watch?v=QsDpk4T0TII&t=9s) \n\n $BRIGHT also available on MEXC. Here is the link to buy on MEXC: \n [MEXC](https://www.mexc.com/exchange/BRIGHT_USDT)")
    .addField('CoinGecko Link', '[CoinGecko](https://www.coingecko.com/tr/coins/bright-union)', true)
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
  name: 'faq-how_to_buy',
  description: 'Admin command.',
  usage: ''
};
