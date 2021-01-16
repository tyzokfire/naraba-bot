exports.run = (client, message, args) => {
    var Discord = require("discord.js");
      message.delete();
      message.channel.startTyping()
      let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag} - Commande Aide`)
      .setDescription("Mon prefix est `.`")
      .setColor('RED')
      .setThumbnail()
      .addField("Utils", "ping")
      .setFooter(`${client.user.tag} - 2021`)
      .setTimestamp()
      
            message.channel.send(embed)
          message.channel.stopTyping()
  };