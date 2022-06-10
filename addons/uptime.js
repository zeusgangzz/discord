const Utils = require('../modules/utils');
const CommandHandler = require('../modules/handlers/CommandHandler');
const Embed = Utils.Embed;
const chalk = require("chalk");

module.exports = async bot => {
    const CustomConfig = require('../modules/CustomConfig.js');
    const config = new CustomConfig('./addon_configs/uptime.yml', {
        "Command": {
            "Command": "uptime",
            "Description": "Allows you to check the uptime of your bot",
        },
        "Embed": "true",
        "EmbedMessage": {
            "Description": "The current uptime is %time%",
        },
        "NormalMessage": "The current uptime is %time%",
        "Time": {
            "Days": " days",
            "Day": " day",
            "Hours": " hours",
            "Minutes": " minutes",
            "Seconds": " seconds"
        }
    })
    CommandHandler.set({
        name: config.Command.Command,
        run: async (bot, message, args) => {
            let totalSeconds = (bot.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);

            if (days === 1) lazyme = config.Time.Day
            else lazyme = config.Time.Days

            let time = `${days > 0 ? days + lazyme : ''}${hours > 0 ? hours + config.Time.Hours : ''}${minutes > 0 ? minutes + config.Time.Minutes : ''}${seconds > 0 ? seconds + config.Time.Seconds : ''}`

        console.log("Bot uptime:" + time)
        if(config.Embed === "false") {
            message.channel.send(config.NormalMessage.replace(/%time%/g, time))
        } else {
            message.channel.send(Utils.setupEmbed({
                configPath: config.EmbedMessage,
                variables: [
                    { searchFor: /%time%/g, replaceWith: time }
                ]
            }))
        }
        
        },
        description: config.Command.Description,
        usage: 'uptime',
        aliases: ["onlinetime"],
        type: 'general'
    })
    const chalk = require("chalk");
    let prefix = chalk.hex("#fa1ef3").bold("[UPTIME ADDON] ")
    
    
    console.log(prefix + "has been loaded")
}