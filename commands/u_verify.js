const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (message.guild !== null)
  var role = message.guild.roles.cache.find(role => role.id === "902146856405057576");
  //var newcomer = message.author.id
  if (message.channel.id === "901146961384710185") {
    message.member.roles.add(role);
    message.delete();
    message.channel.send('You have been verified! Check your DM box, you''ll find me there!').then(msg => msg.delete({timeout: 3000}))
    const verified = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor("Bright Union DeFi Insurance Aggregator", "https://hiluin.com/discord-assets/brightunion.png", "https://brightunion.io")
      .setDescription("👋 Welcome to Bright Union! We are glad you are here.\nPlease introduce yourself to the community in the <#902905003675639848> channel.\n\n⚠️ None of our team members will ever ask for your funds or wallet information. If you see someone who pretends to be a team member, let us know by using \`!report <user tag>\` command in <#902144996147355688> channel.\n\n**Rules:**\n❌ Do not FUD.\n❌ No suspicious links, discussions or posts about illegal activities.\n❌ Personal attacks, harassment, racism, and aggressive behaviour of any kind will not be tolerated.\n🔮 Price discussion is only allowed in <#890259068734804018> channel.\n🔇 Advertising of any kind will be scrutinised and deleted if necessary. If in doubt, ask first.\n\n🔗 I dropped down some useful links such as our socials and profiles, so you can stay tuned with us! You can share our profiles with your friends and also give vote 'Real' for our upcoming events on CoinMarketCal. Help us spread the name of Bright Union, thanks!\n \n")
      .addFields(
    	  { name: "Official Website", value: "[Info, app and more.](https://brightunion.io/)", inline: true },
    	  { name: "Discord", value: "[Community.](https://discord.gg/Mfza23wHfa)", inline: true },
    	  { name: "Telegram", value: "[Chat channel.](https://t.me/brightunion)", inline: true },
    	  { name: "Twitter", value: "[News and tweets.](https://twitter.com/bright_union)", inline: true },
	  { name: "YouTube", value: "[Videos.](https://www.youtube.com/channel/UCWu4DE_ZESWT2jOjuuHQeIQ)", inline: true},
    	  { name: "Instagram", value: "[Visual posts.](https://www.instagram.com/brightunion/)", inline: true },
    	  { name: "Medium", value: "[News and blog posts.](https://brightunion.medium.com/)", inline: true },
    	  { name: "CoinMarketCal", value: "[Upcoming events.](https://coinmarketcal.com/en/coin/bright-union)", inline: true },
    	  { name: "CoinGecko", value: "[Price and technics.](https://www.coingecko.com/en/coins/bright-union)", inline: true },
	)
	.setFooter('Stay safe with Bright Union.', 'https://hiluin.com/discord-assets/brighttoken_200x200.png')
    message.member.send(verified)
    
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
