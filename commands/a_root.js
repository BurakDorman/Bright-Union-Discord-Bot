const Discord = require("discord.js")
var db = require('quick.db')

const embed = new Discord.MessageEmbed()
    .setColor('#30d5c8')
    .setTimestamp()

exports.run = async (client, message, args) => {
    (message.guild.id === "890247463817072671")

    embed.setFooter(`${message.author.username}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=2048`)

    let channel = message.mentions.channels.first() || message.mentions.roles.first() || message.guild.channels.cache.some(s => s.id == args[1] && s.type == 'category')
    if (channel || channel.length > 0) {
        var guild = message.guild.id
        if (args[0] == 'log') {

            db.set(`guilds_${guild}.log`,
                channel.id
            )
            embed.setDescription(`Log channel has been set. All logs will be sent to <#${db.get(`guilds_${guild}.log`)}> channel.`)


        } else if (args[0] == 'autorole') {

            db.set(`guilds_${guild}.otorol`,
                channel.id
            )
            embed.setDescription(`Auto role has been set. All new members will get ${message.guild.roles.cache.find(id => id == db.get(`guilds_${guild}.otorol`))} role.`)


        } else if (args[0] == 'joinleave') {


            db.set(`guilds_${guild}.giris`,
                channel.id
            )
            embed.setDescription(`Join - Leave channel has been set. All greetings will be held at <#${db.get(`guilds_${guild}.giris`)}> channel.`)


        } else if (args[0] == 'nofilter') {

            db.set(`guilds_${guild}.badword`,
                channel.id
            )
            embed.setDescription(`No filter is applied for <#${db.get(`guilds_${guild}.badword`)}> channel. Ensure you mark this channel as NSFW.`)


        } else if (args[0] == 'archive') {
            let catID = message.guild.channels.cache.find(s => s.id == args[1] && s.type == 'category')
            db.set(`guilds_${guild}.archive`,
                catID.id
            )
            embed.setDescription(`Archive category has been set. ID: ${db.get(`guilds_${message.guild.id}.archive`)}`)

        } else if (args[0] == 'support') {

            let catID = message.guild.channels.cache.find(s => s.id == args[1] && s.type == 'category')
            db.set(`guilds_${guild}.ticket`,
                catID.id
            )
            embed.setDescription(`Ticket category has been set. ID: ${db.get(`guilds_${message.guild.id}.ticket`)}`)

        } else if (args[0] == 'emojirole') {

            db.set(`guilds_${guild}.emojirol.channel`,
                channel.id
            )
            embed.setDescription(`<#${db.get(`guilds_${guild}.emojirol.channel`)}> has been set as emoji role channel.`)


        } else if (args[0] == 'help'){

            embed.setDescription('**,admin** `log` `#ch` - log channel.\n**,admin** `autorole` `@role` - role given on first join.\n**,admin** `joinleave` `#ch` - Join Leave message log.\n**,admin** `nofilter` `#ch` - channel with no word filter.\n**,admin** `emojirole` `#ch` - get role with reacting.\n**,admin** `support` `category id` - category to open new support channels under.\n**,admin** `archive` `category id` - category to move archived channels under.')
        }

    } else {
        embed.setDescription('**,admin** `log` `#ch` - log channel.\n**,admin** `autorole` `@role` - role given on first join.\n**,admin** `joinleave` `#ch` - Join Leave message log.\n**,admin** `nofilter` `#ch` - channel with no word filter.\n**,admin** `emojirole` `#ch` - get role with reacting.\n**,admin** `support` `category id` - category to open new support channels under.\n**,admin** `archive` `category id` - category to move archived channels under.')
    }

    message.channel.send(embed)

};

exports.conf = {
    aliases: ['administration'],
    permLevel: 4,
    enabled: true
};

exports.help = {
    name: 'admin',
    description: 'admin komutu',
    usage: 'admin'
};