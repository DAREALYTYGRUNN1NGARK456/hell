module.exports = {

    details     : ( banned ) => `<@${banned.target.id}> è stato bandito per i/il seguente/i motivo/i:\n\n> ${banned.reason ? banned.reason : "Nessun motivo provveduto." }\nBandito da <@${banned.executor.id}>`,
    missDetails : ( user   ) => `<@${user.id}> è stato bandito, ma non so da chi o che cosa ...`,
    error       : "Qualcuno è stato bandito, ma sembra che ci sia stato un errore."

};