const Utils = require('../modules/utils');
const ZUtils = require('../ZUtils');
const CommandHandler = require('../modules/handlers/CommandHandler');
const EventHandler = require('../modules/handlers/EventHandler.js');
const CustomConfig = require('../modules/CustomConfig.js');
const Discord = require('discord.js');

module.exports = async bot => {
    const db = await ZUtils.setupDatabase();
    ZUtils.setupTable(db, "statuschannels", "guild, channel");

    const config = new CustomConfig(`./addon_configs/StatusChannels.yml`, {
        Enabled: true,
        Permission: "Developer",
        Guild: "870501599750004766",
        "~1": "Interval time in Seconds",
        Interval: 60,
        "~2": "Available Types: online, dnd, idle, offline",
        Channels: [
            {
                Layout: "{online-count} 🟢"
            },
            {
                Layout: "{dnd-count} 🔴"
            },
            {
                Layout: "{idle-count} 🟠"
            },
            {
                Layout: "{offline-count} ⚫"
            }
        ],
    }, { development: false });
    if(!config.Enabled) return console.log(ZUtils.infoPrefix, 'StatusChannels is disabled in config. Disabling Addon Features.. ');

    /**
     * 
     * @param {String} layout 
     * @param {Discord.Guild} guild 
     */
    const getName = async (layout, guild) => {
        const members = await guild.members.fetch();
        layout = layout.replace(/{online-count}/g, members.filter(m => m.presence && m.presence.status == 'online').size)
            .replace(/{dnd-count}/g, members.filter(m => m.presence && m.presence.status == 'dnd').size)
            .replace(/{idle-count}/g, members.filter(m => m.presence && m.presence.status == 'idle').size)
            .replace(/{offline-count}/g, members.filter(m => m.presence && m.presence.status == 'offline').size);

        return layout;
    }

    setInterval(async () => {
        const guild = bot.guilds.cache.get(config.Guild);
        if(guild) {
            let data = db.prepare(`SELECT * FROM statuschannels WHERE guild=?`).all(guild.id);
            if(data && data.length > 0) {
                for (let index = 0; index < data.length; index++) {
                    const ch = data[index];
                    if(ch && ch.channel) {
                        let channel = Utils.findChannel(ch.channel, guild, 'voice', false)
                        if(channel) {
                            channel.setName(await getName(config.Channels[index].Layout, guild)).catch(e => {})
                        }
                    }
                }
            } else {
                for (let index = 0; index < config.Channels.length; index++) {
                    let channelName = config.Channels[index].Layout ? await getName(config.Channels[index].Layout, guild) : false
                    if(channelName) {
                        guild.channels.create(channelName, {
                            type: 'voice',
                            permissionOverwrites: [
                                {
                                    id: guild.id,
                                    deny: [
                                        'CONNECT',
                                        'SPEAK'
                                    ],
                                    allow: [
                                        'VIEW_CHANNEL'
                                    ]
                                }
                            ]
                        }).then(channel => {
                            db.prepare(`INSERT INTO statuschannels (guild, channel)VALUES(?,?)`).run(guild.id, channel.id)
                        }).catch(e => {
                            console.log(ZUtils.errorPrefix, `An error occured while creating Status Channel`, e)
                        })
                    }
                }
            }
        }
    }, config.Interval*1000);

    CommandHandler.set({
        name: "resetstatuschannels",
        run: async (bot, message, args, { prefixUsed, commandUsed }) => {
            if(!Utils.hasPermission(message.member, config.Permission)) return message.channel.send(Utils.Embed({
                preset: 'nopermission'
            }))
            await message.delete()
            await db.prepare(`DROP TABLE statuschannels`).run()
            await ZUtils.setupTable(db, "statuschannels", "guild, channel");
        },
        description: "Reset's StatusChannels Database",
        usage: "resetstatuschannels",
        aliases: [],
        type: "admin"
    })
}
