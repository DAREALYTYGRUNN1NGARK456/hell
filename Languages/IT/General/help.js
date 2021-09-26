const emojis = require("../../../Assets/emojis.json");

module.exports = {

    doc         : "Documentazione",
    notFound    : "Il comando che stai cercando non è stato trovato, prova a vedere la lista.",
    pTitle      : ( cName ) => `\` ${cName[0].toUpperCase()}${cName.slice(1)} \` Informazioni`,
    pSName      : "Sintassi",
    pSValue     : ( p, cmdUs ) => `\`\`\`${p}${cmdUs}\`\`\`\`[]\` = Argomenti richiesti, — \`{}\` = Argomenti opzionali.`,
    pEName      : "eSEMPI",
    pEValue     : ( p, cmdEx ) => `\`\`\`${cmdEx && cmdEx.map( ( ex ) => `${p}${ex}` ).join( "\n" ) || "Nessun esempio disponibile" }\`\`\`\n`,

    firstTitle  : `Thorn - Pergamene`,
    firstDesc   : "Thorn è un bot Discord completamente personalizzabile in costante crescita. Ha una serie di comandi e una moltitudine di impostazioni che possono essere adattate alle esigenze specifiche del tuo server!\n\n<:information:879793017966428160> Tieni presente che Thorn è ancora in **BETA** e contiene alcuni bug. Per favore sii paziente e supportaci segnalando qualsiasi bug che trovi.\n\nLe seguenti pergamene dei comandi sono disponibili per sfogliare, puoi visualizzare diverse pergamene dei comandi tramite i pulsanti sottostanti..\n\n[Aggiungimi al tuo server] (https://discord.com/api/oauth2/authorize?client_id=879449679916568626&permissions=139855219863&scope=bot%20applications.commands)",
    list        : `Pergamene dei comandi`,
    footer      : ( p ) => `Puoi usare ${p}help con il nome dei comandi per i dettagli`

};