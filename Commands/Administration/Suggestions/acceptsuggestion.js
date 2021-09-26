// ██████ Integrations █████████████████████████████████████████████████████████

// —— Import base command
const Command = require( "../../../Structures/Command" );
const { MessageEmbed } = require("discord.js");
const suggestionSchema = require("../../../Models/Suggestions");

// ██████ | ███████████████████████████████████████████████████████████████████

// —— Create & export a class for the command that extends the base command
class AcceptSuggestion extends Command {

	constructor( client ) {
		super( client, {
			name        : "acceptsuggestion",
			description : "Accept a suggestion from the suggestion channel.",
			usage       : "acceptsuggestion { message ID } { reason }",
			example     : ["885764353117286440 That is a great idea!" ],
            aliases     : ["acs", "accept"],
			args        : true,
			category    : "Administration",
			cooldown    : 100,
			userPerms   : "ADMINISTRATOR",
			allowDMs    : false,
		});

	}

	async run( message, args ) {
        const messageID = args[0];
        const acceptQuery = args.slice(1).join(" ");

        if(!messageID)
            return super.respond( this.language.missingmessageid)
        if (!acceptQuery)
            return super.respond( this.client.missingreason )

        const sug = await suggestionSchema.findOne({
            _ID: message.guild.id
        })
        try {
            const suggestionChannel = message.guild.channels.cache.get(sug.channelID);
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);
            const data = suggestedEmbed.embeds[0];
            //console.log(suggestedEmbed);
            const acceptEmbed = new MessageEmbed()
                .setAuthor(data.author.name, data.author.iconURL)
                .setTitle("Suggestion")
                .setDescription(data.description)
                .setColor("GREEN")
                .addField(`Status`, `<a:accepted:885757226810216508> Accepted idea! Expect this soon!`)
                .addField("Reason", acceptQuery)
                .setFooter("Want to suggest something? simply type .tsuggest [your suggestion]")
            
            suggestedEmbed.edit(acceptEmbed)

            const user = this.client.users.cache.find(
                (u) => u.tag === data.author.name,
              );
              user.send(acceptEmbed);


        } catch (err) {
            console.log(err)
            super.respond( this.language.error );
        }

    }

}



module.exports = AcceptSuggestion;
