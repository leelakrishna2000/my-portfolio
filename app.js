// Import required modules
const express = require('express');
const path = require('path');

// Initialize express app
const app = express();

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON and URL encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Route for the sign-in page
app.get('/', (req, res) => {
    res.render('signin');
});


// ... (Previous code remains unchanged)

// Hardcoded user credentials for demo purposes
const users = [
    { username: 'Leela', password: 'Span@123' },
    { username: 'user2', password: 'password2' }
];

// Route for handling form submission and authentication
app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    // Check if the username and password match hardcoded credentials
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // If credentials are valid, redirect to the dashboard
        res.render('dashboard', { username });
    } else {
        // If credentials are invalid, redirect back to the sign-in page
        res.redirect('/signin');
    }
});

// Route for the dashboard
app.get('/dashboard', (req, res) => {
    // Render the dashboard view (for demonstration purposes)
    //res.send('Welcome to the Dashboard!');
    
    res.render('dashboard');
});

// ... (Other routes or middleware)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
