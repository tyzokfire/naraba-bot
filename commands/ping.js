exports.run = (client, message, args) => {
    var Discord = require("discord.js");
      message.delete();
      message.reply(`Mon ping est de ${client.ws.ping}ms`);
    
  };