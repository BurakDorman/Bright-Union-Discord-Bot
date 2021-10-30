const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  if (message.guild !== null)
  if (message.guild.id === "890247463817072671")
  if (message.channel.id === "902144996147355688" || message.channel.id === "890247978038726677") {
    //message.delete();
    const faq = new Discord.MessageEmbed()
      .setColor("#00a5ff")
      .setTitle("How to stake?")
      .setDescription("Here is a step by step guide for you!\n\n1. Go to \`Stake BRIGHT\` in the \`Bright Union Application\`.\n2. Connect to your MetaMask (or Other wallets that supports Eth chain).\n3. Press \`Stake BRIGHT\` and select an amount. Don't forget to leave a decent amount of ETH in your wallet to be able to \`pay the fee\` to stake. \n4. \`Approve spending\` of BRIGHT token in your MetaMask wallet. \n5. \`Approve\` the transaction in your MetaMask wallet.\n6. Your wallet now contains \`stkBRIGHT\` as a proof you staked BRIGHT (these tokens can now be sent to another wallet if required).\n\nCongratulations 🥳, your tokens are now earning rewards. Your rewards will be automatically accumulated.\n\nFor an even more detailed guide, follow the link below:\n\n📍 https://brightunion.medium.com/earn-for-creating-a-brighter-future-bright-staking-explained-55e0e13860ad\n\nAlso, if you're still confused we have a Youtube video showing it in action:\n\📍https://www.youtube.com/watch?v=QN-lVsi1W3E")
      .addField('APP', '[brightunion.io/app](https://app.brightunion.io/staking_bright)', true)
      message.channel.send(faq);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stake',
  description: 'Common command.',
  usage: ''
};
