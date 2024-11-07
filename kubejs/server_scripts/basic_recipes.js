ServerEvents.recipes(event=>{
    event.recipes.createSequencedAssembly([
        'minecraft:crying_obsidian'
    ],'minecraft:obsidian',[
        event.recipes.createDeploying('kubejs:obsidan_onion',['minecraft:obsidian','farmersdelight:onion']),
        event.recipes.createDeploying('kubejs:obsidan_onion',['kubejs:obsidan_onion','#forge:tools/knives']),
        event.recipes.createPressing('kubejs:obsidan_onion','kubejs:obsidan_onion')
    ]).transitionalItem('kubejs:obsidan_onion').loops(1)
    
    event.shaped('tfmg:fireclay',[
        'AA',
        'AA'
    ],{
        A:'tfmg:fireclay_ball'
    })

    event.shaped('4x minecraft:chest',[
        'AAA',
        'A A',
        'AAA'
    ],{
        A:'#minecraft:logs'
    })
})