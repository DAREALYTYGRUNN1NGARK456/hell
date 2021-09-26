module.exports = {

    notInVoice  : "Devi essere in un canale vocale",
    busy        : "Thorn è già impegnata con altri ascoltatori, unisciti a loro",
    cantJoin    : "Impossibile accedere al canale vocale.",
    notFound    : "Questo elemento non è stato trovato.",
    cantPlay    : "Questa traccia non può essere riprodotta",
    embedDesc   : ( message, length ) => `<@${ message.author.id }> ha aggiunto un elemento alla playlist ( \`${ length === "0:00" ? "Live" : length }\` )`,
    embedDescPl : ( message, size = 0, length = 0, lives = 0 ) => `<@${ message.author.id }> ha aggiunte ${ size } elementi alla playlist ( \`${ length }\` ${ lives > 0 ? `& \`${ lives } live\`` : "" } )`,
    incorrect   : "L'URL che hai inserito sembra non essere corretto.",
    mix         : "Mix non supportati.",
    cantGetPlst : "Impossibile ottenere questa playlist.",
    emptyPlst   : "La playlist sembra vuota.",
    error       : "C'è stato un errore",
    now         : "Adesso sto riproducendo... ",
};