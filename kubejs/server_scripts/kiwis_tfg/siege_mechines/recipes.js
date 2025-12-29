ServerEvents.recipes(event => {

    event.remove({ mod: 'siegemachines' })

    event.shaped('minecraft:cobblestone', [
        ' M ',
        'MCM',
        ' M '
    ], {
        M: 'tfc:mortar',
        C: '#forge:cobblestone'
    }).id('kiwis_tfg:cobblestone');

     event.shaped('siegemachines:cannonball', [
        ' I ',
        'ICI',
        ' I '
    ], {
        I: 'gtceu:wrought_iron_plate',
        C: 'alekiships:cannonball'
    }).id('kiwis_tfg:cannonball');

     event.shaped(
      Item.of('siegemachines:giant_arrow', 3),
      [
      '  J',
      ' S ',
      'F  '
    ],
    {
      J: 'tfc:metal/javelin_head/wrought_iron',
      S: 'gtceu:long_wood_rod',
      F: 'minecraft:feather'

    }).id('kiwis_tfg:giant_arrow');



     event.shaped('siegemachines:turret_base', [
        'SRS',
        'PHP',
        'SRS'
    ], {
        S: 'gtceu:wrought_iron_screw',
        R: 'gtceu:long_treated_wood_rod',
        P: 'gtceu:treated_wood_planks',
        H: '#forge:tools/hammers'
    }).id('kiwis_tfg:turret_base');


    event.shaped('kubejs:turret_wheels', [
        ' H ',
        'WRW',
        ' M '
    ], {
        H: '#forge:tools/hammers',
        W: '#tfcastikorcarts:cart_wheel',
        R: 'gtceu:long_wrought_iron_rod',
        M: 'tfc:brass_mechanisms'
    }).id('kiwis_tfg:turret_wheels');


    event.shaped('tfc:brass_mechanisms', [
        'HGF',
        'SPB',
        ' D '
    ], {
        H: '#forge:tools/hammers',
        G: 'gtceu:small_brass_gear',
        F: '#forge:tools/files',
        S: '#forge:small_springs',
        P: 'create:brass_sheet',
        B: 'gtceu:red_alloy_bolt',
        D: '#forge:tools/screwdrivers'
    }).id('kiwis_tfg:brass_mechanisms');


    event.shaped('kubejs:retraction_mechanism', [
        'RCR',
        'CMC',
        'RCR'
    ], {
        R: 'gtceu:treated_wood_rod',
        C: 'firmaciv:rope_coil',
        M: 'tfc:brass_mechanisms'
    }).id('kiwis_tfg:retraction_mechanism');

    event.custom({
  type: 'minecraft:crafting_shaped',
  pattern: [
    'CCF',
    ' TI',
    ' WR'
  ],
  key: {
    C: { item: 'firmaciv:cannon_barrel' },
    F: { item: 'tfg:flintlock_mechanism' },
    T: { item: 'siegemachines:turret_base' },
    I: { item: 'gtceu:double_wrought_iron_plate' },
    W: { item: 'kubejs:turret_wheels' },
    R: { item: 'gtceu:treated_wood_rod' }
  },
  result: {
    item: 'siegemachines:mortar',
    count: 1
  }
}).id('kiwis_tfg:mortar');


   event.custom({
  type: 'minecraft:crafting_shaped',
  pattern: [
    'CCC',
    'BTF',
    'WPS'
  ],
  key: {
    C: { item: 'firmaciv:cannon_barrel' },
    B: { item: 'create:brass_sheet' },
    T: { item: 'siegemachines:turret_base' },
    F: { item: 'tfg:flintlock_mechanism' },
    W: { item: 'kubejs:turret_wheels' },
    P: { item: 'gtceu:treated_wood_planks' },
    S: { item: 'firmaciv:rope_coil' }
  },
  result: {
    item: 'siegemachines:culverin'
  }
}).id('kiwis_tfg:culverin');


    event.custom({
  type: 'minecraft:crafting_shaped',
  pattern: [
    ' FB',
    'RFC',
    'PTM'
  ],
  key: {
    F: { item: 'gtceu:treated_wood_frame' },
    B: { item: 'createdeco:iron_support' },
    R: { item: 'gtceu:treated_wood_rod' },
    C: { item: 'firmaciv:rope_coil' },
    P: { item: 'gtceu:treated_wood_planks' },
    T: { item: 'siegemachines:turret_base' },
    M: { item: 'kubejs:retraction_mechanism' }

  },
  result: {
    item: 'siegemachines:catapult'
  }
}).id('kiwis_tfg:catapult');


event.custom({
  type: 'minecraft:crafting_shaped',
  pattern: [
    'FCS',
    'FLM',
    'TTT'
  ],
  key: {
    F: { item: 'gtceu:treated_wood_frame' },
    C: { item: 'firmaciv:rope_coil' },
    S: { item: 'sns:unfinished_leather_sack' },
    L: { item: 'gtceu:double_lead_plate' },
    M: { item: 'kubejs:retraction_mechanism' },
    T: { item: 'siegemachines:turret_base' }
  },
  result: {
    item: 'siegemachines:trebuchet'
  }
}).id('kiwis_tfg:trebuchet');

 event.custom({
  type: 'minecraft:crafting_shaped',
  pattern: [
    'SCS',
    'RPM',
    ' T '
  ],
  key: {
    S: { item: 'firmaciv:rope_coil' },
    C: { item: 'minecraft:crossbow' },
    R: { item: 'gtceu:treated_wood_rod' },
    P: { item: 'gtceu:wrought_iron_plate' },
    M: { item: 'kubejs:retraction_mechanism' },
    T: { item: 'siegemachines:turret_base' }
  },
  result: {
    item: 'siegemachines:ballista'
  }
}).id('kiwis_tfg:ballista');

event.custom({
  type: 'minecraft:crafting_shaped',
  pattern: [
    'PPP',
    'LTT',
    'WWW'
  ],
  key: {
    P: { item: 'gtceu:treated_wood_planks' },
    L: { item: 'gtceu:double_lead_plate' },
    T: { item: 'siegemachines:turret_base' },
    W: { item: 'kubejs:turret_wheels' }
  },
  result: {
    item: 'siegemachines:battering_ram'
  }
}).id('kiwis_tfg:battering_ram');

event.custom({
  type: 'minecraft:crafting_shaped',
  pattern: [
    'L  ',
    'FL ',
    'WTL'
  ],
  key: {
    L: { item: 'minecraft:ladder' },
    F: { item: 'gtceu:treated_wood_frame' },
    W: { item: 'kubejs:turret_wheels' },
    T: { item: 'siegemachines:turret_base' }
  },
  result: {
    item: 'siegemachines:siege_ladder'
  }
}).id('kiwis_tfg:siege_ladder');


});