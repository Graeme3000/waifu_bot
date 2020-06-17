const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('this bot is online!');
})

bot.on('message', msg=>{
    if (msg.content.toLowerCase().includes("anime")) {
        msg.reply("uwu");
    }
})

bot.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret