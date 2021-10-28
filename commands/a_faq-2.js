const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  if (message.guild !== null)
  if (message.guild.id === "890247463817072671")
  if (message.channel.id === "902144996147355688" || message.channel.id === "890247978038726677") {
    message.delete();
    const faq = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("How to buy $BRIGHT?")
      .setDescription("<:uniswap:903294803364687923> Please check [this video](https://www.youtube.com/watch?v=QsDpk4T0TII&t=9s) to learn how to buy $BRIGHT on Uniswap:\n\n<:mexc:903294303537881130> [$BRIGHT](https://www.coingecko.com/tr/coins/bright-union) is also available on [MEXC](https://www.mexc.com/exchange/BRIGHT_USDT).\n \n<:bright:903289521381187635> For price tracking and more:")
      .addField('CoinGecko', '[Token info and price.](https://www.coingecko.com/tr/coins/bright-union)', true)
      .addField('CoinMarketCap', '[Token info and price.](https://coinmarketcap.com/currencies/bright-union/)', true)
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
  name: 'buy',
  description: 'Useful command.',
  usage: ''
};
