module.exports = {

    doc         : "Documentation",
    notFound    : "La commande que vous recherchez n'a pas été trouvée, vous devriez peut-être vérifier la liste de toutes les commandes disponibles.",
    pTitle      : ( cName ) => `\` ${cName[0].toUpperCase()}${cName.slice(1)} \` Informations`,
    pSName      : "Syntax",
    pSValue     : ( p, cmdUs ) => `\`\`\`${p}${cmdUs}\`\`\`\`[]\` = Arguments obligatoires, — \`{}\` = Arguments facultatifs.`,
    pEName      : "Example",
    pEValue     : ( p, cmdEx ) => `\`\`\`${cmdEx && cmdEx.map( ( ex ) => `${p}${ex}` ).join( "\n" ) || "Aucun exemple fourni" }\`\`\`\n`,
    firstTitle  : "Thorn - à la rescousse !",
    firstDesc   : "Thorn est un bot Discord entièrement personnalisable qui ne cesse de croître. Elle a une vérité de commandes et une multitude de paramètres qui peuvent être adaptés aux besoins spécifiques de votre serveur ! [ici](https://Thorndoc.vercel.app/).\n\n[Ajoutez-moi à votre serveur](https://discord.com/api/oauth2/authorize?client_id=879449679916568626&permissions=139855219863&scope=bot%20applications.commands)",
    list        : "Liste des commandes",
    footer      : ( p ) => `Vous pouvez taper ${p}help avec le nom de la commande pour plus de détails`

};