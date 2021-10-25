const Discord = require('discord.js');
const db = require('quick.db');

exports.run = function(client, message, args) {
  if (message.guild !== null)
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`You should have **Manage Messages** permission!`);
    if(isNaN(args[0])) {
      var errembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(`Error!`, `You must input an integer.`)
        .addField(`Usage:`, `${process.env.prefix}clear <amount of messages to be deleted>`)
      return message.channel.send(errembed);
    }
    if (args[0] < 1) return message.reply("Input cannot be less than **1**!")
    if (args[0] > 100) return message.reply("Input cannot be more than **100**!")
    message.channel.bulkDelete(args[0]).then(deletedMessages => {
      if (deletedMessages.size < 1) return message.reply("I couldn't delete any messages! _(I cannot delete messages more than **14** days old!)_");
    })
    message.channel.send(`**${args[0]}** messages have been deleted!`).then(msg => msg.delete({timeout: 4000}));
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'clear',
  category: 'moderation',
  description: 'Deletes specified amount of messages.',
  usage: '!clear <amount>'
};
