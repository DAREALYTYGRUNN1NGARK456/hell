// ██████ Integrations █████████████████████████████████████████████████████████
require("../../config");
// —— Base structure
const { MessageEmbed } = require("discord.js");
const { serverlogchannel } = require("../../config");
const message = require("../../Languages/EN/Events/message");
const Event = require( "../../Structures/Event" );

// ██████ | █████████████████████████████████████████████████████████████████████

class guildCreate extends Event {

    constructor( client ) {
        super( client );
    }

    async run( guild ) {
        const sayings = [
            "Rock on!",
            "Apprently people like me",
            "Fuck Yeah"
        ];

        const saying = sayings[Math.floor(Math.random() * sayings.length)];

        const serveradd = new MessageEmbed()
            .setTitle("Thorn joined a new server!")
            .setDescription(`${saying}, I joined a new server!`)
            .addFields(
                { name: "Server Name", value: `\`${guild.name}\``, inline: true },
                { name: "ID", value: `\`${guild.id}\``, inline: true},
                { name: "Member Count", value: `\`${guild.memberCount}\``},
                { name: `Owner`, value: `<@${guild.ownerID}>`, inline: true },
                { name: "Owner ID", value: `\`${guild.ownerID}\``, inline: true },
            )
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .setColor("RED")
            .setTimestamp()
            
        this.client.channels.cache.get(serverlogchannel).send(serveradd)

    }


}

module.exports = guildCreate;