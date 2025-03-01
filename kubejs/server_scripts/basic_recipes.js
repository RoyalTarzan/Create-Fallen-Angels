ServerEvents.recipes(event=>{
    
    let fenceToFenceGate=(material)=>{
        event.shaped('minecraft:'+material+'_fence_gate',[
            'ABA'
        ],{
            A:'minecraft:stick',
            B:'minecraft:'+material+'_fence'
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
    
    event.shaped('minecraft:acacia_fence_gate',[
        'ABA'
    ],{
        A:'minecraft:stick',
        B:'minecraft:acacia_fence'
    })

    event.shaped('minecraft:cherry_fence_gate',[
        'ABA'
    ],{
        A:'minecraft:stick',
        B:'minecraft:cherry_fence'
    })

    event.shaped('minecraft:mangrove_fence_gate',[
        'ABA'
    ],{
        A:'minecraft:stick',
        B:'minecraft:mangrove_fence'
    })

    event.shaped('minecraft:dark_oak_fence_gate',[
        'ABA'
    ],{
        A:'minecraft:stick',
        B:'minecraft:dark_oak_fence'
    })

    event.shaped('minecraft:jungle_fence_gate',[
        'ABA'
    ],{
        A:'minecraft:stick',
        B:'minecraft:jungle_fence'
    })

    event.shaped('minecraft:birch_fence_gate',[
        'ABA'
    ],{
        A:'minecraft:stick',
        B:'minecraft:birch_fence'
    })

    event.shaped('minecraft:spruce_fence_gate',[
        'ABA'
    ],{
        A:'minecraft:stick',
        B:'minecraft:spruce_fence'
    })

    event.shaped('minecraft:oak_fence_gate',[
        'ABA'
    ],{
        A:'minecraft:stick',
        B:'minecraft:oak_fence'
    })

    event.custom({type: 'create_new_age:energising',
        energy_needed:1000000,
        ingredients: [
            Ingredient.of('minecraft:smooth_stone').toJson()
        ],
        results: [
            Item.of('create_new_age:magnetite_block')
        ]
    })


    
})