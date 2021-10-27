const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (message.guild !== null)
  var role = message.guild.roles.cache.find(role => role.id === "902146856405057576");
  var newcomer = message.member.id
  if (message.channel.id === "901146961384710185") {
    message.member.roles.add(role);
    message.delete();
    message.channel.send('A user has been verified!').then(msg => msg.delete({timeout: 3000}))
    const verified = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor("Bright Union DeFi Insurance Aggregator", "hiluin.com/discord-assets/brightunion.jpg", "https://brightunion.io")
      .setDescription("👋 Hey <@${newcomer}>, welcome to Bright Union!\n🥳 We are glad you are here.\n\n⚠️ None of our team members will ever ask for your funds or wallet information. If you see someone who pretends to be a team member, let us know by using \`!report <user tag>\` command in <#902144996147355688> channel.\n\n**Rules:**\n❌ Do not FUD.\n❌ No suspicious links, discussions or posts about illegal activities.\n❌ Personal attacks, harassment, racism, and aggressive behaviour of any kind will not be tolerated.\n🤫 Price discussion is only allowed in <#890259068734804018> channel.\n🧐 Advertising of any kind will be scrutinised and deleted if necessary. If in doubt, ask first.\n\n**•** I'll drop down some useful links such as our socials and profiles, so you can stay tuned with us! You can share our profiles with your friends and also give vote 'Real' for our upcoming events on CoinMarketCal. Help us spread the name of Bright Union, thanks!\n \n")
      .addFields(
    	  { name: "Discord", value: "[Community.](https://discord.gg/Mfza23wHfa)", inline: true },
    	  { name: "Official Website", value: "[Info, app and more.](https://brightunion.io/)", inline: true },
    	  { name: "CoinMarketCal", value: "[Upcoming events.](https://coinmarketcal.com/en/coin/bright-union)", inline: true },
    	  { name: "Telegram", value: "[Chat channel.](https://t.me/brightunion)", inline: true },
    	  { name: "Medium", value: "[News and blog posts.](https://brightunion.medium.com/)", inline: true },
    	  { name: "Twitter", value: "[News and tweets.](https://twitter.com/bright_union)", inline: true },
    	  { name: "Instagram", value: "[Visual posts.](https://www.instagram.com/brightunion/)", inline: true },
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
