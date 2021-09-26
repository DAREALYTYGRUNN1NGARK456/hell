// ██████ Integrations █████████████████████████████████████████████████████████
const emojis = require('../../Assets/emojis.json');
const { owner } = require('../../Languages/EN/Events/message');
// —— Import base command
const Command               = require( "../../Structures/Command" )
// —— File system
    , fs                    = require( "fs" ).promises
// —— Provides operating system-related utility methods and properties
    , os                    = require( "os" )
    , osu                   = require( "os-utils")
// —— A fast and easy API to create a buttons in discord using discord.js
    , { MessageButton,
        MessageActionRow }  = require( "discord-buttons")
// —— Dependencies
    , { dependencies }      = require( "../../package.json" );

// ██████ | ███████████████████████████████████████████████████████████████████

// —— Create & export a class for the command that extends the base command
class Botinfos extends Command {

    constructor( client ) {
        super( client, {
            name        : "botinfo",
            aliases     : ["infobot", "info"],
            description : "Displays generic information about Thorn",
            usage       : "botinfo",
            category    : "General",
            args        : false,
            botPerms    : "SEND_MESSAGES",
            userPerms   : "SEND_MESSAGES",
            guildOnly   : false
        } );
    }

    async run( message ) {

        // —— Takes a random Thorn face
        const faceFoler      = await fs.readdir( "./Assets/Faces" )
            , face           = faceFoler[ ~~( Math.random() * faceFoler.length ) ]
            , { formatTime } = this.client.utils;

        // —— Function, so that at each call, the data is updated
        const embed = () => ({
            title           : this.language.title,
            description     : this.language.description,
            color           : "RED",
            thumbnail       : { url : `attachment://${face}` },
            "fields": [{
                "name"  : "Prefix",
                "value" : `\`${message.guild.prefix}\``, inline: true
            },{
                "name"  : `${emojis.ID} Client ID`,
                "value" : `\`879449679916568626\``, inline: true
            },{
                "name"  : `${emojis.owner} Developer`,
                "value" : `<@497837043955531776>`, inline: true
            },{
                "name"  : `${emojis.stats} Stats`,
                "value" : "```" + [
                    `Servers    : ${ this.client.guilds.cache.size }`,
                    `Channels   : ${ this.client.channels.cache.size }`,
                    `Users      : ${ this.client.users.cache.size }`,
                    `Shards     : ${ this.client.shard && this.client.shard.count || 0 }`,
                    `Uptime     : ${ formatTime( this.client.uptime / 1000 ) }`,
                ].join( "\n" ) + "```",
            }, {
                name    : `${emojis.thornsbrain} Tech`,
                "value" : "```" + [
                    `DiscordJS  : ${ dependencies["discord.js"] }`,
                    `NodeJS     : ${ process.version }`,
                    `CPU        : ${ os.cpus()[0].model.substring( 0, os.cpus()[0].model.indexOf( "CPU" ) ) }`,
                    `CPU Usage  : ${ ~~( osu.loadavg( 1 )) } %`,
                    `Mem Usage  : ${ ~~( process.memoryUsage().heapUsed / 1024 / 1024 ) } MB`,
                    `Arch       : ${ process.arch }`,
                    `OS         : ${ process.platform }`,
                ].join( "\n" ) + "```",
            }],
            "footer": {
                "text": this.language.footer,
            }

        });

        // —— Button for updating data
        const refresh = new MessageButton()
            .setStyle( "grey" )
            .setLabel( this.language.refresh )
            .setID( "refresh" );

        // —— Button for github
        const github = new MessageButton()
            .setStyle( "url" )
            .setEmoji("849386460963536926")
            .setURL( "https://github.com/" );

        // —— Button for open the doc
        const doc = new MessageButton()
            .setStyle( "url" )
            .setLabel( this.language.doc )
            .setURL( "https://github.com/" );


        // —— Button row
        const actions = new MessageActionRow()
            .addComponent( refresh )
            .addComponent( github )
            .addComponent( doc );

        // —— Send the Thorn face attachment, buttons and embed
        const msg = await message.channel.send({
            embed    : embed(),
            component: actions,
            files: [{
                attachment  : `./Assets/Faces/${face}`,
                name        : face
            }],
        });

        // —— Collects interactions for 5 minutes
        msg.createButtonCollector(
            ( b ) => b.id === "refresh",
            { time: 300000 }
        ).on( "collect", async ( b ) => {

            await msg.edit({ embed: embed(), component: actions });
            await b.defer();

        }).on( "end", async ( ) => {

            actions.components[0].setDisabled();
            await msg.edit( { embed: embed(), component: actions } );

        } );

    }

}

module.exports = Botinfos;