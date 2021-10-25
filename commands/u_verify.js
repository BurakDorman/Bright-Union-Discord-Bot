const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (message.guild !== null)
  if (message.channel.id === "901146961384710185") {
    message.author.roles.add("902146856405057576").then(msg => msg.delete({timeout: 5000}));
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
