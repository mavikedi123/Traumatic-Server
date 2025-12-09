ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:circuit_assembler/integrated_circuit_mv' }),
    event.remove({ id: 'gtceu:circuit_assembler/integrated_circuit_mv_soldering_alloy' }),
    event.remove({ id: 'gtceu:circuit_assembler/processor_mv' }),
    event.remove({ id: 'gtceu:circuit_assembler/processor_mv_soldering_alloy' }),
    event.remove({ id: 'gtceu:circuit_assembler/integrated_circuit_mv_soc_soldering_alloy' }),
    event.remove({ id: 'gtceu:circuit_assembler/integrated_circuit_mv_soc' }),
    event.remove({ id: 'gtceu:circuit_assembler/electronic_circuit_mv_soldering_alloy' }),
    event.remove({ id: 'gtceu:circuit_assembler/electronic_circuit_mv' }),
    event.remove({ id: 'gtceu:assembler/phenolic_board'}),
    event.remove({ id: 'gtceu:shaped/mv_machine_hull' }),
    event.remove({ id: 'gtceu:assembler/hull_mv' }),
    event.remove({ id: 'gtceu:assembler/hull_mv_annealed' })
    
})