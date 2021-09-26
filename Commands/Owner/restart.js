// ██████ Integrations ████████████████████████████████████████████████████████

// —— Import base command
const Command = require( "../../Structures/Command" );

// ██████ | ███████████████████████████████████████████████████████████████████

// —— Create & export a class for the command that extends the base command
class Restart extends Command {

    constructor( client ) {
        super( client, {
            name        : "restart",
            description : "Restart Thorn.",
            usage       : "restart",
            args        : false,
            category    : "Owner",
            userPerms   : "SEND_MESSAGES",
            guildOnly   : false,
            ownerOnly   : true
        } );
    }

    async run( message ) {

        try {

            this.client.language.clear();
            await this.client.loadLanguages();

            message.channel.send("Restart activated")

            await message.react( "✅" );

process.exit()

        } catch ( error ) {

            super.respond( `\`\`\`${error}\`\`\`` );

        }

    }
}

module.exports = Restart;