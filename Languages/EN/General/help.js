const emojis = require("../../../Assets/emojis.json");

module.exports = {

    doc         : "Documentation",
    notFound    : "The command you are looking for was not found, maybe you should check the list of all available commands",
    pTitle      : ( cName ) => `\` ${cName[0].toUpperCase()}${cName.slice(1)} \` Informations`,
    pSName      : "Syntax",
    pSValue     : ( p, cmdUs ) => `\`\`\`${p}${cmdUs}\`\`\`\`[]\` = Required arguments, — \`{}\` = Optional arguments.`,
    pEName      : "Example",
    pEValue     : ( p, cmdEx ) => `\`\`\`${cmdEx && cmdEx.map( ( ex ) => `${p}${ex}` ).join( "\n" ) || "No examples provided" }\`\`\`\n`,

    firstTitle  : `Thorn's - Scrolls`,
    firstDesc   : "Thorn is a fully customizable Discord bot that is constantly growing. She has a verity of commands and a multitude of settings that can be tailored to your server's specific needs!\n\n<:information:879793017966428160> Please keep in mind Thorn is still in **BETA** & does contain some bugs. Please be patient and support us by reporting any bug you my find.\n\nThe following command scrolls are available to browse through, You can display different command scrolls via the bottons below..\n\n[Add me to your server](https://discord.com/api/oauth2/authorize?client_id=879449679916568626&permissions=139855219863&scope=bot%20applications.commands)",
    list        : `Scrolls of commands`,
    footer      : ( p ) => `You can type ${p}help with the name of command for details`

};