const Discord = require("discord.js")
const EventHandler = require('../modules/handlers/EventHandler');
const CommandHandler = require('../modules/handlers/CommandHandler');
const Utils = require('../modules/utils')
const fs = require('fs')
const path = require('path');
const request = require('request-promise');
const CustomConfig = require('../modules/CustomConfig.js');
let db = require("better-sqlite3")(`${path.basename(__filename).replace(/.js/, "")}.sqlite`);
const config = new CustomConfig(`./addon_configs/${path.basename(__filename).replace(/.js/, "")}.yml`, {
        Command: "vehicle",
        APIKEY: "geturown x",
        Messages: {
            NoArgs: {
                Title: "vehicle [reg]"
            },
            Found: {
                Title: "{registrationNumber}'s Information",
                Fields: [
                    {
                        name: "Vehicle Details",
                        value: "**MOT**: `{mot}`\n**Vehicle status**: `{taxed}`\n**Colour**: `{colour}`\n**Vehicle Type Approval**: `{type}`\n**Wheelpan**: `{wheelpan}`\n**Date of last logbook issued**: `{logbook}`",
                        inline: true,
                    },
                    {
                        name: "More Details",
                        value: "**Make**: `{make}`\n**Date of first reg:** `{first_reg}`\n**Year manufactured**: `{manufacture}`\n**Cylinder capacity**: `{cylinder}`\n**Fuel Type**: `{fuel}`",
                        inline: true
                    }
                ]
            }
        }
}, { development: false })
module.exports =  {

    run: async (bot) => {
        
        CommandHandler.set({
            name: config.Command,
            run: async (bot, message, args, { prefixUsed, commandUsed }) => {
                
                if (!args[0]) return message.channel.send(Utils.setupEmbed({
                    configPath: config.Messages.NoArgs
                }))
                request.post({
                    uri: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
                    json: true,
                    headers: {
                      'x-api-key': config.APIKEY,
                      'Content-Type': 'application/json',
                    },
                    body: {
                      'registrationNumber': args[0]
                    }
                })
              .then(r => {
                  return message.channel.send(Utils.setupEmbed({
                    configPath: config.Messages.Found,
                    variables: [
                        { searchFor: /{registrationNumber}/g, replaceWith: r.registrationNumber },
                        { searchFor: /{mot}/g, replaceWith: r.motStatus },
                        { searchFor: /{taxed}/g, replaceWith: r.taxStatus },
                        { searchFor: /{colour}/g, replaceWith: r.colour },
                        { searchFor: /{type}/g, replaceWith: r.typeApproval },
                        { searchFor: /{wheelpan}/g, replaceWith: r.wheelplan },
                        { searchFor: /{logbook}/g, replaceWith: r.dateOfLastV5CIssued },
                        { searchFor: /{make}/g, replaceWith: r.make },
                        { searchFor: /{first_reg}/g, replaceWith: r.monthOfFirstRegistration },
                        { searchFor: /{manufacture}/g, replaceWith: r.yearOfManufacture },
                        { searchFor: /{cylinder}/g, replaceWith: r.engineCapacity },
                        { searchFor: /{fuel}/g, replaceWith: r.fuelType },

                    ]
                }))
              }).catch(e => {
                  if(e.statusCode == 404) return message.channel.send(`Invalid License Plate, If this vehicle is brand new. It can take up to 48 hours to appear`)
                  return message.channel.send("Invliad License Plate or Invalid API key")
              })

            },
            description: `a`,
            usage: `a []`,
            aliases: "dvla",
            type: "other"
        })
        
    },
}
