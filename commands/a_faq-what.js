const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  if (message.guild !== null)
  if (message.guild.id === "890247463817072671")
  if (message.channel.id === "902144996147355688" || message.channel.id === "890247978038726677") {
    const what = new Discord.MessageEmbed()
      .setColor("#00a5ff")
      .setTitle("What is a cover?")
      .setURL("https://docs.brightunion.io/faq/faq-buy-cover#what-is-a-cover")
      .setDescription("A Cover is a decentralized alternative to an insurance policy. It is not the same as insurance because it is a permissionless process where anyone from the community can provide the required capital. The rules of the cover are executed by a smart contract on the blockchain which is created by one of the risk platforms:")
      .addField('Nexus Mutual', '[Integration complete Q2 2021](https://nexusmutual.io/)', true)
      .addField('Bridge Mutual', '[Integration complete Q2 2021](https://www.bridgemutual.io/)', true)
      .addField('InsurAce', '[Integration complete Q3 2021](https://insurace.io/)', true)
      .addField('Unslashed', '[Early stage conversations started](https://www.unslashed.finance/)', true)
      .addField('more...', 'Based on suggestions of the community we will add more risk protocols!', true)
    message.channel.send(what);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'what',
  description: 'Common command.',
  usage: ''
};
