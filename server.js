const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

let users = [];

// API endpoints
app.get('/users', (req, res) => res.json(users));

app.post('/register', (req, res) => {
    const { name, email, password, gender, course, institution, location, address } = req.body;
    if (!name || !email || !password || !gender || !course || !institution || !location || !address) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    users.push({ name, email, password, gender, course, institution, location, address });
    res.json({ message: 'User registered successfully!', users });
});

app.put('/users/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const { name, email, password, gender, course, institution, location, address } = req.body;
    if (index < 0 || index >= users.length) return res.status(404).json({ message: 'User not found!' });
    users[index] = { name, email, password, gender, course, institution, location, address };
    res.json({ message: 'User updated successfully!', users });
});

app.delete('/users/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index < 0 || index >= users.length) return res.status(404).json({ message: 'User not found!' });
    users.splice(index, 1);
    res.json({ message: 'User deleted successfully!', users });
});

// Fallback to index.html (fixed)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

let users = [];

// API endpoints
app.get('/users', (req, res) => res.json(users));

app.post('/register', (req, res) => {
    const { name, email, password, gender, course, institution, location, address } = req.body;

    if (!name || !email || !password || !gender || !course || !institution || !location || !address) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    users.push({ name, email, password, gender, course, institution, location, address });
    res.json({ message: 'User registered successfully!', users });
});

app.put('/users/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index < 0 || index >= users.length) {
        return res.status(404).json({ message: 'User not found!' });
    }

    users[index] = req.body;
    res.json({ message: 'User updated successfully!', users });
});

app.delete('/users/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index < 0 || index >= users.length) {
        return res.status(404).json({ message: 'User not found!' });
    }

    users.splice(index, 1);
    res.json({ message: 'User deleted successfully!', users });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
