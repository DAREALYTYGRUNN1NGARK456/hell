module.exports = {

    noTarget    : "Devi scegliere un membro.",
    noRole      : "Devi scegliere uno o più ruoli.",
    added       : ( added ) => added.length > 1 ? `I ruoli ${ added.join( ", " ) } sono stati aggiunti.` : `Il ruolo ${ added.join( ", " ) } è stato aggiunto.`,
    nothing     : "Non è stato aggiunto nulla..."

};