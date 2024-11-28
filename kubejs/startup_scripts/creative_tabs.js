Platform.mods.kubejs.name = 'Create: Fallen Angels'

StartupEvents.modifyCreativeTab('kubejs:tab', event => {    
    event.removeDisplay(
        'kubejs:obsidan_onion'
    ),
    event.removeDisplay(
        'partial_key'
    )

    event.icon = "kubejs:creative_key"
})