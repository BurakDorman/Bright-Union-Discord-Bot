const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db')
const moment = require("moment");
const express = require('express');
const activities = require('./assets/activities');
////
const app = express()
app.get('/', (req, res) => res.send("Bot Aktif"))
app.listen(process.env.PORT, () => console.log('Port is set: ' + process.env.PORT))
////

var prefix = process.env.prefix;

client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(process.env.prefix)) return;
  let command = message.content.split(' ')[0].slice(process.env.prefix.length);
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
  log(`${files.length} commands are loading.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Command is loaded: ${props.help.name.toUpperCase()}.`);
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
  if(message.author.id === process.env.owner) permlvl = 7;
  return permlvl;
};

const logEmbed = new Discord.MessageEmbed()
    .setColor('#30d5c8')
    .setTitle('Log')

//=========================================================================
// INTERVAL
//=========================================================================

client.on("ready", () => {

  setInterval(function() {
    const embed = new Discord.MessageEmbed()
    client.channels.cache.get(`901084999988707378`).send("Bot is live.")
  }, 100000);

})

//=========================================================================
// GREETINGS AND INTRODUCTION process.env.
//=========================================================================

client.on('guildMemberAdd', member => {
  if (member.guild.id === "890247463817072671") { //cmc, cgecko, cmcal, isthiscoinascam
    const welcome = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Bright Union DeFi Insurance Aggregator", "https://ibb.co/R2TxgQx", "https://brightunion.io")
      .setDescription("Hello and welcome to our Discord server!\nI am to introduce us.\n\n **•** Before we start, I assume you read and understood our community rules at <#901146961384710185>.\n **•** Xxx <#852329942309011467> xxx\n **•** Yyy <#851228289963393075> yyy.\n **•** [Website (News, blog, store and zzz.)](https://mc.skychain.me)\n **•** Whenever you faced with a problem [online support](https://mc.skychain.me/destek) or discord support at <#827532006203850773> with command \`!help\` don't hesitate.\n **•** If you left our Discord server and want to come back, use this link: [https://discord.gg/48ZD8QDxJE](https://discord.gg/48ZD8QDxJE)\n\nTo sum up...")
    member.send(welcome)
    const social = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("...before forget! I'll drop down our socials and profiles, so you can stay tuned with us! Share our CoinMarketCal profile with your friends and give vote 'Real' for our upcoming events allways!")
      .addFields(
    	  { name: "Official Website", value: "[Info, app and more.](https://brightunion.io/)", inline: true },
    	  { name: "CoinMarketCal", value: "[Upcoming events.](https://coinmarketcal.com/en/coin/bright-union)", inline: true },
    	  { name: "Telegram", value: "[Chat channel.](https://t.me/brightunion)", inline: true },
    	  { name: "Medium", value: "[News and blog posts.](https://brightunion.medium.com/)", inline: true },
    	  { name: "Twitter", value: "[News and tweets.](https://twitter.com/bright_union)", inline: true },
    	  { name: "Instagram", value: "[Visual posts.](https://www.instagram.com/brightunion/)", inline: true },
		  )
    member.send(social)
  }
  if (member.guild.id !== "890247463817072671") {
    const promotion = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Bright Union DeFi Insurance Aggregator", "https://ibb.co/R2TxgQx", "https://brightunion.io")
    member.send(promotion)
    member.send("https://discord.gg/Mfza23wHfa")
  }
});

//=========================================================================
// LOG
//=========================================================================

client.on("guildMemberAdd", (member) => {
  if (db.has(`guilds_${member.guild.id}.giris`)) {
    var welcome = member.guild.channels.cache.get(db.get(`guilds_${member.guild.id}.giris`))
    embed.setColor('#05fb22')
    embed.setDescription(`**${member.user.username}** has joint us! Now we are ${member.guild.members.cache.size} fellas!`)
    welcome.send(embed)
  }
});

client.on("guildMemberRemove", (member) => {
  if (db.has(`guilds_${member.guild.id}.giris`)) {
    var welcome = member.guild.channels.cache.get(db.get(`guilds_${member.guild.id}.giris`))
    embed.setColor('#fb0505')
    embed.setDescription(`**${member.user.username}** has left us... I hope s/he will come back later! Now we are ${member.guild.members.cache.size} fellows!`)
    welcome.send(embed)
  }
});

client.on("messageDelete", async function (message) {
  var boolean = message.author == null || false
  if (db.has(`guilds_${message.guild.id}.log`) && !boolean) {
    logEmbed.setDescription(`A text message from user ${message.author} has been deleted.\n\n**Content:** ` + message.content)
    var channel = message.guild.channels.cache.find(ch => ch.id == db.get(`guilds_${message.guild.id}.log`))
    channel.send(logEmbed)
  }
});

client.on("messageUpdate", async function (oldMessage, newMessage) {
  var boolean = oldMessage.author == null || false
  if (db.has(`guilds_${oldMessage.guild.id}.log`) && oldMessage.content.length > 0 && !boolean) {
    logEmbed.setDescription(`User ${oldMessage.author} has edited some of their messages.\n\n**Old:** ${oldMessage.content}\n**New:** ${newMessage.content}`)
    var channel = oldMessage.guild.channels.cache.find(ch => ch.id == db.get(`guilds_${oldMessage.guild.id}.log`))
    return channel.send(logEmbed)
  }
});

//=========================================================================
// SPAM RESTRICTION AT VERIFY CHANNEL
//=========================================================================

client.on("message", async(message) => {
  if (message.guild !== null)
  if (message.member.id !== "901099642735955969")
  if (message.guild.id === "890247463817072671")
  if (message.channel.id === "901146961384710185") {
    if(message.content.toLowerCase() !== "!verify") {
      message.channel.send(`:x: You can only type **!verify** here.`).then(msg => msg.delete({timeout: 5000}));
      message.delete();
    }
  }
});

//=========================================================================
// TICKET SYSTEM
//=========================================================================

client.on("message", async(message) => {
  if (message.guild !== null)
  if (message.guild.id === "890247463817072671") {
    const i = await db.fetch(`desteksistemi_${message.guild.id}`, true)
    if(i) {
      if(message.content.toLowerCase() === '!ticket') {
        let kanal1 = await db.fetch(`destekkanal_${message.guild.id}`)
        let kategori = db.get(`destekkg_${message.guild.id}`)
        if(message.channel.id != kanal1) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`This command can only be executed at <#${kanal1}> channel.`)).then(msg => msg.delete({timeout: 5000}))
        if(message.channel.id == kanal1) {
          message.guild.channels.create(`talep-${message.author.username}`, "text").then(c => {
            //db.add(`talepler_${message.author.id}`, +1)
            c.setTopic(`You can type !close when you want to close your ticket.`);
            //let destek = message.guild.roles.cache.find(name => "Destek");
            let destekrol = db.fetch(`destekrol_${message.guild.id}`);
            let every = message.guild.roles.cache.find(name => "@everyone");
            //c.createOverwrite(destek, {
            //  SEND_MESSAGES: true,
            //  VIEW_CHANNEL: true
            //});
            c.createOverwrite(destekrol, {
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            });
            c.createOverwrite(every, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false
            });
            c.createOverwrite(message.author, {
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            });
            message.channel.send(`:white_check_mark: Your ticket is created, ${c}.`).then(msg => msg.delete({timeout: 5000}));
            message.delete();
            const embed = new Discord.MessageEmbed()
              .setColor(0xCF40FA)
              .addField(`Hello ${message.author.username}.`, `Could you tell us why did you open this support ticket? Managers will answer here ASAP. ||@everyone||`)
              .addField(`To close the ticket`,`type !close`)
              .setTimestamp();
            c.send({ embed: embed });
            c.setParent(`${kategori}`)
          }).catch(console.error);
        }
      }
      if(message.content.toLowerCase().startsWith(process.env.prefix + `close`)) {
        if(!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can use this command only at your own support channel.`);
          message.channel.send(`Are you sure? It cannot irrevocable!\nType \`confirm\` to confirm in **10 seconds**.`)
          .then((m) => {
            message.channel.awaitMessages(response => response.content === 'confirm', {
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
            m.edit('Process timed out, your support ticket is still open.').then(m2 => {
              m2.delete();
            }, 3000);
          });
        });
      }
    }
  }
});

//=========================================================================
// ROLE WITH REACTION
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

client.login(process.env.token)
