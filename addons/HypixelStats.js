const client = require("discord.js")
const Utils = require('../modules/utils')
const CommandHandler = require('../modules/handlers/CommandHandler')
const Embed = Utils.Embed;
const fetch = require('node-fetch');

const CustomConfig = require('../modules/CustomConfig.js');
const { isNull, replace } = require("lodash");
const config = new CustomConfig('./addon_configs/HypixelStats.yml', {
    "NoRank": "Default",
    "NoGuild": "No Guild",

    Embeds: {

        Bedwars_Stats: {
            Title: "Bedwars Stats for {Player}",
            Thumbnail: "{bustAvatar}",
            Fields: [

                {
                  name: "Level",
                  value: "{Level}",
                  inline: true,
                },
                {
                  name: "Wins",
                  value: "{Wins}",
                  inline: true,
                },
                {
                  name: "Losses",
                  value: "{Losses}",
                  inline: true,
                },
                {
                  name: "Games Played",
                  value: "{GamesPlayed}",
                  inline: true,
                },
                {
                  name: "Kills",
                  value: "{Kills}",
                  inline: true,
                },
                {
                  name: "Deaths",
                  value: "{Deaths}",
                  inline: true,
                },
                {
                    name: "K/D Ratio",
                    value: "{KDRatio}",
                    inline: true,
                },
                {
                    name: "W/L Ratio",
                    value: "{WLRatio}",
                    inline: true,
                },
                {
                    name: "Beds Per Game",
                    value: "{BedsPerGame}",
                    inline: true,
                },
                {
                    name: "Final Kills",
                    value: "{FinalKills}",
                    inline: true,
                },
                {
                    name: "Final Deaths",
                    value: "{FinalDeaths}",
                    inline: true,
                },
                {
                    name: "FK/DR",
                    value: "{FKDR}",
                    inline: true,
                },
                {
                    name: "Void Kills",
                    value: "{VoidKills}",
                    inline: true,
                },
                {
                    name: "Void Deaths",
                    value: "{VoidDeaths}",
                    inline: true,
                },
                {
                    name: "Current Win Streak",
                    value: "{CurrentWinStreak}",
                    inline: true,
                },

              ]
        },

        Skywars_Stats: {
            Title: "Skywars Stats for {Player}",
            Thumbnail: "{bustAvatar}",
            "~": "Image Placeholder: {SWStatsImage}",
            Fields: [

                {
                  name: "Level",
                  value: "{Level}",
                  inline: true,
                },
                {
                    name: "Coins",
                    value: "{Coins}",
                    inline: true,
                },
                {
                  name: "Wins",
                  value: "{Wins}",
                  inline: true,
                },
                {
                  name: "Losses",
                  value: "{Losses}",
                  inline: true,
                },
                {
                    name: "Games Played",
                    value: "{GamesPlayed}",
                    inline: true,
                },
                {
                  name: "Kills",
                  value: "{Kills}",
                  inline: true,
                },
                {
                  name: "Deaths",
                  value: "{Deaths}",
                  inline: true,
                },
                {
                    name: "Assists",
                    value: "{Assists}",
                    inline: true,
                },
                {
                    name: "K/D Ratio",
                    value: "{KDRatio}",
                    inline: true,
                },
                {
                    name: "W/L Ratio",
                    value: "{WLRatio}",
                    inline: true,
                },
                {
                    name: "Souls",
                    value: "{Souls}",
                    inline: true,
                },
                { 
                    name: "Blocks Placed",
                    value: "{BlocksPlaced}",
                    inline: true,
                },
                { 
                    name: "Eggs Thrown",
                    value: "{EggsThrown}",
                    inline: true,
                },
                { 
                    name: "Pearls Thrown",
                    value: "{PearlsThrown}",
                    inline: true,
                },
                { 
                    name: "Arrows Shot",
                    value: "{ArrowsShow}",
                    inline: true,
                },
                 
                 

              ]
        },

        Duels_Stats: {
            Title: "Duels Stats for {Player}",
            Thumbnail: "{bustAvatar}",
            Fields: [

                {
                  name: "Wins",
                  value: "{Wins}",
                  inline: true,
                },
                {
                    name: "Losses",
                    value: "{Losses}",
                    inline: true,
                },
                {
                  name: "Games Played",
                  value: "{GamesPlayed}",
                  inline: true,
                },
                {
                  name: "Kills",
                  value: "{Kills}",
                  inline: true,
                },
                {
                  name: "Deaths",
                  value: "{Deaths}",
                  inline: true,
                },
                {
                  name: "K/D Ratio",
                  value: "{KDRatio}",
                  inline: true,
                },
                {
                    name: "W/L Ratio",
                    value: "{WLRatio}",
                    inline: true,
                },
                {
                    name: "Best Winstreak",
                    value: "{BestWinstreak}",
                    inline: true,
                },
                {
                    name: "Current Winstreak",
                    value: "{CurrentWinstreak}",
                    inline: true,
                },

              ]
        },

        Player_Stats: {
            Title: "{Player}'s Hypixel Stats",
            Thumbnail: "{bustAvatar}",
            Image: "{levelEXPBar}",
            "~": "^ Possible placeholders: {levelEXPBar}, {achievementPointsEXPBar}",
            "~1": "If you want to use a different generator you can use {Player} or {UUID}",
            Fields: [

                {
                  name: "Level",
                  value: "{Level}",
                  inline: true,
                },
                {
                    name: "Rank",
                    value: "{Rank}",
                    inline: true,
                  },

                {
                  name: "Achievement Points",
                  value: "{achievementPoints}",
                  inline: true,
                },
                {
                  name: "Quests Completed",
                  value: "{questsCompleted}",
                  inline: true,
                },
                {
                  name: "EXP",
                  value: "{exp}",
                  inline: true,
                },
                {
                  name: "Total Kills",
                  value: "{totalKills}",
                  inline: true,
                },
                {
                    name: "Online Status",
                    value: "{onlineStatus}",
                    inline: true,
                },
                {
                    name: "Lastest Version",
                    value: "{lastestVersion}",
                    inline: true,
                },
                {
                    name: "Recent Game",
                    value: "{latestGame}",
                    inline: true,
                },
                {
                    name: "Guild",
                    value: "{Guild}",
                    inline: true,
                },
                {
                    name: "Karma",
                    value: "{Karma}",
                    inline: true,
                },
                {
                    name: "Best Daily Reward Streak",
                    value: "{dailyRewardStreakBest}",
                    inline: true,
                },
                {
                    name: "First Login",
                    value: "{firstLogin}",
                    inline: true,
                },
                {
                    name: "Lastest Login",
                    value: "{lastLogin}",
                    inline: true,
                },
                {
                    name: "Lastest Logout",
                    value: "{lastLogout}",
                    inline: true,
                },
                

              ]
        },
        
        Guild: {
            Title: "Hypixel Guild: {Name}",
            Thumbnail: "{bustAvatar}",
            Fields: [

                {
                  name: "Tag",
                  value: "{Tag}",
                  inline: true,
                },
                {
                    name: "Level",
                    value: "{Level}",
                    inline: true,
                },
                {
                    name: "EXP",
                    value: "{EXP}",
                    inline: true,
                },

                {
                  name: "Created",
                  value: "{Created}",
                  inline: true,
                },
                {
                  name: "Public?",
                  value: "{PublicStatus}",
                  inline: true,
                },
                {
                  name: "Members",
                  value: "{Members}",
                  inline: true,
                },
                

              ]
        },
        Bedwars_Compare: {
            Title: "Bedwars Stats for {Player1} VS {Player2}",
            Description: "{Player1}   |   {Player2}" ,
            Thumbnail: "https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png",
            Fields: [

                {
                  name: "Level",
                  value: "{Player1_Level} | {Player2_Level}",
                  inline: true,
                },
                {
                  name: "Wins",
                  value: "{Player1_Wins} | {Player2_Wins}",
                  inline: true,
                },
                {
                  name: "Losses",
                  value: "{Player1_Losses} | {Player2_Losses}",
                  inline: true,
                },
                {
                  name: "Games Played",
                  value: "{Player1_GamesPlayed} | {Player2_GamesPlayed}",
                  inline: true,
                },
                {
                  name: "Kills",
                  value: "{Player1_Kills} | {Player2_Kills}",
                  inline: true,
                },
                {
                  name: "Deaths",
                  value: "{Player1_Deaths} | {Player2_Deaths}",
                  inline: true,
                },
                {
                    name: "K/D Ratio",
                    value: "{Player1_KDRatio} | {Player2_KDRatio}",
                    inline: true,
                },
                {
                    name: "W/L Ratio",
                    value: "{Player1_WLRatio} | {Player2_WLRatio}",
                    inline: true,
                },
                {
                    name: "Beds Per Game",
                    value: "{Player1_BedsPerGame} | {Player2_BedsPerGame}",
                    inline: true,
                },
                {
                    name: "Final Kills",
                    value: "{Player1_FinalKills} | {Player2_FinalKills}",
                    inline: true,
                },
                {
                    name: "Final Deaths",
                    value: "{Player1_FinalDeaths} | {Player2_FinalDeaths}",
                    inline: true,
                },
                {
                    name: "FK/DR",
                    value: "{Player1_FKDR} | {Player2_FKDR}",
                    inline: true,
                },
                {
                    name: "Void Kills",
                    value: "{Player1_VoidKills} | {Player2_VoidKills}",
                    inline: true,
                },
                {
                    name: "Void Deaths",
                    value: "{Player1_VoidDeaths} | {Player2_VoidDeaths}",
                    inline: true,
                },
                {
                    name: "Current Win Streak",
                    value: "{Player1_CurrentWinStreak} | {Player2_CurrentWinStreak}",
                    inline: true,
                },

              ]
        },
        Skywars_Compare: {
            Title: "Skywars Stats for {Player1} VS {Player2}",
            Thumbnail: "https://hypixel.net/styles/hypixel-v2/images/game-icons/Skywars-64.png",
            Description: "{Player1}   |   {Player2}",
            Fields: [

                {
                  name: "Level",
                  value: "{Player1_Level} | {Player2_Level}",
                  inline: true,
                },
                {
                    name: "Coins",
                    value: "{Player1_Coins} | {Player2_Coins}",
                    inline: true,
                },
                {
                  name: "Wins",
                  value: "{Player1_Wins} | {Player2_Wins}",
                  inline: true,
                },
                {
                  name: "Losses",
                  value: "{Player1_Losses} | {Player2_Losses}",
                  inline: true,
                },
                {
                    name: "Games Played",
                    value: "{Player1_GamesPlayed} | {Player2_GamesPlayed}",
                    inline: true,
                },
                {
                  name: "Kills",
                  value: "{Player1_Kills} | {Player2_Kills}",
                  inline: true,
                },
                {
                  name: "Deaths",
                  value: "{Player1_Deaths} | {Player2_Deaths}",
                  inline: true,
                },
                {
                    name: "Assists",
                    value: "{Player1_Assists} | {Player2_Assists}",
                    inline: true,
                },
                {
                    name: "K/D Ratio",
                    value: "{Player1_KDRatio} | {Player2_KDRatio}",
                    inline: true,
                },
                {
                    name: "W/L Ratio",
                    value: "{Player1_WLRatio} | {Player2_WLRatio}",
                    inline: true,
                },
                {
                    name: "Souls",
                    value: "{Player1_Souls} | {Player2_Souls}",
                    inline: true,
                },
                { 
                    name: "Blocks Placed",
                    value: "{Player1_BlocksPlaced} | {Player2_BlocksPlaced}",
                    inline: true,
                },
                { 
                    name: "Eggs Thrown",
                    value: "{Player1_EggsThrown} | {Player2_EggsThrown}",
                    inline: true,
                },
                { 
                    name: "Pearls Thrown",
                    value: "{Player1_PearlsThrown} | {Player2_PearlsThrown}",
                    inline: true,
                },
                { 
                    name: "Arrows Shot",
                    value: "{Player1_ArrowsShow} | {Player2_ArrowsShow}",
                    inline: true,
                },
              ]
            },

              Duels_Compare: {
                Title: "Duels Stats for {Player1} VS {Player2}",
                Description: "{Player1}   |   {Player2}",
                Thumbnail: "https://hypixel.net/styles/hypixel-v2/images/game-icons/Duels-64.png",
                Fields: [
    
                    {
                      name: "Wins",
                      value: "{Player1_Wins} | {Player2_Wins}",
                      inline: true,
                    },
                    {
                        name: "Losses",
                        value: "{Player1_Losses} | {Player2_Losses}",
                        inline: true,
                    },
                    {
                      name: "Games Played",
                      value: "{Player1_GamesPlayed} | {Player2_GamesPlayed}",
                      inline: true,
                    },
                    {
                      name: "Kills",
                      value: "{Player1_Kills} | {Player2_Kills}",
                      inline: true,
                    },
                    {
                      name: "Deaths",
                      value: "{Player1_Deaths} | {Player2_Deaths}",
                      inline: true,
                    },
                    {
                      name: "K/D Ratio",
                      value: "{Player1_KDRatio} | {Player2_KDRatio}",
                      inline: true,
                    },
                    {
                        name: "W/L Ratio",
                        value: "{Player1_WLRatio} | {Player2_WLRatio}",
                        inline: true,
                    },
                    {
                        name: "Best Winstreak",
                        value: "{Player1_BestWinstreak} | {Player2_BestWinstreak}",
                        inline: true,
                    },
                    {
                        name: "Current Winstreak",
                        value: "{Player1_CurrentWinstreak} | {Player2_CurrentWinstreak}",
                        inline: true,
                    },
    
                  ]
        },
        Bans: {
            Title: "Hypixel Ban Stats",
            Fields: [

                {
                  name: "Watchdog - Last Minnute",
                  value: "{watchdogLastMin}",
                  inline: false,
                },
                {
                    name: "Watchdog - Daily",
                    value: "{watchdogDaily}",
                    inline: false,
                },
                {
                  name: "Watchdog - Total",
                  value: "{watchdogTotal}",
                  inline: false,
                },
                {
                  name: "Staff - Daily",
                  value: "{staffDaily}",
                  inline: false,
                },
                {
                  name: "Staff - Total",
                  value: "{staffTotal}",
                  inline: false,
                },

              ]
    },


        invalidArgs: {
            Title: "Uh Oh! I think you forgot something. The command is {prefix}{command} <player>",
        },

        invalidArgs_guild: {
            Title: "Uh Oh! I think you forgot something. The command is {prefix}{command} <player/guild>",
        },

        invalidArgs_compare: {
            Title: "Uh Oh! I think you forgot something. The command is {prefix}{command} <player1> <player2>",
        },

        noPlayer: {
            Title: "Uh Oh! I searched far and wide but I could not find {Player}",
        },

        noPlayer_guild: {
            Title: "Uh Oh! I searched far and wide but I could not find {Player} in a guild!",
        },

        error: {
            Title: "Error!",
            Description: "An error has happened! \n**Possible Causes:**\n> API Down\n> Player Is Bannned From Hypixel\n> Player Never Joined Hypixel",
        },
    }
    
})

module.exports = async bot => {

    CommandHandler.set({
        name: "bw",
        run: async (bot, message, args, { prefixUsed, commandUsed }) => {
            try {
                message.channel.startTyping()

                let player = args[0]

                if(!player){ 

                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.invalidArgs,
                        variables: [
                            { searchFor: /{command}/g, replaceWith: "bw" },
                            { searchFor: /{prefix}/g, replaceWith: prefixUsed },
                        ]
                    }))
                    message.channel.stopTyping()

                    }


        if(player){ 
            const api = await fetch(`https://api.slothpixel.me/api/players/${player}`).then(response => response.json());
        		if (!api.uuid) { 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.noPlayer,
                        variables: [
                            { searchFor: /{Player}/g, replaceWith: args[0]},
                        ]
                    }))
                    message.channel.stopTyping()

				}

              if (api.uuid) { 
                message.channel.stopTyping()

                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.Bedwars_Stats,
                
                    variables: [
                        { searchFor: /{bustAvatar}/g, replaceWith: `https://visage.surgeplay.com/bust/${api.uuid}` },
                        { searchFor: /{Player}/g, replaceWith: api.username },
                        { searchFor: /{UUID}/g, replaceWith: api.uuid },
                        { searchFor: /{Level}/g, replaceWith: api.stats.BedWars.level },
                        { searchFor: /{Wins}/g, replaceWith: api.stats.BedWars.wins },
                        { searchFor: /{Losses}/g, replaceWith: api.stats.BedWars.losses },
                        { searchFor: /{GamesPlayed}/g, replaceWith: api.stats.BedWars.games_played },
                        { searchFor: /{Kills}/g, replaceWith: api.stats.BedWars.kills },
                        { searchFor: /{Deaths}/g, replaceWith: api.stats.BedWars.deaths },
                        { searchFor: /{KDRatio}/g, replaceWith: api.stats.BedWars.k_d.toFixed(2) },
                        { searchFor: /{WLRatio}/g, replaceWith: api.stats.BedWars.w_l.toFixed(2) },
                        { searchFor: /{BedsPerGame}/g, replaceWith: api.stats.BedWars.bed_ratio.toFixed(2) },
                        { searchFor: /{FinalKills}/g, replaceWith: api.stats.BedWars.final_kills },
                        { searchFor: /{FinalDeaths}/g, replaceWith: api.stats.BedWars.final_deaths },
                        { searchFor: /{FKDR}/g, replaceWith: api.stats.BedWars.final_k_d.toFixed(2) },
                        { searchFor: /{VoidKills}/g, replaceWith: api.stats.BedWars.void_kills },
                        { searchFor: /{VoidDeaths}/g, replaceWith: api.stats.BedWars.void_deaths },
                        { searchFor: /{CurrentWinStreak}/g, replaceWith: api.stats.BedWars.winstreak },
                    ]
                }))
            }
            }
            
        } catch (e) {
            message.channel.send(Utils.setupEmbed({
                configPath: config.Embeds.error,
            }))
                message.channel.stopTyping()
                return console.error(e);
            }
            message.channel.stopTyping()
        },
        description: "Sends stats about a Hypixel Bedwars player.",
        usage: "bedwars <player>",
        aliases: [ "bw", "hbw" ],
        type: "fun"
    })

    CommandHandler.set({
        name: "skywars",
        run: async (bot, message, args, { prefixUsed, commandUsed }) => {
            try {
                message.channel.startTyping()

                let player = args[0]

                if(!player){ 

                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.invalidArgs,
                        variables: [
                            { searchFor: /{command}/g, replaceWith: "skywars" },
                            { searchFor: /{prefix}/g, replaceWith: prefixUsed },
                        ]
                    }))
                    message.channel.stopTyping()
                    }

        if(player){ 
            const api = await fetch(`https://api.slothpixel.me/api/players/${player}`).then(response => response.json());
        		if (!api.uuid) { 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.noPlayer,
                        variables: [
                            { searchFor: /{Player}/g, replaceWith: args[0]},
                        ]
                    }))
                    message.channel.stopTyping()

				}


              if (api.uuid) { 
                message.channel.stopTyping()
                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.Skywars_Stats,
                
                    variables: [    
                        { searchFor: /{bustAvatar}/g, replaceWith: `https://visage.surgeplay.com/bust/${api.uuid}` },
                        { searchFor: /{Player}/g, replaceWith: api.username },
                        { searchFor: /{UUID}/g, replaceWith: api.uuid },
                        { searchFor: /{SWStatsImage}/g, replaceWith: `https://hypixel.paniek.de/signature/${api.uuid}/skywars-simple` },
                        { searchFor: /{Level}/g, replaceWith: api.stats.SkyWars.level.toFixed(2) },
                        { searchFor: /{Coins}/g, replaceWith: api.stats.SkyWars.coins },
                        { searchFor: /{Wins}/g, replaceWith: api.stats.SkyWars.wins },
                        { searchFor: /{Losses}/g, replaceWith: api.stats.SkyWars.losses },
                        { searchFor: /{GamesPlayed}/g, replaceWith: api.stats.SkyWars.wins + api.stats.SkyWars.losses },
                        { searchFor: /{Kills}/g, replaceWith: api.stats.SkyWars.kills },
                        { searchFor: /{Deaths}/g, replaceWith: api.stats.SkyWars.deaths },
                        { searchFor: /{Assists}/g, replaceWith: api.stats.SkyWars.assists },
                        { searchFor: /{KDRatio}/g, replaceWith: api.stats.SkyWars.kill_death_ratio.toFixed(2) },
                        { searchFor: /{WLRatio}/g, replaceWith: api.stats.SkyWars.win_loss_ratio.toFixed(2) },
                        { searchFor: /{Souls}/g, replaceWith: api.stats.SkyWars.souls },
                        { searchFor: /{BlocksPlaced}/g, replaceWith: api.stats.SkyWars.blocks_placed },
                        { searchFor: /{EggsThrown}/g, replaceWith: api.stats.SkyWars.eggs_thrown },
                        { searchFor: /{PearlsThrown}/g, replaceWith: api.stats.SkyWars.enderpearls_thrown },
                        { searchFor: /{ArrowsShow}/g, replaceWith: api.stats.SkyWars.arrows_shot },
                    ]
                }))
            }
            }
            
            } catch (e) {
                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.error,
                }))
                message.channel.stopTyping()
                return console.error(e);
                
            }
            message.channel.stopTyping()
        },
        description: "Sends stats about a Hypixel Skywars player.",
        usage: "skywars <user>",
        aliases: [ "sw", "hsw" ],
        type: "fun"
    })

    CommandHandler.set({
        name: "player",
        run: async (bot, message, args, { prefixUsed, commandUsed }) => {
            try {
                message.channel.startTyping()

                let player = args[0]

                if(!player){ 

                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.invalidArgs,
                        variables: [
                            { searchFor: /{command}/g, replaceWith: "player" },
                            { searchFor: /{prefix}/g, replaceWith: prefixUsed },
                        ]
                    }))
                    message.channel.stopTyping()
                    }

        if(player){ 
            const api = await fetch(`https://api.slothpixel.me/api/players/${player}`).then(response => response.json());
        		if (!api.uuid) { 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.noPlayer,
                        variables: [
                            { searchFor: /{Player}/g, replaceWith: args[0]},
                        ]
                    }))
                    message.channel.stopTyping()

				}


              if (api.uuid) { 

                const guildAPI = await fetch(`https://api.slothpixel.me/api/guilds/${player}`).then(response => response.json());
                message.channel.stopTyping()
                if(api.online){var online = "Online";}
                
                if(!api.online){ var online = "Offline"; }

                if(!api.rank){ rank = config.NoRank;}    
                 
                if(api.rank){var rank = api.rank.replace("MVP_PLUS", "MVP+").replace("VIP_PLUS", "VIP+").replace("MVP_PLUS_PLUS", "MVP++").replace("HELPER", "Helper").replace("MODERATOR", "Mod").replace("ADMIN", "Admin").replace("YOUTUBER", "Youtube");}    
                
            
                 if(!guildAPI.name){var guild = config.NoGuild;}    

             if(guildAPI.name){var guild = guildAPI.name;}    
                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.Player_Stats,
                    variables: [
                        { searchFor: /{levelEXPBar}/g, replaceWith: `https://gen.plancke.io/exp/${api.uuid}.png` },
                        { searchFor: /{achievementPointsEXPBar}/g, replaceWith: `https://gen.plancke.io/achievementPoints/${api.uuid}.png` },
                        { searchFor: /{UUID}/g, replaceWith: api.uuid },
                        { searchFor: /{bustAvatar}/g, replaceWith: `https://visage.surgeplay.com/bust/${api.uuid}` },
                        { searchFor: /{Player}/g, replaceWith: api.username },
                        { searchFor: /{Level}/g, replaceWith: api.level },
                        { searchFor: /{Rank}/g, replaceWith: rank },
                        { searchFor: /{Karma}/g, replaceWith: api.karma.toLocaleString() },
                        { searchFor: /{achievementPoints}/g, replaceWith: api.achievement_points },
                        { searchFor: /{questsCompleted}/g, replaceWith: api.quests_completed },
                        { searchFor: /{exp}/g, replaceWith: api.exp.toLocaleString() },
                        { searchFor: /{totalKills}/g, replaceWith: api.total_kills },
                        { searchFor: /{onlineStatus}/g, replaceWith: online },
                        { searchFor: /{lastestVersion}/g, replaceWith: api.mc_version },
                        { searchFor: /{dailyRewardStreakCurrent}/g, replaceWith: api.rewards.streak_current },
                        { searchFor: /{dailyRewardStreakBest}/g, replaceWith: api.rewards.streak_best },
                        { searchFor: /{firstLogin}/g, replaceWith: Intl.DateTimeFormat('en-US').format(api.first_login) },
                        { searchFor: /{lastLogin}/g, replaceWith: Intl.DateTimeFormat('en-US').format(api.last_login) },
                        { searchFor: /{lastLogout}/g, replaceWith: Intl.DateTimeFormat('en-US').format(api.last_logout) },
                        { searchFor: /{latestGame}/g, replaceWith: api.last_game },
                        { searchFor: /{Guild}/g, replaceWith: guild },
                    ]
                }))
     }
            }
            
        } catch (e) {
            message.channel.send(Utils.setupEmbed({
                configPath: config.Embeds.error,
            }))
            message.channel.send("\`\`\`" + e + "\`\`\`")
                message.channel.stopTyping()
                return console.error(e);
            }
            message.channel.stopTyping()
        },
        description: "Send stats on a Hypixel Player",
        usage: "player <ign>",
        aliases: [ "hp", "hplayer", "hypixelstats", "p" ],
        type: "fun"
    })

    CommandHandler.set({
        name: "guild",
        run: async (bot, message, args, { prefixUsed, commandUsed }) => {
            try {

                let player = args[0]

                if(!player){ 

                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.invalidArgs_guild,
                        variables: [
                            { searchFor: /{command}/g, replaceWith: "guild" },
                            { searchFor: /{prefix}/g, replaceWith: prefixUsed },
                        ]
                    }))
                    }

        if(player){ 
            const api = await fetch(`https://api.slothpixel.me/api/guilds/${player}`).then(response => response.json());
        		if (!api.name) { 

                       message.channel.send(Utils.setupEmbed({
                            configPath: config.Embeds.noPlayer_guild,
                          variables: [
                              { searchFor: /{Player}/g, replaceWith: args[0]},
                            ]
                     }))
				}

            const PlayerApi = await fetch(`https://api.slothpixel.me/api/players/${player}`).then(response => response.json());

              if (api.name) { 

                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.Guild,
                    variables: [
                        { searchFor: /{bustAvatar}/g, replaceWith: `https://visage.surgeplay.com/bust/${PlayerApi.uuid}` },
                        { searchFor: /{Name}/g, replaceWith: api.name },
                        { searchFor: /{Tag}/g, replaceWith: api.tag },
                        { searchFor: /{Level}/g, replaceWith: api.level },
                        { searchFor: /{EXP}/g, replaceWith: api.exp.toLocaleString() },
                        { searchFor: /{Created}/g, replaceWith: Intl.DateTimeFormat('en-US').format(api.created) },
                        { searchFor: /{PublicStatus}/g, replaceWith: api.public},
                        { searchFor: /{Members}/g, replaceWith: api.members.length },
                    ]
                }))
              
                }
            }
        } catch (e) {
            message.channel.send(Utils.setupEmbed({
                configPath: config.Embeds.error,
            }))
                message.channel.stopTyping()
                return console.error(e);
            }
            message.channel.stopTyping()

        },
        description: "Send stats on a Hypixel Guild",
        usage: "guild <ign/guild>",
        aliases: [ "g", "guild", "hypixelguild" ],
        type: "fun"
    })

    CommandHandler.set({
        name: "duels",
        run: async (bot, message, args, { prefixUsed, commandUsed }) => {
            try {
                message.channel.startTyping()

                let player = args[0]

                if(!player){ 

                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.invalidArgs,
                        variables: [
                            { searchFor: /{command}/g, replaceWith: "duels" },
                            { searchFor: /{prefix}/g, replaceWith: prefixUsed },
                        ]
                    }))
                    message.channel.stopTyping()
                    }

        if(player){ 
            const api = await fetch(`https://api.slothpixel.me/api/players/${player}`).then(response => response.json());
        		if (!api.uuid) { 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.noPlayer,
                        variables: [
                            { searchFor: /{Player}/g, replaceWith: args[0]},
                        ]
                    }))
                    message.channel.stopTyping()
				}

              if (api.uuid) { 
                message.channel.stopTyping()
                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.Duels_Stats,
                
                    variables: [    

                        { searchFor: /{bustAvatar}/g, replaceWith: `https://visage.surgeplay.com/bust/${api.uuid}` },
                        { searchFor: /{Player}/g, replaceWith: api.username },
                        { searchFor: /{UUID}/g, replaceWith: api.uuid },
                        { searchFor: /{Wins}/g, replaceWith: api.stats.Duels.general.wins },
                        { searchFor: /{Losses}/g, replaceWith: api.stats.Duels.general.losses },
                        { searchFor: /{GamesPlayed}/g, replaceWith: api.stats.Duels.general.wins + api.stats.Duels.general.losses},
                        { searchFor: /{Kills}/g, replaceWith: api.stats.Duels.general.kills },
                        { searchFor: /{Deaths}/g, replaceWith: api.stats.Duels.general.deaths },
                        { searchFor: /{KDRatio}/g, replaceWith: api.stats.Duels.general.kd_ratio.toFixed(2) },
                        { searchFor: /{WLRatio}/g, replaceWith: api.stats.Duels.general.win_loss_ratio.toFixed(2) },
                        { searchFor: /{BestWinstreak}/g, replaceWith: api.stats.Duels.general.winstreaks.best.overall },
                        { searchFor: /{CurrentWinstreak}/g, replaceWith: api.stats.Duels.general.winstreaks.current.overall },
                    ]
                }))
            }
            }
            
        } catch (e) {
            message.channel.send(Utils.setupEmbed({
                configPath: config.Embeds.error,
            }))
                message.channel.stopTyping()
                return console.error(e);
            }
            message.channel.stopTyping()
        },
        description: "Sends stats about a Hypixel Duels player.",
        usage: "duels <user>",
        aliases: [ "d", "hd" ],
        type: "fun"
    })

    CommandHandler.set({
        name: "bwcompare",
        run: async (bot, message, args, { prefixUsed, commandUsed }) => {
            try {
                message.channel.startTyping()

                let player1 = args[0]
                let player2 = args[1]

                if(!player2){ 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.invalidArgs_compare,
                        variables: [
                            { searchFor: /{command}/g, replaceWith: "bwcompare" },
                            { searchFor: /{prefix}/g, replaceWith: prefixUsed },
                        ]
                    }))
                    message.channel.stopTyping()
                    }
                    
        if(player1 && player2){ 
            const player1API = await fetch(`https://api.slothpixel.me/api/players/${player1}`).then(response => response.json());
        		if (!player1API.uuid) { 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.noPlayer,
                        variables: [
                            { searchFor: /{Player}/g, replaceWith: args[0]},
                        ]
                    }))
                    message.channel.stopTyping()
				}

                const player2API = await fetch(`https://api.slothpixel.me/api/players/${player2}`).then(response => response.json());
        		if (!player2API.uuid) { 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.noPlayer,
                        variables: [
                            { searchFor: /{Player}/g, replaceWith: args[1]},
                        ]
                    }))
                    message.channel.stopTyping()
				}

              if (player1API.uuid && player2API.uuid) { 
                message.channel.stopTyping()
                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.Bedwars_Compare,
                
                    variables: [

                        // Player 1
                        { searchFor: /{Player1}/g, replaceWith: player1API.username },
                        { searchFor: /{Player1_UUID}/g, replaceWith: player1API.uuid },
                        { searchFor: /{Player1_Level}/g, replaceWith: player1API.stats.BedWars.level },
                        { searchFor: /{Player1_Wins}/g, replaceWith: player1API.stats.BedWars.wins },
                        { searchFor: /{Player1_Losses}/g, replaceWith: player1API.stats.BedWars.losses },
                        { searchFor: /{Player1_GamesPlayed}/g, replaceWith: player1API.stats.BedWars.games_played },
                        { searchFor: /{Player1_Kills}/g, replaceWith: player1API.stats.BedWars.kills },
                        { searchFor: /{Player1_Deaths}/g, replaceWith: player1API.stats.BedWars.deaths },
                        { searchFor: /{Player1_KDRatio}/g, replaceWith: player1API.stats.BedWars.k_d.toFixed(2) },
                        { searchFor: /{Player1_WLRatio}/g, replaceWith: player1API.stats.BedWars.w_l.toFixed(2) },
                        { searchFor: /{Player1_BedsPerGame}/g, replaceWith: player1API.stats.BedWars.bed_ratio.toFixed(2) },
                        { searchFor: /{Player1_FinalKills}/g, replaceWith: player1API.stats.BedWars.final_kills },
                        { searchFor: /{Player1_FinalDeaths}/g, replaceWith: player1API.stats.BedWars.final_deaths },
                        { searchFor: /{Player1_FKDR}/g, replaceWith: player1API.stats.BedWars.final_k_d.toFixed(2) },
                        { searchFor: /{Player1_VoidKills}/g, replaceWith: player1API.stats.BedWars.void_kills },
                        { searchFor: /{Player1_VoidDeaths}/g, replaceWith: player1API.stats.BedWars.void_deaths },
                        { searchFor: /{Player1_CurrentWinStreak}/g, replaceWith: player1API.stats.BedWars.winstreak },

                        //Player2
                        { searchFor: /{Player2}/g, replaceWith: player2API.username },
                        { searchFor: /{Player2_UUID}/g, replaceWith: player2API.uuid },
                        { searchFor: /{Player2_Level}/g, replaceWith: player2API.stats.BedWars.level },
                        { searchFor: /{Player2_Wins}/g, replaceWith: player2API.stats.BedWars.wins },
                        { searchFor: /{Player2_Losses}/g, replaceWith: player2API.stats.BedWars.losses },
                        { searchFor: /{Player2_GamesPlayed}/g, replaceWith: player2API.stats.BedWars.games_played },
                        { searchFor: /{Player2_Kills}/g, replaceWith: player2API.stats.BedWars.kills },
                        { searchFor: /{Player2_Deaths}/g, replaceWith: player2API.stats.BedWars.deaths },
                        { searchFor: /{Player2_KDRatio}/g, replaceWith: player2API.stats.BedWars.k_d.toFixed(2) },
                        { searchFor: /{Player2_WLRatio}/g, replaceWith: player2API.stats.BedWars.w_l.toFixed(2) },
                        { searchFor: /{Player2_BedsPerGame}/g, replaceWith: player2API.stats.BedWars.bed_ratio.toFixed(2) },
                        { searchFor: /{Player2_FinalKills}/g, replaceWith: player2API.stats.BedWars.final_kills },
                        { searchFor: /{Player2_FinalDeaths}/g, replaceWith: player2API.stats.BedWars.final_deaths },
                        { searchFor: /{Player2_FKDR}/g, replaceWith: player2API.stats.BedWars.final_k_d.toFixed(2) },
                        { searchFor: /{Player2_VoidKills}/g, replaceWith: player2API.stats.BedWars.void_kills },
                        { searchFor: /{Player2_VoidDeaths}/g, replaceWith: player2API.stats.BedWars.void_deaths },
                        { searchFor: /{Player2_CurrentWinStreak}/g, replaceWith: player2API.stats.BedWars.winstreak },
                    ]

                }))
            }

            }
            
        } catch (e) {
            message.channel.send(Utils.setupEmbed({
                configPath: config.Embeds.error,
            }))
                message.channel.stopTyping()
                return console.error(e);
            }
        },
        description: "Sends stats about a Hypixel Duels player.",
        usage: "bwcompare <Player1> <Player2>",
        aliases: [ "bwc", "comparebw", "bedwarscompare" ],
        type: "fun"
    })

    CommandHandler.set({
        name: "swcompare",
        run: async (bot, message, args, { prefixUsed, commandUsed }) => {
            try {
                message.channel.startTyping()

                let player1 = args[0]
                let player2 = args[1]

                if(!player2){ 

                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.invalidArgs_compare,
                        variables: [
                            { searchFor: /{command}/g, replaceWith: "swcompare" },
                            { searchFor: /{prefix}/g, replaceWith: prefixUsed },
                        ]
                    }))
                    message.channel.stopTyping()
                    }

        if(player1 && player2){ 
            const Player1API = await fetch(`https://api.slothpixel.me/api/players/${player1}`).then(response => response.json());
        		if (!Player1API.uuid) { 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.noPlayer,
                        variables: [
                            { searchFor: /{Player}/g, replaceWith: args[0]},
                        ]
                    }))
                    message.channel.stopTyping()
				}

            const Player2API = await fetch(`https://api.slothpixel.me/api/players/${player2}`).then(response => response.json());
        		if (!Player2API.uuid) { 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.noPlayer,
                        variables: [
                            { searchFor: /{Player}/g, replaceWith: args[0]},
                        ]
                    }))
                    message.channel.stopTyping()
				}    

              if (Player1API.uuid && Player2API.uuid) { 
                message.channel.stopTyping()
                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.Skywars_Compare,
                    variables: [    

                        // Player 1
                        { searchFor: /{Player1}/g, replaceWith: Player1API.username },
                        { searchFor: /{Player1_UUID}/g, replaceWith: Player1API.uuid },
                        { searchFor: /{Player1_Level}/g, replaceWith: Player1API.stats.SkyWars.level.toFixed(2) },
                        { searchFor: /{Player1_Coins}/g, replaceWith: Player1API.stats.SkyWars.coins },
                        { searchFor: /{Player1_Wins}/g, replaceWith: Player1API.stats.SkyWars.wins },
                        { searchFor: /{Player1_Losses}/g, replaceWith: Player1API.stats.SkyWars.losses },
                        { searchFor: /{Player1_GamesPlayed}/g, replaceWith: Player1API.stats.SkyWars.wins + Player1API.stats.SkyWars.losses },
                        { searchFor: /{Player1_Kills}/g, replaceWith: Player1API.stats.SkyWars.kills },
                        { searchFor: /{Player1_Deaths}/g, replaceWith: Player1API.stats.SkyWars.deaths },
                        { searchFor: /{Player1_Assists}/g, replaceWith: Player1API.stats.SkyWars.assists },
                        { searchFor: /{Player1_KDRatio}/g, replaceWith: Player1API.stats.SkyWars.kill_death_ratio.toFixed(2) },
                        { searchFor: /{Player1_WLRatio}/g, replaceWith: Player1API.stats.SkyWars.win_loss_ratio.toFixed(2) },
                        { searchFor: /{Player1_Souls}/g, replaceWith: Player1API.stats.SkyWars.souls },
                        { searchFor: /{Player1_BlocksPlaced}/g, replaceWith: Player1API.stats.SkyWars.blocks_placed },
                        { searchFor: /{Player1_EggsThrown}/g, replaceWith: Player1API.stats.SkyWars.eggs_thrown },
                        { searchFor: /{Player1_PearlsThrown}/g, replaceWith: Player1API.stats.SkyWars.enderpearls_thrown },
                        { searchFor: /{Player1_ArrowsShow}/g, replaceWith: Player1API.stats.SkyWars.arrows_shot },

                        // Player 2
                        { searchFor: /{Player2}/g, replaceWith: Player2API.username },
                        { searchFor: /{Player2_UUID}/g, replaceWith: Player2API.uuid },
                        { searchFor: /{Player2_Level}/g, replaceWith: Player2API.stats.SkyWars.level.toFixed(2) },
                        { searchFor: /{Player2_Coins}/g, replaceWith: Player2API.stats.SkyWars.coins },
                        { searchFor: /{Player2_Wins}/g, replaceWith: Player2API.stats.SkyWars.wins },
                        { searchFor: /{Player2_Losses}/g, replaceWith: Player2API.stats.SkyWars.losses },
                        { searchFor: /{Player2_GamesPlayed}/g, replaceWith: Player2API.stats.SkyWars.wins + Player2API.stats.SkyWars.losses },
                        { searchFor: /{Player2_Kills}/g, replaceWith: Player2API.stats.SkyWars.kills },
                        { searchFor: /{Player2_Deaths}/g, replaceWith: Player2API.stats.SkyWars.deaths },
                        { searchFor: /{Player2_Assists}/g, replaceWith: Player2API.stats.SkyWars.assists },
                        { searchFor: /{Player2_KDRatio}/g, replaceWith: Player2API.stats.SkyWars.kill_death_ratio.toFixed(2) },
                        { searchFor: /{Player2_WLRatio}/g, replaceWith: Player2API.stats.SkyWars.win_loss_ratio.toFixed(2) },
                        { searchFor: /{Player2_Souls}/g, replaceWith: Player2API.stats.SkyWars.souls },
                        { searchFor: /{Player2_BlocksPlaced}/g, replaceWith: Player2API.stats.SkyWars.blocks_placed },
                        { searchFor: /{Player2_EggsThrown}/g, replaceWith: Player2API.stats.SkyWars.eggs_thrown },
                        { searchFor: /{Player2_PearlsThrown}/g, replaceWith: Player2API.stats.SkyWars.enderpearls_thrown },
                        { searchFor: /{Player2_ArrowsShow}/g, replaceWith: Player2API.stats.SkyWars.arrows_shot },
                    ]
                }))
            }
            }
            
        } catch (e) {
            message.channel.send(Utils.setupEmbed({
                configPath: config.Embeds.error,
            }))
                message.channel.stopTyping()
                return console.error(e);

            }
            message.channel.stopTyping()
        },
        description: "Compares two Hypixel Skywars players stats.",
        usage: "swcompare <player1> <player2>",
        aliases: [ "swc", "hswc", "comparesw", "compareskywars", "swc" ],
        type: "fun"
    })

    CommandHandler.set({
        name: "dcompare",
        run: async (bot, message, args, { prefixUsed, commandUsed }) => {
            try {
                message.channel.startTyping()

                let player1 = args[0]
                let player2 = args[1]


                if(!player2){ 

                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.invalidArgs_compare,
                        variables: [
                            { searchFor: /{command}/g, replaceWith: "dcompare" },
                            { searchFor: /{prefix}/g, replaceWith: prefixUsed },
                        ]
                    }))
                    message.channel.stopTyping()
                    }

        if(player1 && player2){ 
            const Player1API = await fetch(`https://api.slothpixel.me/api/players/${player1}`).then(response => response.json());
        		if (!Player1API.uuid) { 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.noPlayer,
                        variables: [
                            { searchFor: /{Player}/g, replaceWith: args[0]},
                        ]
                    }))
                    message.channel.stopTyping()
				}

                const Player2API = await fetch(`https://api.slothpixel.me/api/players/${player2}`).then(response => response.json());
                if (!Player2API.uuid) { 
                    message.channel.send(Utils.setupEmbed({
                        configPath: config.Embeds.noPlayer,
                        variables: [
                            { searchFor: /{Player}/g, replaceWith: args[1]},
                        ]
                    }))
                    message.channel.stopTyping()
				}

              if (Player1API.uuid && Player2API.uuid) { 
                message.channel.stopTyping()
                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.Duels_Compare,
                
                    variables: [    

                        // Player 1
                        { searchFor: /{Player1}/g, replaceWith: Player1API.username },
                        { searchFor: /{Player1_UUID}/g, replaceWith: Player1API.uuid },
                        { searchFor: /{Player1_Wins}/g, replaceWith: Player1API.stats.Duels.general.wins },
                        { searchFor: /{Player1_Losses}/g, replaceWith: Player1API.stats.Duels.general.losses },
                        { searchFor: /{Player1_GamesPlayed}/g, replaceWith: Player1API.stats.Duels.general.wins + Player1API.stats.Duels.general.losses},
                        { searchFor: /{Player1_Kills}/g, replaceWith: Player1API.stats.Duels.general.kills },
                        { searchFor: /{Player1_Deaths}/g, replaceWith: Player1API.stats.Duels.general.deaths },
                        { searchFor: /{Player1_KDRatio}/g, replaceWith: Player1API.stats.Duels.general.kd_ratio.toFixed(2) },
                        { searchFor: /{Player1_WLRatio}/g, replaceWith: Player1API.stats.Duels.general.win_loss_ratio.toFixed(2) },
                        { searchFor: /{Player1_BestWinstreak}/g, replaceWith: Player1API.stats.Duels.general.winstreaks.best.overall },
                        { searchFor: /{Player1_CurrentWinstreak}/g, replaceWith: Player1API.stats.Duels.general.winstreaks.current.overall },

                        // Player 2
                        { searchFor: /{Player2}/g, replaceWith: Player2API.username },
                        { searchFor: /{Player2_UUID}/g, replaceWith: Player2API.uuid },
                        { searchFor: /{Player2_Wins}/g, replaceWith: Player2API.stats.Duels.general.wins },
                        { searchFor: /{Player2_Losses}/g, replaceWith: Player2API.stats.Duels.general.losses },
                        { searchFor: /{Player2_GamesPlayed}/g, replaceWith: Player2API.stats.Duels.general.wins + Player2API.stats.Duels.general.losses},
                        { searchFor: /{Player2_Kills}/g, replaceWith: Player2API.stats.Duels.general.kills },
                        { searchFor: /{Player2_Deaths}/g, replaceWith: Player2API.stats.Duels.general.deaths },
                        { searchFor: /{Player2_KDRatio}/g, replaceWith: Player2API.stats.Duels.general.kd_ratio.toFixed(2) },
                        { searchFor: /{Player2_WLRatio}/g, replaceWith: Player2API.stats.Duels.general.win_loss_ratio.toFixed(2) },
                        { searchFor: /{Player2_BestWinstreak}/g, replaceWith: Player2API.stats.Duels.general.winstreaks.best.overall },
                        { searchFor: /{Player2_CurrentWinstreak}/g, replaceWith: Player2API.stats.Duels.general.winstreaks.current.overall },
                    ]
                }))
            }
            }   
        } catch (e) {
            message.channel.send(Utils.setupEmbed({
                configPath: config.Embeds.error,
            }))
                message.channel.stopTyping()
                return console.error(e);
            }
            message.channel.stopTyping()
        },
        description: "Compares stats from two Hypixel Duels players.",
        usage: "dcompare <Player1> <Player2>",
        aliases: [ "dc", "duelscompare", "compareduels", "hcd" ],
        type: "fun"
    })
    CommandHandler.set({
        name: "hbans",
        run: async (bot, message, args, { prefixUsed, commandUsed }) => {
            try {
                message.channel.startTyping()
                const api = await fetch(`https://api.slothpixel.me/api/bans`).then(response => response.json());
                message.channel.stopTyping()
                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.Bans,
                    variables: [  
                        { searchFor: /{watchdogLastMin}/g, replaceWith: api.watchdog.last_minute},
                        { searchFor: /{watchdogDaily}/g, replaceWith: api.watchdog.daily},
                        { searchFor: /{watchdogTotal}/g, replaceWith: api.watchdog.total},

                        { searchFor: /{staffDaily}/g, replaceWith: api.staff.daily},
                        { searchFor: /{staffTotal}/g, replaceWith: api.staff.total},
                    ]
                }))
            } catch (e) {
                message.channel.send(Utils.setupEmbed({
                    configPath: config.Embeds.error,
                }))
                message.channel.stopTyping()
                return console.error(e);
            }
            message.channel.stopTyping()
        },
        description: "Show Hypixel's Ban stats",
        usage: "hbans",
        aliases: [ "hypixelbans", "wdrbans", "wbans", "hbanned" ],
        type: "fun"
    })
}