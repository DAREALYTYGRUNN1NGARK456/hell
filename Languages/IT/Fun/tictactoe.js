module.exports = {

    notPlayer   : "Non è un utente valido.",
    noFriend    : "Non hai amici? prima o poi potrò giocare con te ;) ",
    noMe        : () => ["Sto imparando a diventare invicibile in questo gioco, aspetta un po' ;3", "Non ho un mouse, non posso cliccare!", "Non voglio giocare <:angry:850736814498250773>"][~~( Math.random() * 3 )],
    maxCell     : "Mi spiace, la tavola non può essere più grande di 5 celle",
    startTurn   : ( _currentPlayer ) => `È il turno di <@${_currentPlayer}> per iniziare`,
    winner      : ( winner ) => `<@${winner}> ha vinto`,
    drawn       : "Pareggio",
    turn        : ( _currentPlayer ) => `Turno di <@${_currentPlayer}>`,

};