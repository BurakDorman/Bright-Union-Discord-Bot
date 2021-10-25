const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
var ayarlar = require("../ayarlar.json");

const aç = ["on", "open"];
const kapat = ["off", "close"];

exports.run = async(client, message, args) => {
  if (message.guild.id === "890247463817072671") {
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription("You should type open or close."))
    if(aç.includes(args[0])){
      message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription("Support system is activated. :white_check_mark: "))
      db.set(`desteksistemi_${message.guild.id}`, "açık")
    }
    if(kapat.includes(args[0])){
      message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription("Support system is deactivated. :x: "))
      db.delete(`desteksistemi_${message.guild.id}`)
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 2,
  aliases: []
};

exports.help = {
  name: "support-system"
};