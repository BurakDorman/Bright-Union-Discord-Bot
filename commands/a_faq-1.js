const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  const faq = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("What is a cover?")
    .setURL("https://docs.brightunion.io/faq/faq-buy-cover#what-is-a-cover")
    .setDescription("A Cover is a decentralized alternative to an insurance policy. It is not the same as insurance because it is a permissionless process where anyone from the community can provide the required capital. The rules of the cover are executed by a smart contract on the blockchain which is created by one of the risk platforms:")
    .addField('Nexus Mutual', '[Integration complete Q2 2021](https://nexusmutual.io/)', true)
    .addField('Bridge Mutual', '[Integration complete Q2 2021](https://www.bridgemutual.io/)', true)
    .addField('InsurAce', '[Integration complete Q3 2021](https://insurace.io/)', true)
    .addField('Unslashed', '[Early stage conversations started](https://www.unslashed.finance/)', true)
    .addField('more...', 'Based on suggestions of the community we will add more risk protocols!', true)
  message.channel.send(faq);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'what_is_cover',
  description: 'Admin command.',
  usage: ''
};
