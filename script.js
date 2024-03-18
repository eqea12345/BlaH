document.getElementById("newGameBtn").addEventListener("click", function() {
    // Redirect to a new game page or perform other actions for starting a new game
    console.log("Starting new game...");
    window.location.href = "new_game.html"; // Redirect to a new game page
});

document.getElementById("loadGameBtn").addEventListener("click", function() {
    // Redirect to a load game page or perform other actions for loading a saved game
    console.log("Loading saved game...");
    window.location.href = "load_game.html"; // Redirect to a load game page
});
