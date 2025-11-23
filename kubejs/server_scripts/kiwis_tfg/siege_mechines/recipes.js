ServerEvents.recipes(event => {

    event.shaped('siegemachines:siege_workbench', [
        'ILI',
        'WBW',
        'WWW'
    ], {
        I: 'minecraft:iron_ingot',
        L: 'minecraft:leather',
        W: '#minecraft:planks',
        B: '#tfc:workbenches'
    }).id('siegemachines:siege_workbench');

    event.shaped('minecraft:cobblestone', [
        ' M ',
        'MCM',
        ' M '
    ], {
        M: 'tfc:mortar',
        C: '#tfg:interaction/cobble'
    }).id('kiwis_tfg:cobblestone');

});