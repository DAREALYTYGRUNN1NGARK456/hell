// ██████ Integrations ████████████████████████████████████████████████████████

// —— Import base command
const Command = require( "../../Structures/Command" );

// ██████ | ███████████████████████████████████████████████████████████████████
const { MessageEmbed } = require("discord.js");
// —— Create & export a class for the command that extends the base command
class Servers extends Command {

    constructor( client ) {
        super( client, {
            name        : "servers",
            description : "Displays a list of servers Thorn has joined.",
            usage       : "servers",
            args        : false,
            category    : "Owner",
            userPerms   : "SEND_MESSAGES",
            guildOnly   : false,
            ownerOnly   : true
        } );
    }

    async run( message ) {

        const servers = message.client.guilds.cache.array().map(guild => {
            return `**${guild.name}** - \`${guild.id}\` - \`${guild.members.cache.size}\` members`;
          });
      
          const embed = new MessageEmbed()
            .setTitle('Thorn\'s Server List')
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
      
          if (servers.length <= 10) {
            const range = (servers.length == 1) ? '[1]' : `[1 - ${servers.length}]`;
            const count = (servers.length == 1) ? '1' : `1 - ${servers.length}`;

            const serverEmbed = new MessageEmbed()
                .setTitle(`Thorn\'s Server List`)
                .setDescription(`
                **Server Count:** \`${count}\`
                **More Stats:** \`${message.guild.prefix}botinfo\``)
                .addField(`Server List ${range}`, servers.join('\n'))
                .setColor("RED");
            message.channel.send(serverEmbed);
          } else {
            new ReactionMenu(message.client, message.channel, message.member, embed, servers);
          }

    }
}

module.exports = Servers;