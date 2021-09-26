// ██████ Integrations █████████████████████████████████████████████████████████

// —— Base structure
const Event = require( "../../Structures/Event" );

const Canvas = require('canvas')
const { MessageAttachment } = require("discord.js");
const path = require("path");
const welcomeSchema = require("../../Models/Welcome");
// ██████ | █████████████████████████████████████████████████████████████████████

class guildMemberAdd extends Event {

    constructor( client ) {
        super( client );
    }

    async run( member ) {
        // Welcome Banner
        const { guild } = member

        const welcome = await welcomeSchema.findOne({
            _ID: member.guild.id
        })

        const channel = welcome.channelID
        if (!channel) {
            return;
        }

        const canvas = Canvas.createCanvas(1024, 500)
        const ctx = canvas.getContext('2d')
        ctx.font = "72px sans-serif";
        ctx.fillStyle = "#ffffff";

        const background = await Canvas.loadImage(
            path.join(__dirname, '../../Assets/Faces/welcomebanner.jpg')
        )
        ctx.drawImage(background, 0, 0, 1024, 500)
        ctx.fillText(`Welcome`, 360, 360)
        ctx.beginPath();
        ctx.arc(512, 166, 128, 0, Math.PI * 2, true)
        ctx.stroke()
        ctx.fill()
        
        ctx.font = '42px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(member.user.tag.toUpperCase(), 512, 410)
        ctx.font = '32px sans serif'
        ctx.fillText(`You are the ${guild.memberCount}th to join ${guild.name}`, 512, 455)
        ctx.beginPath()
        ctx.arc(512, 166, 119, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.clip()

        const avatar = await Canvas.loadImage(
            member.user.displayAvatarURL({
                format: "jpg",
                size: 1024
            })
        )
        ctx.drawImage(avatar, 393, 47, 283, 283);

        const attachment = new MessageAttachment(canvas.toBuffer())
        member.guild.channels.resolve(channel).send('', attachment);
        // End Welcome Banner

        // —— Automatic role assignment
        const { plugins: { autorole } } = await this.client.db.Guild.findOne( {_ID: member.guild.id}, "plugins.autorole" );

        const { enabled, roles } = autorole;

        if ( enabled && roles.length ) {

            const toSet = await Promise.all( roles.map( ( role ) => member.guild.roles.fetch( role ) ) );

            member.roles.add( toSet );

        }

    }


}

module.exports = guildMemberAdd;