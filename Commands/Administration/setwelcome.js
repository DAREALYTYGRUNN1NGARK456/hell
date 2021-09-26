// ██████ Integrations █████████████████████████████████████████████████████████

// —— Import base command
const Command = require( "../../Structures/Command" );

const welcomeSchema = require("../../Models/Welcome");

// ██████ | ███████████████████████████████████████████████████████████████████

// —— Create & export a class for the command that extends the base command
class SetWelcome extends Command {

	constructor( client ) {
		super( client, {
			name        : "setwelcome",
			description : "Lets you assign a role to a member.",
			usage       : "addrole { user mention / user ID } { role mention / role ID }",
			example     : ["@FriiZoLoGYy @moderator" ],
			args        : false,
			category    : "Administration",
			cooldown    : 100,
			userPerms   : "ADMINISTRATOR",
			allowDMs    : false,
		});

	}

	async run( message, args ) {
        const { guild } = message;
        const channel = message.guild.channels.cache.get(args[0].substring(2).substring(0,18))
        
        await welcomeSchema.findOneAndUpdate({
            _ID: guild.id
        }, {
            _ID          : guild.id,
            channelID    : channel
        }, {
            upsert       : true
        }
    )

    //cache.set(guild.id, channel.id)
    
    super.respond( this.language.enabled)

    }

}



module.exports = SetWelcome;
