"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function ordered_sandwich(...items) {
    console.log("Making a sandwich with following items:");
    items.forEach(item => {
        console.log("-" + item);
    });
}
ordered_sandwich("Mayonaise", "Cheese", "Lettuce");
ordered_sandwich("Onion", "Tomato");
ordered_sandwich("Ham", "Tunaa");
