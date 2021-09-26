// ██████ Integrations █████████████████████████████████████████████████████████

// —— Import base command
const Command = require( "../../../Structures/Command" )
// —— A light-weight module that brings window.fetch to node.js
    , fetch   = require("node-fetch");

// —————— | ————————————————————————————————————————————————————————————————————
const { feedbackchannelID } = require("../../../config.js");
const { MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");

const suggestionSchema = require("../../../Models/Suggestions");

// ██████ | ███████████████████████████████████████████████████████████ | ██████

// —— Create & export a class for the command that extends the base command
class Suggest extends Command {

    constructor(client) {
        super(client, {
            name        : "suggest",
            description : "Suggest something for the community.",
            usage       : "suggest {your suggestion}",
            args        : false,
            category    : "General",
            cooldown    : 5000,
            aliases     : ["sug"],
            permLevel   : 0,
            userPerms   : "SEND_MESSAGES",
            allowDMs    : true,
        });
    }

    async run(message, args) {
        const suggestionQuery = args.join(" ");

        const suggestions = await suggestionSchema.findOne({
            _ID: message.guild.id
        });

        const channel = suggestions.channelID

        if (!channel)
            return super.respond( this.language.error);

        if (!suggestionQuery)
            return super.respond( this.language.missingsuggestion)

        const suggestion = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
            .setTitle("Suggestion")
            .setDescription(`${suggestionQuery}`)
            .addField(`Status`, "<:stats:881849660589871214> Waiting for community feedback, please vote!")
            .setColor("YELLOW")
            .setTimestamp()
            .setFooter("Want to suggest something? simply type .tsuggest [your suggestion]")

        let suggestEmbed = await this.client.channels.cache.get(channel).send(suggestion)
            suggestEmbed.react('<:ThornThumbsUp:883978084326445056>')
            suggestEmbed.react(`<:ThornThumbsDN:883978705859391618>`)
            .then(() => {
            message.delete()
            
        })
    }
}

module.exports = Suggest;