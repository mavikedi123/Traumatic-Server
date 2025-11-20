// server_scripts/creator_nbt.js

ItemEvents.crafted((event) => {
    // event.item is the item stack that was crafted
    // event.player is the player entity
    
    // Check if the crafted item matches the one you want to track (e.g., diamond pickaxe)
    // Use `event.item.id` for a specific item, or remove the if statement to track all crafted items
    if (event.item.id === 'createdeco:copper_coin') {
        const player = event.player;
        if (player) {
            // Modify the item's NBT
            // The item in the event is mutable, so we can set the NBT directly
            event.item.nbt = event.item.nbt ?? {}; // Ensure NBT tag compound exists
            event.item.nbt.creator = player.username; // Set the Creator tag with the player's name
        }
    }
});