module.exports = {

    ping        : "Aspetta un po'...",
    latency     : "Latenza",
    responce    : "Stato bot",
    components  : "Servizi",
    servers     : "Stato dei server",
    events      : "Eventi",
    state       : ( code ) => ({
        "none"      : "Tutti i sistemi operazionali.",
        "minor"     : "Interruzione parziale del sistema",
        "major"     : "Grave interruzione del sistema.",
        "critical"  : "Porca madonna."
    })[ code ]

};