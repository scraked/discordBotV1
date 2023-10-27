const Discord = require("discord.js");
const colors = require("colors");
client.config = require("./config2.json");

client.login(client.config.token);

client.on("ready", () => {
  console.log(
    `${client.user.tag} is now Online! Prefix: ${client.config.prefix}`.bgGreen
  );
  //client.user.setActivity("Hello world", {type: "STREAMING", url: "https://twitch.tv/#"})
});

require("./logger")(client);
//const logger = require("./logger");
//logger(client)
