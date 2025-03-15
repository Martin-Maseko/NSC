/* Navigation Bar */

// Select the navigation icon element by its ID.
const navIcon = document.getElementById('navIcon');

// Add an event listener to the navigation icon.
// When the icon is clicked, the provided function will be executed.
navIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation icon.
    // This class is used to control the visibility of the dropdown menu.
    navIcon.classList.toggle('active');
});

/* Navigation Bar End */

// Select the "Join Napoli" button element by its ID.
const joinBtn = document.getElementById('join-btn');

// Select the join form element by its ID.
const joinForm = document.getElementById('joinForm');

// Add an event listener to the "Join Napoli" button.
// When the button is clicked, the provided function will be executed.
joinBtn.addEventListener('click', function() {
    // Toggle the 'active' class on the join form.
    // This class is used to control the visibility of the form.
    joinForm.classList.toggle('active');

    // Check if the join form has the 'active' class.
    if (joinForm.classList.contains('active')) {
        // If the form is active (visible), change the button's text to "Close Form".
        joinBtn.textContent = 'Close Form';
    } else {
        // If the form is not active (hidden), change the button's text back to "Join Napoli".
        joinBtn.textContent = 'Join Napoli';
    }
});

const membershipForm = document.getElementById('membershipForm');

membershipForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form data
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const school = document.getElementById('school-name').value;
    const grade = document.getElementById('grade').value;
    const previousClub = document.getElementById('previous club').value;
    const phone = document.getElementById('phone').value;
    const position = document.getElementById('position').value;
    const message = document.getElementById('migrate reason').value;


    // Create an object to hold the data
    const formData = {
        name: name,
        surname: surname,
        age : age,
        email: email,
        address : address,
        school: school,
        grade: grade,
        previousclub: previousClub, 
        position: position,
        phone: phone,
        leaveMessage: message
    };

    // Console log the form data
    console.log(formData);

    // Optionally, you can clear the form fields after logging
    membershipForm.reset();
    joinForm.classList.remove('active');
    joinBtn.textContent = "Join Napoli";
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form Data:');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can clear the form fields:
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDisplay = document.getElementById('error');
    errorDisplay.textContent = "";

    // Simple client-side validation (replace with server-side validation)
    if (!username || !password) {
        errorDisplay.textContent = "Please enter username and password.";
        return;
    }

    // Simulate login (replace with actual authentication)
    if (username === 'test' && password === 'password') {
        // Successful login
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        // Incorrect credentials
        errorDisplay.textContent = "Incorrect username or password.";
    }
}