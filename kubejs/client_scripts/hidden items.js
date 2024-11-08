JEIEvents.hideItems(event => {
    event.hide([
        'kubejs:obsidan_onion',
        'partial_key'
    ])
  })

StartupEvents.modifyCreativeTab('kubejs:tab', event => {    
    event.removeDisplay(
        'kubejs:obsidan_onion'
    ),
    event.removeDisplay(
        'partial_key'
    )
})