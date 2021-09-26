// ██████ Integrations █████████████████████████████████████████████████████████

// —— Import base command
const Command = require( "../../Structures/Command" )
// —— A light-weight module that brings window.fetch to node.js
    , fetch   = require("node-fetch");
const { config } = require("../../config")
// —————— | ————————————————————————————————————————————————————————————————————
const { MessageEmbed } = require("discord.js");

const schema = require("../../Models/PremiumGuild");
const day = require('dayjs');
// ██████ | ███████████████████████████████████████████████████████████ | ██████

// —— Create & export a class for the command that extends the base command
class AddPremiumGuild extends Command {

    constructor(client) {
        super(client, {
            name        : "addpremiumguild",
            description : "Unlock Premium commands in your own server.",
            usage       : "addpremiumguild",
            args        : false,
            category    : "Premium",
            cooldown    : 5000,
            aliases     : ["VIPGuild", "apg"],
            permLevel   : 0,
            userPerms   : "SEND_MESSAGES",
            allowDMs    : true,
        });
    }

    async run(message, client, args ) {
        if(message.author.id !== `497837043955531776`)
        return super.respond( this.language.owner );

        if (!args[0]) return super.respond( this.language.missInfo );
        if (!client.guilds.cache.has(args[0]))
            return super.respond( this.language.invalidGuild );

        schema.findOne({ Guild: args[0]}, async(err, data) => {
            if(data) data.delete();

            if(args[1]) {
                const Expire = day(args[1]).valueOf();;
                new schema({
                    Guild: args[0],
                    Expire,
                    Permanent: false
                }).save();
            } else {
                new Schema({
                    Guild: args[0],
                    Expire: 0,
                    Permanent: true,
                }).save();
            }
            super.respond( this.language.premiumAdd );
        })
        
            

    }
}

module.exports = AddPremiumGuild;