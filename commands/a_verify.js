const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  const faq = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor("Bright Union DeFi Insurance Aggregator", "https://hiluin.com/discord-assets/brightunion.png", "https://brightunion.io")
    .setDescription('💎 Hi, welcome to the Bright Union Discord Server, we are more than happy to have you here!\n\n 📖  Before using the server and its channels, please take note of the few rules we have as follows:\n 🙏 Keep discussion relevant to the appropriate channels.\n ❗ Personal attacks, harassment, racism, and aggressive behaviour of any kind will not be tolerated.  \n ❗ No suspicious links, discussions or posts about illegal activities. \n 🔇 Advertising of any kind (websites, servers, products, referral links etc) will be scrutinised and deleted if necessary. If in doubt, ask first. \n 🔮 If you make predictions or price calls, please provide credible sources or a chart analysis backing up your claims and be sure you are in #bright-trading channel otherwise you will get a warning or a ban!\n ⚠️ None of our team members will ever ask for your funds or wallet information.\n\n 🚨 BE AWARE OF SCAMMERS 🚨\n\n Please report anything going against the rules to an admin, who will investigate and resolve the issue as soon as possible. \n\n 📍 If you have any feedback, We welcome you to drop them to the #feedback channel.\n\n We are a friendly community, please treat each other with respect! 😊\n\n 💎 #JoinTheUnion\n\n  ✍️    **  TYPE  \`!verify\` to get verified! **") 
    
  message.channel.send(faq);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'verify-text',
  description: 'Admin command.',
  usage: ''
};
