const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  if (message.guild !== null)
  if (message.guild.id === "826925131493933127") {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
    if(isNaN(args[0])) {
      var errembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(`Hata!`, `Bir sayı yazmalısın.`)
        .addField(`Doğru Kullanım:`, `${ayarlar.prefix}sil <temizlenecek mesaj sayısı>`)
      return message.channel.send(errembed);
    }
    if (args[0] < 1) return message.reply("**1** adetten az mesaj silemem!")
    if (args[0] > 100) return message.reply("**100** adetten fazla mesaj silemem!")
    message.channel.bulkDelete(args[0]).then(deletedMessages => {
      if (deletedMessages.size < 1) return message.reply("Hiç mesaj silemedim! _(**14** günden eski mesajları silemem!)_");
    })
    message.channel.send(`**${args[0]}** adet mesaj silindi!`).then(msg => msg.delete({timeout: 4000}));
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["temizle", "mesaj-sil", "mesajları-sil"],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  category: 'moderasyon',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: '!sil <miktar>'
};