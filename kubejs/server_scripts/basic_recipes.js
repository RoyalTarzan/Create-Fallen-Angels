ServerEvents.recipes(event=>{
    
    let fenceToFenceGate=(material)=>{
        event.shaped('minecraft:'+material+'_fence_gate',[
            'ABA'
        ],{
            A:'minecraft:stick',
            B:'minecraft:'+material+'_fence'
        })
    }
    
    let backAndForth=(inputItem,outputItem,amount)=>{
        event.shapeless(
            Item.of(outputItem,1),
            [
                amount+'x '+inputItem
            ]
        )

        event.shapeless(
            Item.of(inputItem,amount),
            [
                outputItem
            ]
        )
    }

    let energising=(amount,inputItem,outputItem)=>{
        event.custom({type: 'create_new_age:energising',
            energy_needed:amount,
            ingredients: [
                Ingredient.of(inputItem).toJson()
            ],
            results: [
                Item.of(outputItem)
            ]
        })
    }

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

    fenceToFenceGate('warped')
    fenceToFenceGate('acacia')
    fenceToFenceGate('cherry')
    fenceToFenceGate('mangrove')
    fenceToFenceGate('dark_oak')
    fenceToFenceGate('jungle')
    fenceToFenceGate('birch')
    fenceToFenceGate('spruce')
    fenceToFenceGate('oak')
    fenceToFenceGate('bamboo')
    fenceToFenceGate('crimson')

    energising(1000000,'minecraft:smooth_stone','create_new_age:magnetite_block')

    backAndForth('create_connected:creative_fluid_vessel','create:creative_fluid_tank',1)
})