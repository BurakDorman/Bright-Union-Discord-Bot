const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  message.delete();
  const faq = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("**How to stake?**")
    .setDescription("Here is a step by step guide: \n 1. Go to Stake BRIGHT in the Bright Union application.\n 2. Connect to your MetaMask(or Other wallets that supports ethereum chain). \n3. Press “Stake BRIGHT” and select an amount. Then, Leave a decent amount of ETH in your wallet to be able to pay the fee to stake. \n4. Approve spending of BRIGHT token in your MetaMask wallet. \n5. Approve the transaction in your MetaMask wallet. \n6. Your wallet now contains stkBRIGHT as a proof you staked BRIGHT (these tokens can now be send to another wallet if required). \n\nCongratulations 🥳 , your tokens are now earning rewards. Your rewards will be automatically accumulated.\n\nFor an even more detailed guide, follow the link below: \n\n📍 https://brightunion.medium.com/earn-for-creating-a-brighter-future-bright-staking-explained-55e0e13860ad \n\nAlso, if you're still confused we have a Youtube video showing it in action: \n\📍https://www.youtube.com/watch?v=QN-lVsi1W3E :")
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
