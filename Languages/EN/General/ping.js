module.exports = {

    ping        : "Sending the ball ...",
    latency     : "Latency",
    responce    : "Bot Status",
    components  : "Services",
    servers     : "Servers status",
    events      : "Events",
    state       : ( code ) => ({
        "none"      : "All Systems Operational.",
        "minor"     : "Partial System Outage.",
        "major"     : "Major Service Outage.",
        "critical"  : "It's the shit"
    })[ code ]

};