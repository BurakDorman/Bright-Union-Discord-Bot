const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  if (message.guild !== null)
  if (message.guild.id === "890247463817072671")
  if (message.channel.id === "902144996147355688" || message.channel.id === "890247978038726677") {
    const buy = new Discord.MessageEmbed()
      .setColor("#00a5ff")
      .setTitle("How to buy $BRIGHT?")
      .setURL("https://docs.brightunion.io/how-to-guide/buy-bright")
      .setDescription("<:uniswap:903294803364687923> Please check [this video](https://www.youtube.com/watch?v=QsDpk4T0TII&t=9s) to learn how to buy [$BRIGHT](https://coinmarketcap.com/currencies/bright-union/) on Uniswap.\n\n<:mexc:903294303537881130> [$BRIGHT](https://www.coingecko.com/coins/bright-union) is also available on [MEXC](https://www.mexc.com/exchange/BRIGHT_USDT).\n \n<:bright:903289521381187635> For price tracking and more:")
      .addField('CoinGecko', '[Add to your favourites.](https://www.coingecko.com/coins/bright-union)', true)
      .addField('CoinMarketCap', '[Add to your watchlist.](https://coinmarketcap.com/currencies/bright-union/)', true)
    message.channel.send(buy);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'buy bright',
  description: 'Useful command.',
  usage: ''
};
