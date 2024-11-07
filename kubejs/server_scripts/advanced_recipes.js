ServerEvents.recipes(event=>{
    event.recipes.createMechanicalCrafting('kubejs:key_head',[
        'WHGPFPGHW',
        'HGPFDFPGH',
        'GPFDEDFPG',
        'ZFDRBRDFZ',
        'FAABCBAAV',
        'ZVDRBRDVZ',
        'GPVDEDVPG',
        'HGPVDVPGH',
        'WHGPVPGHW'
    ],{
        A:'create:creative_motor',
        R:'create:creative_crate',
        C:'createcasing:creative_casing',
        W:'create:handheld_worldshaper',
        B:'create:creative_blaze_cake',
        F:'create:creative_fluid_tank',
        V:'create_connected:creative_fluid_vessel',
        D:'minecraft:dragon_egg',
        H:'minecraft:dragon_head',
        G:'minecraft:enchanted_golden_apple',
        P:'minecraft:end_portal_frame',
        E:'minecraft:beacon',
        Z:'createcasing:chorium_ingot'
    })
    
    event.recipes.createMechanicalCrafting('create_connected:creative_fluid_vessel',[
        'iBVSWSVBi',
        'BCpZTZpCB',
        'VDHFTFHDV',
        'PpFIRIFpP',
        'LTTRCRTTL',
        'PpFIRIFpP',
        'VdHFTFHdV',
        'BCpZTZpCB',
        'iBVSWSVBi'
    ],{
        R:'railways:fuel_tank',
        T:'create:fluid_tank',
        V:'create_connected:fluid_vessel',
        I:'create:portable_fluid_interface',
        i:'railways:portable_fuel_interface',
        C:'createcasing:creative_casing',
        B:'minecraft:bucket',
        W:'minecraft:water_bucket',
        L:'minecraft:lava_bucket',
        S:'sliceanddice:fertilizer_bucket',
        F:'tfmg:cooling_fluid_bucket',
        Z:'createcasing:chorium_ingot',
        P:'create:mechanical_pump',
        p:'create:fluid_pipe',
        D:'create:netherite_diving_helmet',
        d:'create:netherite_diving_boots',
        H:'create:hose_pulley'
    })
    
    event.recipes.createMechanicalCrafting('kubejs:unformed_key_piece',[
        'CZWZC',
        'DBFBD',
        'DGVGD',
        'DSFSD',
        'CZWZC',
        'DSFSD',
        'DGVGD',
        'DBFBD',
        'CZWZC'
    ],{
        C:'createcasing:creative_casing',
        W:'create:handheld_worldshaper',
        F:'create:creative_fluid_tank',
        V:'create_connected:creative_fluid_vessel',
        D:'minecraft:dragon_egg',
        Z:'createcasing:chorium_ingot',
        G:'minecraft:enchanted_golden_apple',
        B:'create:creative_blaze_cake',
        S:'create:shaft'
    })
    
    event.recipes.createMechanicalCrafting('kubejs:key_form',[
        'DGGFFFGGD',
        'VDB   BDV',
        'V DHAHD V',
        'V TDRDT V',
        'CZAZCZAZC',
        'V TDRDT V',
        'V DHAHD V',
        'VDB   BDV',
        'DGGFFFGGD'
    ],{
        D:'minecraft:dragon_egg',
        Z:'createcasing:chorium_ingot',
        C:'createcasing:creative_casing',
        R:'create:creative_crate',
        A:'create:creative_motor',
        T:'tfmg:ingot_mold',
        B:'tfmg:block_mold',
        H:'minecraft:dragon_head',
        F:'create:creative_fluid_tank',
        V:'create_connected:fluid_vessel',
        G:'minecraft:enchanted_golden_apple'
    })

    event.recipes.createMechanicalCrafting('minecraft:end_portal_frame',[
        'H       H',
        'SN     NS',
        'SN     NS',
        'STN E NTS',
        'STTTTTTTS',
        'SVRCCCRVS',
        'SORCCCROS',
        'SVRCCCRVS',
        'SPPPPPPPS'
    ],{
        H:'minecraft:dragon_head',
        E:'minecraft:ender_eye',
        S:'minecraft:end_stone',
        N:'minecraft:netherite_ingot',
        T:'create_new_age:radioactive_thorium',
        C:'minecraft:end_crystal',
        P:'minecraft:ender_pearl',
        V:'create_power_loader:brass_chunk_loader',
        R:'create:crushing_wheels',
        O:'torchmaster:megatorch'
    })

    event.recipes.createMechanicalCrafting('create:creative_motor',[
        'SG  E  GS',
        'GSG E GSG',
        ' GSGEGSG ',
        '  GSHSG  ',
        'EEEHCHEEE',
        '  GSHSG  ',
        ' GSGEGSG ',
        'GSG E GSG',
        'SG  E  GS'
    ],{
        C:'createcasing:creative_casing',
        S:'create_new_age:reinforced_motor',
        E:'create_new_age:advanced_motor_extension',
        H:'minecraft:dragon_head',
        G:'create_new_age:generator_coil'
        
    })

    event.recipes.createMechanicalCrafting('create:creative_crate',[
        '         ',
        '         ',
        '         ',
        '         ',
        '    C    ',
        '         ',
        '         ',
        '         ',
        '         '
    ],{
        C:'createcasing:creative_casing',
        
    })

    event.recipes.createMechanicalCrafting('create:creative_fluid_tank',[
        '         ',
        '         ',
        '         ',
        '         ',
        '    C    ',
        '         ',
        '         ',
        '         ',
        '         '
    ],{
        C:'createcasing:creative_casing',
        
    })

    event.recipes.createMechanicalCrafting('minecraft:beacon',[
        'GGGGGGGGG',
        'G       G',
        'G SSSSS G',
        'G S N S G',
        'G SNCNS G',
        'G S N S G',
        'G SSSSS G',
        'G       G',
        'OOOOOOOOO'
    ],{
        O:'minecraft:obsidian',
        G:'#forge:glass',
        N:'minecraft:nether_star',
        C:'minecraft:end_crystal',
        S:'minecraft:sea_lantern'
    })

    
    event.recipes.createSequencedAssembly([
        'kubejs:creative_key'
    ],'kubejs:key_head',[
        event.recipes.createDeploying('kubejs:partial_key',['kubejs:partial_key','kubejs:unformed_key_piece']),
        event.recipes.createFilling('kubejs:partial_key',['kubejs:partial_key',Fluid.of('tfmg:lubrication_oil',1000)]),
        event.recipes.createFilling('kubejs:partial_key',['kubejs:partial_key',Fluid.of('minecraft:lava',1000)]),
        event.recipes.createDeploying('kubejs:partial_key',['kubejs:partial_key','kubejs:key_form']),
        event.recipes.createPressing('kubejs:partial_key','kubejs:partial_key'),
        event.recipes.createFilling('kubejs:partial_key',['kubejs:partial_key',Fluid.of('tfmg:cooling_fluid',1000)]),
        event.custom({type: 'create_new_age:energising',
            energy_needed:1000000,
            ingredients: [
                Ingredient.of('kubejs:partial_key').toJson()
            ],
            results: [
                Item.of('kubejs:partial_key')
            ]
        })
    ]).transitionalItem('kubejs:partial_key').loops(1)

    event.recipes.createSequencedAssembly([
        'create:creative_blaze_cake'
    ],'create:blaze_cake',[
        event.recipes.createFilling('create:blaze_cake_base',['create:blaze_cake_base', Fluid.of('kubejs:creative_fluid', 1000)]),
        event.recipes.createPressing('create:blaze_cake_base','create:blaze_cake_base')
    ]).transitionalItem('create:blaze_cake_base').loops(5)

    event.recipes.createMixing('kubejs:creative_fluid',[
        Fluid.of('tfmg:cooling_fluid',1000),
        Fluid.of('tfmg:lubrication_oil',1000),
        Fluid.of('minecraft:lava',1000),
        'minecraft:ender_eye'
    ])

    event.recipes.createDeploying('createcasing:creative_casing',['create:brass_casing','createcasing:chorium_ingot'])
    
    event.recipes.createFilling('createcasing:chorium_ingot',['tfmg:ingot_mold',Fluid.of('kubejs:creative_fluid',250)])
    event.recipes.createFilling('create:handheld_worldshaper',['tfmg:quad_potato_cannon',Fluid.of('kubejs:creative_fluid',1000)])
})