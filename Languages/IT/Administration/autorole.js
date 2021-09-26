module.exports = {

    enabled         : "L'assegnazione dei ruoli automatica è attivata.",
    notEnabled      : "L'assegnazione dei ruoli automatica è disattivata.",
    currentRoles    : ( currentRoles ) => `I ruoli ${ currentRoles.map( ( x ) => `<@&${x}>` ).join( ", ") } saranno automaticamente assegnati ai nuovi utenti.`,
    disabled        : "L'assegnazione dei ruoli automatica è stata disattivata!",
    cantAdd         : ( roles ) => `I ruoli ${ roles.join( ", " ) } non possono essere aggiunti. I loro permessi sono superiori ai miei.`,
    noRole          : "Devi specificare uno o più ruoli da aggiungere o rimuovere.",
    noChanges       : ( operation ) => `Nessun cambiamento, l'assegnazione dei ruoli automatica era già ${ operation ? "attivata" : "disattivata" }.`,
    nothingToAdd    : "Non ci sono ruoli da aggiungere.",
    error           : "Impossibile continuare, c'è stato un errore.",
    missPerms       : "I seguenti ruoli non sono stati aggiunti.",
    assigned        : ( length ) => length ? "I ruoli assegnati sono" : "Non c'è nessun ruolo da assegnare ;(",

};