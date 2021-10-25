const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let botcommand = "902144996147355688"
  let oda = message.channel.id
  if (message.guild !== null)
  if (message.guild.id === "890247463817072671") {
    if(oda === botcommand) {
      const notification = new Discord.MessageEmbed()
        .setTitle('🔔 | Update Subscription')
        .setDescription(`React with 📰 in order to get notified with updates!\n \n`)
        .setColor("#f9f09e")
        .setFooter("Cmd: !notify", "https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=2048")
      message.channel.send(notification).then(m => {
        let res = m.react('📰');
      });
      return
    };
    if(oda) message.delete(); return message.channel.send(new Discord.MessageEmbed()
      .setDescription(`<@901099642735955969> commands need to be used on <#902144996147355688> channel.`)
      .setColor("RED")).then(msg => msg.delete({timeout: 5000}));
  }
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: `No need for any permission.` 
};

exports.help = {
  name: 'notify',
  category: '',
  description: '',
  usage:''
}