ServerEvents.recipes(event => {
    event.remove({output:'copycats:copycat_shaft'}),
    event.remove({output:'copycats:copycat_cogwheel'}),
    event.remove({output:'copycats:copycat_large_cogwheel'}),

    event.replaceInput(
    { id: 'createmissiles:mechanical_crafting/launch_pad' },
    'create:iron_sheet',
    'gtceu:wrought_iron_plate'
  )
});