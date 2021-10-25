const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {
  if (message.guild.id !== null) {
    const target = message.mentions.members.first() || args.slice(0).join(' ')
    if(!target) return message.channel.send('Please specify a target user!')
    const promotion = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor("Bright Union DeFi Insurance Aggregator", "https://brightunion.io/wp-content/uploads/2021/10/05183502/bright-icon-small.svg", "https://brightunion.io")
      .setDescription("Hello! I represent Bright Union and I am here to introduce us.\n\n **•** ")
    target.send(promotion)
    const social = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription("...before forget! I'll drop down our socials and profiles, so you can stay tuned with us! Share our CoinMarketCal profile with your friends and give vote 'Real' for our upcoming events allways!")
      .addFields(
    	  { name: "Official Website", value: "[Info, app and more.](https://brightunion.io/)", inline: true },
    	  { name: "CoinMarketCal", value: "[Upcoming events.](https://coinmarketcal.com/en/coin/bright-union)", inline: true },
    	  { name: "Telegram", value: "[Chat channel.](https://t.me/brightunion)", inline: true },
    	  { name: "Medium", value: "[News and blog posts.](https://brightunion.medium.com/)", inline: true },
    	  { name: "Twitter", value: "[News and tweets.](https://twitter.com/bright_union)", inline: true },
    	  { name: "Instagram", value: "[Visual posts.](https://www.instagram.com/brightunion/)", inline: true },
		  )
    target.send(social)
    target.send("https://discord.gg/Mfza23wHfa")
    message.channel.send('A DM has been successfully sent.')
  }
}

exports.conf = {
  enable: true,
  guildOnly: false,
  permLevel: 4,
  aliases: []
}

exports.help = {
  name: 'dm-adv'    
}