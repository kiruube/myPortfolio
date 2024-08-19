document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Form validation and processing
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        fetch('/send-email', { // Endpoint where your backend handles email sending
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for your message, ' + name + '!');
            } else {
                alert('There was an error sending your message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        });
    } else {
        alert('Please fill in all fields.');
    }
});

