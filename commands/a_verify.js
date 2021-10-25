const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  const faq = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor('Bright Union', 'https://ibb.co/R2TxgQx', 'https://docs.brightunion.io')
    .setDescription("💙 Welcome to the Bright Union Discord Server, we are more than happier to see you around! 💙\n\nBefore using the server and its channels, please take note of the few rules we have as follows:\n **•** Personal attacks, harassment, racism, and aggressive behaviour of any kind will NOT be tolerated.\n **•** Keep discussion relevant to the appropriate channels.\n **•** No suspicious links, discussions or posts about illegal activities. \n **•** Any kind of advertising is NOT allowed. \n **•** If you make predictions or price calls, please provide credible sources or a chart analysis backing up your claims otherwise you will get a WARNING or a BAN ! \n **•** Do not forget that any of our team members will not ask you for your funds or wallet information.\n\n ❕ > BE AWARE OF SCAMMERS < ❕\n\nPlease report anything that is against our rules to a member of the admin team and we will investigate the incident, looking to fix the problem as soon as possible.\n\nIf you have any feedback, We welcome you to drop them to the <#890258506702262273> channel.\n\nWe are a friendly community, please treat each other with respect!")
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
