const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection
const url = 'mongodb://127.0.0.1:27017/newdatabase';

async function run() {
    const client = new MongoClient(url);
    await client.connect();
    try {
        console.log("Connected to MongoDB database");

        // Define root route and other routes...
        app.get("/", (req, res) => {
            res.render('index');
        });
        app.get("/index", (req, res) => {
            res.render('index');
        });
        app.get("/features", (req, res) => {
            res.render('features');
        });
        app.get("/login", (req, res) => {
            res.render('login');
        });
        app.get("/menu", (req, res) => {
            res.render('menu');
        });
        app.get("/signup", (req, res) => {
            res.render('signup');
        });
        app.get("/services", (req, res) => {
            res.render('services');
        });

        app.post('/register', async (req, res) => {
            try {
                const db = client.db();
                const collection = db.collection('mycollection');
                const { name, email, password } = req.body;
                await collection.insertOne({ name, email, password });
                console.log(req.body);
                console.log('Data inserted successfully.');
                res.send('Data inserted successfully.');
            } catch (err) {
                console.log('Error occurred while inserting data into MongoDB:', err);
                res.status(500).send('Error occurred while inserting data into MongoDB');
            }
        });

        // Start the server
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } finally {
        // Do nothing here, since the client connection should remain open while the server is running
        // The client connection will be closed when the server is stopped
    }
}

run().catch(console.dir);
