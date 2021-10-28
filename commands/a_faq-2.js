const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  if (message.guild !== null)
  if (message.guild.id === "890247463817072671")
  let bot = "902144996147355688"
  let faq = "890247978038726677"
  if (message.channel.id === bot || message.channel.id === faq) {
    message.delete();
    const faq = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**How to buy <:bright:903289521381187635>$BRIGHT?**")
      .setDescription("Please check [this video](https://www.youtube.com/watch?v=QsDpk4T0TII&t=9s) to learn how to buy <:bright:903289521381187635>$BRIGHT on Uniswap:\n\n <:bright:903289521381187635>$BRIGHT also available on [MEXC](https://www.mexc.com/exchange/BRIGHT_USDT).\n�")
      .addField('CoinGecko Link', '[CoinGecko](https://www.coingecko.com/tr/coins/bright-union)', true)
      .addField('CoinMarketCap Link:', '[CoinMarketCap](https://coinmarketcap.com/currencies/bright-union/)', true)
    message.channel.send(faq);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'buy',
  description: 'Admin command.',
  usage: ''
};
