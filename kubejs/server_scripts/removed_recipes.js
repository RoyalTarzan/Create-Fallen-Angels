ServerEvents.recipes(event=>{
    event.remove({id:'createcasing:sequenced_assembly/chorium_ingot'})
    event.remove({id:'minecraft:beacon'})
    event.remove({output:'createcasing:creative_casing'})
    event.remove({not:{mod:"minecraft"}})
})