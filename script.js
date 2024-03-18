document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Send a POST request to the server with the username and password
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(function(response) {
        if (response.ok) {
            // Login successful, redirect to game page
            window.location.href = "game.html";
        } else {
            // Login failed, display error message
            document.getElementById("loginMessage").innerText = "Invalid username or password";
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
});
