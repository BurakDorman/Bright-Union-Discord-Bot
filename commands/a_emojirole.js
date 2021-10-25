const Discord = require("discord.js")
var db = require('quick.db')

const embed = new Discord.MessageEmbed()
    .setColor('#30d5c8')
    .setTimestamp()

exports.run = async (client, message, args) => {
    (message.guild.id === "890247463817072671")
    embed.setFooter(`${message.author.username}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=2048`)
    let role = message.mentions.roles.first()
    let emoji = args[0]
    
    if (role && db.has(`guilds_${message.guild.id}.emojirol`)) {

        db.set(`guilds_${message.guild.id}.emojirol.${emoji}`,
            role.id
        )
        embed.setDescription(`From now on, role ${role} can be taken with ${emoji} reaction on <#${db.get(`guilds_${message.guild.id}.emojirol.channel`)}> channel.`)

    } else {

        embed.setDescription('Emojirole function is not activated or the role you put is invalid.')
    }

    message.channel.send(embed)

};

exports.conf = {
    aliases: [],
    permLevel: 4,
    enabled: true
};

exports.help = {
    name: 'emojirole',
    description: 'emojirol command',
    usage: 'emojirole'
};