module.exports = {

    invalidLimit    : "Fornisci un valore numerico per il limite.",
    invalidRange    : "Il limite deve essere compreso tra 1 e 100.",
    noMessage       : "Sembra che si sia verificato un errore durante il recupero dei messaggi",
    invalidTarget   : "L'obiettivo non è valido.",
    error           : ( size ) => `Impossibile rimuovere ${ size } messaggi/o.`,
    deleted         : ( size, target ) => `${ size } messaggi/o ${ ( target && `da ${ target === "me" ? "te" : target }`) || ""} sono/è stati/o rimossi/o`,
    notDeleted      : "Non è possibile eliminare i messaggi più vecchi di 14 giorni, inoltre, è possibile eliminare i messaggi di un utente, ruolo o utilizzare le parole chiave `me`, `bot`, `upload` o `pin`."

};