const Discord = require("discord.js");
const config = require("./config.json");

module.exports.run = async (client, message, args) => {
  message.delete();
  const botinfoEmbed = new Discord.MessageEmbed()
    .setColor("#00BDFF")
    .setTitle("📈・Information concernant le bot !")
    .setURL("https://scraked.com")
    .setAuthor(config.Speudo, config.Image, "https://scraked.com")
    .setThumbnail(config.Image)
    .addFields(
      { name: "\u200B", value: "\u200B" },
      { name: "✨ | Création :", value: "27/10/23", inline: true },
      { name: "⌨ | Développeur :", value: "scraked", inline: true }
    )
    .addField("Présence :", `${client.guilds.cache.size} serveurs`, true)
    .setTimestamp()
    .setFooter(config.Speudo, config.Image);

  message.channel.send(botinfoEmbed);
};

module.exports.help = {
  name: "ibot"
};
