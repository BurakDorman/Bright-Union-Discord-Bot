const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (message.guild !== null)
  var role = message.guild.roles.cache.find(role => role.id === "902146856405057576");
  if (message.channel.id === "901146961384710185") {
    message.member.roles.add(role);
    //message.author.id.roles.add("902146856405057576")
    message.delete();
    message.channel.send('A user has been verified!').then(msg => msg.delete({timeout: 5000}))
    
    const welcome = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor("Bright Union DeFi Insurance Aggregator", "https://brightunion.io/wp-content/uploads/2021/10/05183502/bright-icon-small.svg", "https://brightunion.io")
      .setDescription("You account is verified at Bright Union.\n\n **•** I'll drop down our socials and profiles, so you can stay tuned with us! Share our profiles with your friends and give vote 'Real' for our upcoming events on CoinMarketCal!")
      .addFields(
    	  { name: "Official Website", value: "[Info, app and more.](https://brightunion.io/)", inline: true },
    	  { name: "CoinMarketCal", value: "[Upcoming events.](https://coinmarketcal.com/en/coin/bright-union)", inline: true },
    	  { name: "Telegram", value: "[Chat channel.](https://t.me/brightunion)", inline: true },
    	  { name: "Medium", value: "[News and blog posts.](https://brightunion.medium.com/)", inline: true },
    	  { name: "Twitter", value: "[News and tweets.](https://twitter.com/bright_union)", inline: true },
    	  { name: "Instagram", value: "[Visual posts.](https://www.instagram.com/brightunion/)", inline: true },
		  )
    message.member.send(welcome)
    
    };
    return
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: `No need for any permission.` 
};

exports.help = {
  name: 'verify',
  category: '',
  description: '',
  usage:''
}
