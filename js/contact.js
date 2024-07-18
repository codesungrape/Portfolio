
document.getElementById('contact-us-title').onclick = randomBackgroundColor;
document.getElementById('nav-container').onclick = randomBackgroundColor
document.getElementById('contact-us-text').onclick = randomBackgroundColor



function randomBackgroundColor() {
    let newBackgroundColor = "";
    let x = Math.floor(Math.random()*7); 

    switch (x){
        case 0:
            newBackgroundColor = '#F46036'; //burnt orange
            break;
        case 1: 
            newBackgroundColor = '#2E294E'; //dark purple
            break;
        case 2:
            newBackgroundColor = '#1B998B'; //turqu
            break; 
        case 3:
            newBackgroundColor= '#E71D36'; //red
            break
        case 4:
            newBackgroundColor = '#EB3358'; //deepPink
            break;
        case 5:
            newBackgroundColor = '#95619C'; //lightPurple
            break;
     
    }

    let contactTitleElement = document.getElementById('contact-us-title');
    let contactTextElement = document.getElementById('contact-us-text');
    let navElement = document.getElementById('nav-container');

    contactTitleElement.style.backgroundColor = newBackgroundColor;
    navElement.style.backgroundColor = newBackgroundColor;
    contactTextElement.style.borderBottom = `2px solid ${newBackgroundColor}`;

}


// Set the function to run every 5 seconds (5000 milliseconds) via built-in JS Web API function
setInterval(randomBackgroundColor, 2000);









/* copied from GPT- need to understand what this is before i input it


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Get form values
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate form inputs
    let isValid = true;

    if (fullname === '') {
        showError('fullname', 'Name is required.');
        isValid = false;
    }

    if (email === '') {
        showError('email', 'Email is required.');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
    }

    if (subject === '') {
        showError('subject', 'Subject is required.');
        isValid = false;
    }

    if (message === '') {
        showError('message', 'Message is required.');
        isValid = false;
    }

    if (isValid) {
        // Submit form data (optional)
        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullname, email, subject, message })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Form submitted successfully!');
            document.getElementById('contactForm').reset(); // Optional: Reset form after submission
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting form. Please try again later.');
        });
    }
});

function showError(elementId, errorMessage) {
    const element = document.getElementById(elementId);
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.textContent = errorMessage;
    element.parentNode.insertBefore(errorDiv, element.nextSibling);
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
        element.remove();
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
*/