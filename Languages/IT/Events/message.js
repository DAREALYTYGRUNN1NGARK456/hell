module.exports = {
    owner       : "Mi spiace ma questo comando può essere usato solo da i padroni del bot.",
    server      : "Mi spiace ma questo comando può essere usato solo in un server.",
    nsfw        : "Mi spiace ma questo comando può essere usato solo in un canale NSFW",
    cooldown    : ( command, message ) => `Perfavore, aspetta ${( ( command.cmdCooldown.get( `${ message.guild ? message.guild.id : "mp" }-${ message.author.id }` ) - Date.now() ) / 1000 ).toFixed( 1 ) } secondi per riusare ${command.name}.`,
    args        : ( message ) => `Non hai provveduto nessun argomento, ${message.author} !`,
    helpEmbed   : ( cmd, message ) => ({
        title       : `${cmd.name.replace(/\b\w/g, (l) => l.toUpperCase())}`,
        description : `> *${cmd.description}*`,
        fields      : [{
            name    : "Sintassi",
            value   :`\`\`\`${cmd.usage}\`\`\``,
        }, {
            name    : "Esempi",
            value   :`\`\`\`${cmd.example && cmd.example.map( ( x ) => `${message.guild.prefix}${cmd.name} ${x}`).join( "\n" ) || "Nessun esempio provveduto"}\`\`\``,
        }],
    }),
    "missPerm"  : "Non ho permessi sufficienti per eseguire il comando.",
    "youMiss"   : "Non hai i permessi sufficienti per eseguire il comando.",
    lvlUp       : ( level, user ) => [
        `Ben fatto <@${ user._ID }>, ora sei livello ${ level }!`,
        `Fantastico, <@${ user._ID }>, sei arrivato al livello ${ level }!`
    ][ ~~Math.random() * 2 ]

};