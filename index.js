const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzIyOTE5NjEwODk4NDQ4NDQ0.XuqGnA.7nRPTf3MDLc5OknLiVccc4fGlMg';

bot.on('ready', () => {
    console.log('this bot is online!');
})

bot.on('message', msg=>{
    if (msg.content.toLowerCase().includes("anime")) {
        msg.reply("uwu");
    }
})
bot.login(token);