StartupEvents.registry('item',event=>{
    event.create('creative_key').displayName('§5Creative Key').unstackable()
    event.create('key_form').displayName('§5Creative Key Form').unstackable()
    event.create('key_head').displayName('§5Creative Key Head').unstackable()
    event.create('unformed_key_piece').displayName('§5Creative Key Press Form').unstackable()
    event.create('partial_key').displayName('§5Partial Key').unstackable()
    event.create('obsidan_onion').displayName('Obsidian onion').unstackable()
})

StartupEvents.registry('fluid',event=>{
    event.create('creative_fluid').displayName('§5Creative Fluid')
})