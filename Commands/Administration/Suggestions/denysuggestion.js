// ██████ Integrations █████████████████████████████████████████████████████████

// —— Import base command
const Command = require( "../../../Structures/Command" );
const { MessageEmbed } = require("discord.js");
const suggestionSchema = require("../../../Models/Suggestions");

// ██████ | ███████████████████████████████████████████████████████████████████

// —— Create & export a class for the command that extends the base command
class DenySuggestion extends Command {

	constructor( client ) {
		super( client, {
			name        : "denysuggestion",
			description : "Deny a suggestion from the suggestion channel.",
			usage       : "acceptsuggestion {messageID} {reason}",
			example     : ["885762028407504927 Wedecided against this idea." ],
			args        : true,
            aliases     : ["dcs", "deny"],
			category    : "Administration",
			cooldown    : 100,
			userPerms   : "ADMINISTRATOR",
			allowDMs    : false,
		});

	}

	async run( message, args ) {
        const messageID = args[0];
        const deniedQuery = args.slice(1).join(" ");

        if(!messageID)
            return super.respond( this.language.missingmessageid)
        if (!deniedQuery)
            return super.respond( this.client.missingreason )

        const sug = await suggestionSchema.findOne({
            _ID: message.guild.id
        })
        try {
            const suggestionChannel = message.guild.channels.cache.get(sug.channelID);
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);
            const data = suggestedEmbed.embeds[0];
            //console.log(suggestedEmbed);
            const deniedEmbed = new MessageEmbed()
                .setAuthor(data.author.name, data.author.iconURL)
                .setTitle("Suggestion")
                .setDescription(data.description)
                .setColor("RED")
                .addField(`Status`, `<a:negative:796810541498368000> Denied by Development Team`)
                .addField("Reason", deniedQuery)
                .setFooter("Want to suggest something? simply type .tsuggest [your suggestion]")
            
            suggestedEmbed.edit(deniedEmbed)

            const user = this.client.users.cache.find(
                (u) => u.tag === data.author.name,
              );
              user.send(deniedEmbed);


        } catch (err) {
            console.log(err)
            super.respond( this.language.error );
        }

    }

}



module.exports = DenySuggestion;
