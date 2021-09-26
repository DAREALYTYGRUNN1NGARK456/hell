// ██████ Integrations █████████████████████████████████████████████████████████

// —— Import base command
const Command = require( "../../Structures/Command" )
// —— A light-weight module that brings window.fetch to node.js
    , fetch   = require("node-fetch");
const { config } = require("../../config")
// —————— | ————————————————————————————————————————————————————————————————————
const { MessageEmbed } = require("discord.js");

const premiumSchema = require("../../Models/Premium");

// ██████ | ███████████████████████████████████████████████████████████ | ██████

// —— Create & export a class for the command that extends the base command
class AddPremium extends Command {

    constructor(client) {
        super(client, {
            name        : "addpremium",
            description : "Unlock Premium commands in Thorn's Support Server.",
            usage       : "addpremium",
            args        : false,
            category    : "Premium",
            cooldown    : 5000,
            aliases     : ["VIP",],
            permLevel   : 0,
            userPerms   : "SEND_MESSAGES",
            allowDMs    : true,
        });
    }

    async run(message, args ) {
        if(message.author.id !== `497837043955531776`)
        return super.respond( this.language.owner );

        if (!args)
            return super.respond( this.language.missingInfo );

        const member = message = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if (!member)
            return super.respond( this.language.missInfo );

        premiumSchema.findOne({
            _ID: member.id
        }, async(err,data) => {
            if(data)
                return super.respond( this.language.alreadyPremium );
            
        new premiumSchema({
            _ID: member.id
        }).save();

        return super.respond( `${this.language.premiumAdd} <@${member.id}> \`(${member.id})\`` );

        })
        
            

    }
}

module.exports = AddPremium;