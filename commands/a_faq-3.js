const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  const faq = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("**How to stake?**")
    .setDescription("A Cover is a decentralized alternative to an insurance policy. It is not the same as insurance because it is a permissionless process where anyone from the community can provide the required capital. The rules of the cover are executed by a smart contract on the blockchain which is created by one of the risk platforms:")
    .addField('Bright Union', '[APP](https://app.brightunion.io/staking_bright)', true)
    message.channel.send(faq);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'faq-stake',
  description: 'Admin command.',
  usage: ''
};
