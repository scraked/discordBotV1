const Discord = require('discord.js');
const config = require('../config.json');




exports.help = {

name = 'logs-test';

if(message.channel.type === "dm") return;
if(message.author.bot ) return

};


const userData = require ('../models/User.js')
 userData.findOne({
 userId: message.author.id,
}, async (err, blacklist) => {
if (blacklist === true ) return;

})

const settings = require("..models/settings.js");
settings.findOne({
guildID: message.guildID
}, async (err , settings =>)






})
