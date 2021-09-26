// ██████ Integrations █████████████████████████████████████████████████████████

// —— Import base command
const Command = require( "../../Structures/Command" )
// —— A light-weight module that brings window.fetch to node.js
    , fetch   = require("node-fetch");

// —————— | ————————————————————————————————————————————————————————————————————
const { feedbackchannelID } = require("../../config.js");
const { MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");

// ██████ | ███████████████████████████████████████████████████████████ | ██████

// —— Create & export a class for the command that extends the base command
class FeedBack extends Command {

    constructor(client) {
        super(client, {
            name        : "feedback",
            description : "Sends a message to the Thorn Support Server\'s feedback channel.",
            usage       : "feedback {your feedback}",
            args        : false,
            category    : "General",
            cooldown    : 5000,
            aliases     : ["fb"],
            permLevel   : 0,
            userPerms   : "SEND_MESSAGES",
            allowDMs    : true,
        });
    }

    async run(message, args) {
        // get feedback channel
        const feedbackChannel = this.client.channels.cache.get(feedbackchannelID);

        // Feedback message
        

        if (!feedbackChannel)
            return super.respond( this.language.Error );
        if (!args[0]) 
            return super.respond( this.language.missingfeedback);
        let feedback = message.content.slice(message.content.indexOf(args[0]), message.content.length);

        // Send Feedback
        const feedbackEmbed = new MessageEmbed()
            .setTitle(`Feedback`)
            .setThumbnail(feedbackChannel.guild.iconURL({ dynamic: true }))
            .setDescription(feedback)
            .addField(`User`, message.member, true)
            .addField(`Server`, message.guild.name, true)
            .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

        this.client.channels.cache.get(feedbackchannelID).send(feedbackEmbed)
        .then(() => {
            message.delete()
            .then(() => {
                let supportServer = new MessageButton()
                    .setLabel("Support Server")
                    .setURL("https://discord.gg/TAzSY3PFKy")
                    .setStyle("url")

                let web = new MessageButton()
                    .setLabel("Website")
                    .setURL("https://thornbot.xyz")
                    .setStyle("url")

                let row = new MessageActionRow()
                    .addComponents(supportServer, web)



                const sent = new MessageEmbed()
                    .setTitle(`Feedback Sent`)
                    .setDescription(this.language.feedbackSent)
                    .setColor("RED")
                    .setThumbnail(this.client.user.displayAvatarURL())
                    .setFooter("This message will auto delete in 5 minutes")
                super.respond({content: sent, components: [row]})
                    .then(msg => {
                        msg.delete({ timeout: 300000 })
                    })
            })
        })

    }
}

module.exports = FeedBack;