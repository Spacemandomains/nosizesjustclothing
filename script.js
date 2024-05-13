// Initialize array to store user credentials
let users = [];

// Check if there are existing users in local storage
const storedUsers = localStorage.getItem('users');
if (storedUsers) {
    users = JSON.parse(storedUsers);
}

// Login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        // Redirect to dashboard on successful login
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});

// Registration form submission
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Check if the username is already taken
    const usernameExists = users.some(user => user.username === newUsername);

    if (usernameExists) {
        document.getElementById('error-message').innerText = 'Username already exists. Please choose a different username.';
    } else {
        // Add new user to the array
        users.push({ username: newUsername, password: newPassword });
        // Save updated user array to local storage
        localStorage.setItem('users', JSON.stringify(users));
        // Display success message
        document.getElementById('success-message').innerText = 'Registration successful! You can now login with your new credentials.';
    }
});

