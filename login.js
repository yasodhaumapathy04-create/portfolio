function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Demo login credentials
    const correctUsername = "admin";
    const correctPassword = "44444";

    if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Login successful!";
        

        setTimeout(() => {
            window.location.href = "port.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
    }
}

// Hide the "Back to Portfolio" link on load
window.addEventListener('DOMContentLoaded', function () {
    const backLink = document.querySelector('a[href="index.html"]');
    if (backLink) {
        backLink.style.display = 'none';
    }
});