const fs=require('fs');
const Discord=require("discord.js");
const client=new Discord.Client();
const db = require('quick.db')
const moment = require("moment");
const config=require("./config.json");
const express = require('express');
const activities = require('./assets/activities');
////
const app = express()
app.get('/', (req, res) => res.send("Bot Aktif"))
app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + process.env.PORT))
////

var prefix = config.prefix;

client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(' ')[0].slice(config.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
})

client.on("ready", () => {

  setInterval(() => {
    const activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setStatus('available')
    client.user.setPresence({
      game: {
        name: activity.text,
        type: activity.type
      }
    });
  }, 60000);
  console.log("The Bot is live.")
})

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yükleniyor.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Yüklenen komut: ${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.yetkiler = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if(message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if(message.author.id === message.guild.ownerID) permlvl = 6;
  if(message.author.id === config.sahip) permlvl = 7;
  return permlvl;
};

const logEmbed = new Discord.MessageEmbed()
    .setColor('#30d5c8')
    .setTitle('Log')

//=========================================================================
// KARŞILAMA MESAJI VE TANITIM MESAJI
//=========================================================================

client.on('guildMemberAdd', member => {
  if (member.guild.id === "0890247463817072671") { //cmc, cgecko, cmcal, isthiscoinascam
    const welcome = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Bright Union DeFi Insurance Aggregator", "https://brightunion.io/wp-content/uploads/2021/10/05183502/bright-icon-small.svg", "https://brightunion.io")
      .setDescription("Hello and welcome to our Discord server!\nI am to introduce us.\n\n **•** Before we start, I assume you read and understood our community rules at <#901146961384710185>.\n **•** Skyblock sunucumuz hakkında bilgi edinmek istiyorsan <#852329942309011467> kanalına göz atabilirsin\n **•** Discord sunucumuzdaki tüm kanal izinlerini almak için oyun sunucumuzdaki hesabınla Discord hesabını eşleştirmelisin. Bunu nasıl yapacağının cevabını <#851228289963393075> kanalında bulabilirsin.\n **•** Oyun sunucumuza bağlanmak için sunucu adresi olarak \`mc.skychain.me\` kullanılır.\n **•** [Website (Haberler, blog, mağaza ve diğerleri.)](https://mc.skychain.me)\n **•** Bir sorun yaşadığında [site desteğini](https://mc.skychain.me/destek) ya da <#827532006203850773> kanalında \`!destek\` komutunu kullanmaktan çekinme.\n **•** Eğer yanlışlıkla Discord sunucumuzu terk edersen, yeniden katılman için adres: [https://discord.gg/48ZD8QDxJE](https://discord.gg/48ZD8QDxJE)\n\nTeknik ekibimiz çok ilgilidir ve hiçbir sorunu ihmal etmezler, yönetim ekibimiz ise saygın, saygılı ve soğukkanlı bireylerden oluşur; düzeni sağlamakta zorluk çekmezler. Yıllarca beraber olmak dileğiyle.")
    member.send(welcome)
    const vote = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("...unutmadan! İzninle sunucumuza ait oylama adreslerini aşağıya bırakıyorum, böylece onlara daha rahat erişebileceksin. Skychain için oy vererek topluluğumuzun tanınmasına ve daha geniş kitlelere ulaşmasına yardımcı olabilirsin!")
		  .addFields(
    	  { name: "1. Link", value: "[minecraft-mp.com](https://vote1.skychain.me)", inline: true },
    	  { name: "2. Link", value: "[planetminecraft.com](https://vote2.skychain.me)", inline: true },
    	  { name: "3. Link", value: "[topg.org](https://vote3.skychain.me)", inline: true },
    	  { name: "4. Link", value: "[minecraft-server.net](https://vote4.skychain.me)", inline: true },
    	  { name: "5. Link", value: "[minecraftserver.gen.tr](https://vote5.skychain.me)", inline: true },
    	  { name: "6. Link", value: "[forum.gamer.com.tr](https://fgamer.skychain.me)", inline: true },
		  )
    member.send(vote)
  }
  if (member.guild.id !== "890247463817072671") {
    const promotion = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Bright Union DeFi Insurance Aggregator", "https://brightunion.io/wp-content/uploads/2021/10/05183502/bright-icon-small.svg", "https://brightunion.io")
      .setDescription("Merhaba, ben Cloudia; Skychain'in lider botuyum. Sana oyun sunucumuzdan bahsetmek istiyorum, umarım rahatsızlık vermiyorumdur.\n\n 👷 **İlgili ve Yetkin Ekip**\nBağlantı sorunları, oyun hataları, teknik aksaklıklar gibi durumlarla hiç vakit kaybetmeden ilgilenilmesi gerektiğini çok iyi biliyoruz.\n\n 👮 **Sorumlu ve Adil Yönetim**\nTopluluk yöneticilerimiz ve personellerimiz kendini bilen, profesyonel insanlar. Personel alımlarında 99 kriter uygulanıyor.\n\n 🎫 **Destek Sistemi**\nSizi önemsiyor ve sorunlarınızı çözümsüz bırakmıyoruz. İletişim için [site desteğini](https://mc.skychain.me/destek) ya da #bot-komut kanalında \`!destek\` komutunu kullanmaktan çekinme.\n\n 🧊 **Son Sürüm Minecraft (Java Edition)**\nMinecraft'ın güncel kalması gerektiğine inanıyor ve gelişimini destekliyoruz.\n\n 🏘️ **Özen Gösterilmiş Bir Tertip**\nOyun tertibimizin hazırlanması için çok emek verilmiş ve gerekli özen gösterilmiştir. Başlıca özelliklerimiz şöyle sıralanabilir:\n\n **•** Farmland, Lumberland gibi kaynak bölgeleri\n **•** Güçlü AI rakiplerin bulunduğu kaynak bölgesi\n **•** Ada asistanı olarak çiftçi (NPC)\n **•** Özel büyüler\n **•** Minyonlar\n **•** Görevler\n **•** Oyuncu seviyesi\n **•** Kozmetikler\n\nSeni aramızda görmekten mutluluk duyarız.")
      //.setFooter("Bu, izinli bir reklamdır.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnQ6Q6rmzg9hpyQGGH2M5cEzj6_LDMlH0wQ&usqp=CAU")
    member.send(promotion)
    member.send("https://discord.gg/48ZD8QDxJE")
  }
});

//=========================================================================
// LOG
//=========================================================================

client.on("guildMemberAdd", (member) => {
  if (db.has(`guilds_${member.guild.id}.otorol`)) {
    member.roles.add(db.get(`guilds_${member.guild.id}.otorol`))
  }
  if (db.has(`guilds_${member.guild.id}.giris`)) {
    var welcome = member.guild.channels.cache.get(db.get(`guilds_${member.guild.id}.giris`))
    embed.setColor('#05fb22')
    embed.setDescription(`**${member.user.username}** discord sunucumuza katıldı. Artık ${member.guild.members.cache.size} kişiyiz!`)
    welcome.send(embed)
  }
});

client.on("guildMemberRemove", (member) => {
  if (db.has(`guilds_${member.guild.id}.giris`)) {
    var welcome = member.guild.channels.cache.get(db.get(`guilds_${member.guild.id}.giris`))
    embed.setColor('#fb0505')
    embed.setDescription(`**${member.user.username}** discord sunucumuzdan ayrıldı. Artık ${member.guild.members.cache.size} kişiyiz!`)
    welcome.send(embed)
  }
});

client.on("messageDelete", async function (message) {
  var boolean = message.author == null || false
  if (db.has(`guilds_${message.guild.id}.log`) && !boolean) {
    logEmbed.setDescription(`${message.author} adlı kullanıcının mesajı silindi.\n\n**Silinen mesaj:** ` + message.content)
    var channel = message.guild.channels.cache.find(ch => ch.id == db.get(`guilds_${message.guild.id}.log`))
    channel.send(logEmbed)
  }
});

client.on("messageUpdate", async function (oldMessage, newMessage) {
  var boolean = oldMessage.author == null || false
  if (db.has(`guilds_${oldMessage.guild.id}.log`) && oldMessage.content.length > 0 && !boolean) {
    logEmbed.setDescription(`${oldMessage.author} adlı kullanıcının mesajı güncellendi.\n\n**Eski mesaj:** ${oldMessage.content}\n**Yeni mesaj:** ${newMessage.content}`)
    var channel = oldMessage.guild.channels.cache.find(ch => ch.id == db.get(`guilds_${oldMessage.guild.id}.log`))
    return channel.send(logEmbed)
  }
});

//=========================================================================
// OTOMATİK DUYURU
//=========================================================================

//client.on("ready", () => {

//  setInterval(function() {
//    const embed = new Discord.MessageEmbed()
//      .setColor("RANDOM")
//      .setTitle('Oy Bağlantıları')
//      .setAuthor("Skychain Minecraft & Discord Sunucusu", "https://skychain.me/assets/img/favicon.png")
//      .setDescription(`Sunucumuz için oy vererek Skychain'in tanınmasına yardımcı olabilirsiniz!`)
//		  .setURL('https://mc.skychain.me/sayfa/1/sunucumuzu-oyla')
//		  .addFields(
//    	  { name: "1. Link", value: "[minecraft-mp.com](https://vote1.skychain.me)", inline: true },
//    	  { name: "2. Link", value: "[planetminecraft.com](https://vote2.skychain.me)", inline: true },
//    	  { name: "3. Link", value: "[topg.org](https://vote3.skychain.me)", inline: true },
//    	  { name: "4. Link", value: "[minecraft-server.net](https://vote4.skychain.me)", inline: true },
//    	  { name: "5. Link", value: "[minecraftserver.gen.tr](https://vote5.skychain.me)", inline: true },
//    	  { name: "6. Link", value: "[forum.gamer.com.tr](https://fgamer.skychain.me)", inline: true },
//		  )
	  //	.setThumbnail('https://cdn.discordapp.com/attachments/418838573597589504/777572652939477022/silmaril_logo_png_shadows_glows_red_velvet_with_text.png')
	  //	.setFooter('!oy @ <#827532006203850773>')
//    client.channels.cache.get(`827530103025041409`).send(embed)
    //client.channels.cache.get(`655474178039873537`).send(embed).then(value => {
      //client.channels.cache.get(`778693704051327057`).send(embed)
    //});
//  }, 28800000);

//})

//=========================================================================
// DESTEK
//=========================================================================

client.on("message", async(message) => {
  if (message.guild !== null)
  if (message.guild.id === "826925131493933127") {
    const i = await db.fetch(`desteksistemi_${message.guild.id}`, true)
    if(i) {
      if(message.content.toLowerCase() === '!destek') {
        //let talepler = db.fetch(`talepler_${message.author.id}`)
        //if(`${talepler}` == 2) return message.reply(`Destek açma sınırına ulaştınız lütfen diğer destek taleplerinizin çözülmesini bekleyiniz`)
        let kanal1 = await db.fetch(`destekkanal_${message.guild.id}`)
        let kategori = db.get(`destekkg_${message.guild.id}`)
        if(message.channel.id != kanal1) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Bu komut yalnızca <#${kanal1}> kanalında kullanılabilir.`)).then(msg => msg.delete({timeout: 5000}))
        if(message.channel.id == kanal1) {
          message.guild.channels.create(`talep-${message.author.username}`, "text").then(c => {
            //db.add(`talepler_${message.author.id}`, +1)
            c.setTopic(`Talebi kapatmak için !kapat yazılır.`);
            let destek = message.guild.roles.cache.find(name => "Destek");
            let destekrol = db.fetch(`destekrol_${message.guild.id}`);
            let role2 = message.guild.roles.cache.find(name => "@everyone");
            c.createOverwrite(destek, {
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            });
            c.createOverwrite(destekrol, {
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            });
            c.createOverwrite(role2, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false
            });
            c.createOverwrite(message.author, {
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            });
            message.channel.send(`:white_check_mark: Yardım talebiniz oluşturuldu, ${c}.`).then(msg => msg.delete({timeout: 5000}));
            message.delete();
            const embed = new Discord.MessageEmbed()
              .setColor(0xCF40FA)
              .addField(`Merhaba ${message.author.username}.`, `Yardım talebini neden açtığını anlat. Yetkililer en kısa zamanda cevap verecektir. ||@everyone||`)
              .addField(`Talebi kapatmak için`,`!kapat yazılır.`)
              .setTimestamp();
            c.send({ embed: embed });
            c.setParent(`${kategori}`)
          }).catch(console.error);
        }
      }
      if(message.content.toLowerCase().startsWith(prefix + `kapat`)) {
        if(!message.channel.name.startsWith(`talep-`)) return message.channel.send(`Destek talebinizi yalnızca talep kanalınızdan kapatabilirsiniz.`);
          message.channel.send(`Emin misin? Onayladıktan sonra geri alınamaz!\nOnaylamak için \`onayla\` yaz. Bu işlem 10 saniye sonra zaman aşımına uğrayacak.`)
          .then((m) => {
            message.channel.awaitMessages(response => response.content === 'onayla', {
              max: 1,
              time: 10000,
              errors: ['time'],
            })
          .then((collected) => {
            //db.add(`talepler_${message.author.id}`, -1)
            message.channel.delete();
            message.guild.channels.delete();
          })
          .catch(() => {
            m.edit('Kapatma işlemi zaman aşımına uğradı, destek talebin kapatılmadı.').then(m2 => {
              m2.delete();
            }, 3000);
          });
        });
      }
    }
  }
});

//=========================================================================
// EMOJI ROL
//=========================================================================

client.on("messageReactionAdd", async function (reaction, user) {

  if (reaction.message.partial) await reaction.message.fetch()
  if (reaction.partial) await reaction.fetch()

  if (db.has(`guilds_${reaction.message.guild.id}.emojirol.channel`) && db.has(`guilds_${reaction.message.guild.id}.emojirol.${reaction.emoji.name}`)) {
      if (reaction.message.channel.id == db.get(`guilds_${reaction.message.guild.id}.emojirol.channel`)) {

          var member = reaction.message.guild.members.cache.find(m => m.id == user.id)
          member.roles.add(db.get(`guilds_${reaction.message.guild.id}.emojirol.${reaction.emoji.name}`))
      }
  }

});


client.on("messageReactionRemove", async function (reaction, user) {

  if (reaction.message.partial) await reaction.message.fetch()
  if (reaction.partial) await reaction.fetch()

  if (db.has(`guilds_${reaction.message.guild.id}.emojirol.channel`) && db.has(`guilds_${reaction.message.guild.id}.emojirol.${reaction.emoji.name}`)) {

      if (reaction.message.channel.id == db.get(`guilds_${reaction.message.guild.id}.emojirol.channel`)) {

          var member = reaction.message.guild.members.cache.find(m => m.id == user.id)

          member.roles.remove(db.get(`guilds_${reaction.message.guild.id}.emojirol.${reaction.emoji.name}`))

      }

  }

});

client.login(config.token)