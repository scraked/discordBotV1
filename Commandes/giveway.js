const Discord = require("discord.js");
const { Module } = require("module");
const config = require("./config.json");
module.exports.run = async (client, message, args) => {
  message.delete();
  const patreonEmbed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle("🎁・Pour lancer un giveaway :")
    .setURL("")
    .setAuthor(config.Speudo, config.Image, "")
    .setDescription("")
    .setThumbnail(config.Image)
    .addFields({
      name: "€start #chanel 250s 1 Cadeaux",
      value: "Bon giveaway !",
    })
    .setTimestamp()
    .setFooter(config.Speudo, config.Image);

  message.channel.send(patreonEmbed);
};

module.exports.help = {
  name: "giveaway"
};
