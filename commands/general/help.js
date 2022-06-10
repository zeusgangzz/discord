const Discord = require("discord.js");
const Utils = require("../../modules/utils.js")
const Embed = Utils.Embed;
const { config, lang } = Utils.variables;
const fs = require("fs");
const Commands = require('../../modules/handlers/CommandHandler').commands;

module.exports = {
  name: 'help',
  run: async (bot, message, args) => {
    const prefix = await Utils.variables.db.get.getPrefixes(message.guild.id);
    let modules = {
      fun: await Utils.variables.db.get.getModules('fun'),
      minecraft: await Utils.variables.db.get.getModules('minecraft'),
      
    }

    let musicAddon = fs.existsSync("./addons/music.js");
    let ultimateMusicAddon = fs.existsSync("./addons/ultimatemusic.js");

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }
    let command = args[0] ? Commands.filter(c => !['mod', 'admin', 'management', 'giveaways', 'utils', 'staff'].includes(c.type)).find(c => c.command == args[0].toLowerCase() || c.aliases.find(a => a == args[0].toLowerCase())) : undefined;
    if (args[0] && command && args[0] !== "coins" && args[0] !== "xp") {
      return message.channel.send(Embed({
        title: capitalize(command.command) + ' Command',
        fields: [
          { name: 'Description', value: command.description },
          { name: 'Aliases', value: command.aliases.map(a => prefix + a).join('\n').length < 1 ? 'None' : command.aliases.map(a => prefix + a).join('\n') },
          { name: 'Usage', value: prefix + command.usage },
          { name: 'Type', value: capitalize(command.type) }
        ]
      }))
    }

    let CommandList = require("../../modules/methods/generateHelpMenu");
    if (!CommandList.normal || !CommandList.staff) await CommandList.setup();

    if (config.Other.HelpMenu == 'categorized') {
      let help = Utils.setupEmbed({
        configPath: Utils.variables.embeds.Embeds.CategorizedHelp,
        title: lang.Help.HelpMenuTitle,
        variables: [
          { searchFor: /{prefix}/g, replaceWith: prefix }
        ]
      })

      let embeds = {
        fun: Embed({
          title: lang.Help.CategoryMenuTitles[8],
          description: CommandList.normal.fun.replace(/{prefix}/g, prefix)
        }),
        minecraft: Embed({
          title: lang.Help.CategoryMenuTitles[9],
          description: CommandList.normal.minecraft.replace(/{prefix}/g, prefix)
        }),
      }

      function sendHelpMenu() {
        message.channel.send(help).then(async msg => {
          if (modules.minecraft && modules.minecraft.enabled == true && CommandList.normal.minecraft.length > 0) await msg.react('⛏️');
          if (modules.fun &&
          modules.fun.enabled == true && CommandList.normal.fun.length > 0) await msg.react('🎮');
        });
      }

      const category = args[0] ? args[0].toLowerCase() : undefined;

      if (category) {
        if (category == 'fun' && modules.fun 
        && modules.fun.enabled == true && CommandList.normal.fun.length > 0) return message.channel.send(embeds.fun);
        else if (category == 'minecraft' && modules.minecraft && modules.minecraft.enabled == true && CommandList.normal.minecraft.length > 0) return message.channel.send(embeds.minecraft);
        else sendHelpMenu()
      } else sendHelpMenu()
    }
    if (['normal', 'dm'].includes(config.Other.HelpMenu)) {
      let help = Embed({
        title: lang.Help.HelpMenuTitle,
        fields: []
      });

      
      if (modules.fun && modules.fun.enabled == true && CommandList.normal.fun.length > 0) {
        if (CommandList.normal.fun.length <= 1024) {
          help.embed.fields.push({ name: lang.Help.CategoryNames[8], value: CommandList.normal.fun.replace(/{prefix}/g, prefix) });
        } else {
          let desc = CommandList.normal.fun.replace(/{prefix}/g, prefix)
          help.embed.fields.push({ name: lang.Help.CategoryNames[8], value: desc.substring(0, desc.substring(0, 1024).lastIndexOf('**' + prefix)) });
          help.embed.fields.push({ name: '\u200B', value: desc.substring(desc.substring(0, 1024).lastIndexOf('**' + prefix)) });
        }
      }

      if (modules.minecraft && modules.minecraft.enabled == true && CommandList.normal.minecraft.length > 0) {
        if (CommandList.normal.minecraft.length <= 1024) {
          help.embed.fields.push({ name: lang.Help.CategoryNames[9], value: CommandList.normal.minecraft.replace(/{prefix}/g, prefix) });
        } else {
          let desc = CommandList.normal.minecraft.replace(/{prefix}/g, prefix)
          help.embed.fields.push({ name: lang.Help.CategoryNames[9], value: desc.substring(0, desc.substring(0, 1024).lastIndexOf('**' + prefix)) });
          help.embed.fields.push({ name: '\u200B', value: desc.substring(desc.substring(0, 1024).lastIndexOf('**' + prefix)) });
        }
      }



      if (help.embed.fields.length == 0) return;
      if (config.Other.HelpMenu == 'dm') {
        message.member.send(help)
          .then(msg => {
            message.channel.send(Embed({
              title: lang.Help.HelpMenuTitle,
              description: lang.Help.SentToDMs,
              color: config.EmbedColors.Success
            }))
          })
          .catch(err => {
            return message.channel.send(Embed({ preset: "error", description: lang.Help.DMsLocked }))
          })
      } else message.channel.send(help)
    }
  },
  description: "View the command help menu",
  usage: 'help',
  aliases: []
}
// 239232   8501   2229706    63250   1613689679   cbaec11249867eb0e721b4b8f3cd55d993b7017f   2229706