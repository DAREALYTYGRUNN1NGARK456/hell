module.exports = {

    notFound    : "Nessun utente trovato",
    noOperator  : "Devi provvedere un operatore. `+`, `-`, `*`, `/` or `=`",
    noQuantity  : "Devi provvedere una quantità valida.",
    noChange    : "Nessun cambiamento è stato fatto.",
    updated     : "I livelli sono stati aggiornati.",
    updatedData : ( updated, target ) => `I livelli di ${ updated > 1 ? `${ updated } membri` : `<@${ target[0]._ID }>` } sono stati aggiornati`,
    error       : "C'è stato un errore!",

};