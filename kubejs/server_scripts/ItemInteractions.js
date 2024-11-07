ItemEvents.rightClicked('kubejs:creative_key',event=>{
    event.player.setGameMode('creative')
    event.item.count--
})