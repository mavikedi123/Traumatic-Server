ServerEvents.recipes(event => {

    event.remove({ output: 'tfcambiental:wool_sweater' }),
    event.remove({ output: 'tfcambiental:wool_hat' }),
    event.remove({ output: 'tfcambiental:wool_pants' }),
    event.remove({ output: 'tfcambiental:wool_boots' }),
    event.remove({ output: 'tfcambiental:silk_cowl' }),
    event.remove({ output: 'tfcambiental:silk_shirt' }),
    event.remove({ output: 'tfcambiental:silk_pants' }),
    event.remove({ output: 'tfcambiental:silk_shoes' }),
    event.remove({ output: 'tfcambiental:burlap_cowl' }),
    event.remove({ output: 'tfcambiental:burlap_shirt' }),
    event.remove({ output: 'tfcambiental:burlap_pants' }),
    event.remove({ output: 'tfcambiental:burlap_shoes' }),


 event.recipes.tfc.damage_inputs_shaped_crafting(   
  event.shaped(Item.of('tfcambiental:wool_sweater'), [
    ' N ',
    ' W ',
    '   '
  ], {
    W: 'tfc:wool_cloth',
    N: '#tfc:sewing_needles'
  })
  .id('tfcambiental:wool_sweater'));
 event.recipes.tfc.damage_inputs_shaped_crafting(
  event.shaped(Item.of('tfcambiental:wool_hat'), [
    ' W ',
    ' N ',
    '   '
  ], {
    W: 'tfc:wool_cloth',
    N: '#tfc:sewing_needles'
  })
  .id('tfcambiental:wool_hat'));
 event.recipes.tfc.damage_inputs_shaped_crafting(
  event.shaped(Item.of('tfcambiental:wool_pants'), [
    '   ',
    ' W ',
    ' N '
  ], {
    W: 'tfc:wool_cloth',
    N: '#tfc:sewing_needles'
   
  })
  .id('tfcambiental:wool_pants'));
 event.recipes.tfc.damage_inputs_shaped_crafting(
  event.shaped(Item.of('tfcambiental:wool_boots'), [
    '   ',
    ' WN',
    '   '
  ], {
    W: 'tfc:wool_cloth',
    N: '#tfc:sewing_needles'
   
  })
  .id('tfcambiental:wool_boots'));

  event.recipes.tfc.damage_inputs_shaped_crafting(   
  event.shaped(Item.of('tfcambiental:silk_shirt'), [
    ' N ',
    ' W ',
    '   '
  ], {
    W: 'tfc:silk_cloth',
    N: '#tfc:sewing_needles'
  })
  .id('tfcambiental:silk_shirt'));
 event.recipes.tfc.damage_inputs_shaped_crafting(
  event.shaped(Item.of('tfcambiental:silk_cowl'), [
    ' W ',
    ' N ',
    '   '
  ], {
    W: 'tfc:silk_cloth',
    N: '#tfc:sewing_needles'
  })
  .id('tfcambiental:silk_cowl'));
 event.recipes.tfc.damage_inputs_shaped_crafting(
  event.shaped(Item.of('tfcambiental:silk_pants'), [
    '   ',
    ' W ',
    ' N '
  ], {
    W: 'tfc:silk_cloth',
    N: '#tfc:sewing_needles'
   
  })
  .id('tfcambiental:silk_pants'));
 event.recipes.tfc.damage_inputs_shaped_crafting(
  event.shaped(Item.of('tfcambiental:silk_shoes'), [
    '   ',
    ' WN',
    '   '
  ], {
    W: 'tfc:silk_cloth',
    N: '#tfc:sewing_needles'
   
  })
  .id('tfcambiental:silk_shoes'));

  event.recipes.tfc.damage_inputs_shaped_crafting(   
  event.shaped(Item.of('tfcambiental:burlap_shirt'), [
    ' N ',
    ' W ',
    '   '
  ], {
    W: 'tfc:burlap_cloth',
    N: '#tfc:sewing_needles'
  })
  .id('tfcambiental:burlap_shirt'));
 event.recipes.tfc.damage_inputs_shaped_crafting(
  event.shaped(Item.of('tfcambiental:burlap_cowl'), [
    ' W ',
    ' N ',
    '   '
  ], {
    W: 'tfc:burlap_cloth',
    N: '#tfc:sewing_needles'
  })
  .id('tfcambiental:burlap_cowl'));
 event.recipes.tfc.damage_inputs_shaped_crafting(
  event.shaped(Item.of('tfcambiental:burlap_pants'), [
    '   ',
    ' W ',
    ' N '
  ], {
    W: 'tfc:burlap_cloth',
    N: '#tfc:sewing_needles'
   
  })
  .id('tfcambiental:burlap_pants'));
 event.recipes.tfc.damage_inputs_shaped_crafting(
  event.shaped(Item.of('tfcambiental:burlap_shoes'), [
    '   ',
    ' WN',
    '   '
  ], {
    W: 'tfc:burlap_cloth',
    N: '#tfc:sewing_needles'
   
  })
  .id('tfcambiental:burlap_shoes'));
})


