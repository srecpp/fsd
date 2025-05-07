const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 8000;

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'myDatabase';
const collectionName = 'formData';

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post('/submit', async (req, res) => {
    const client = new MongoClient(mongoUrl);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const result = await collection.insertOne(req.body);

        console.log('Data inserted:', req.body);
        res.send('Data received and stored in MongoDB!');
    } catch (err) {
        console.error('Error inserting into MongoDB:', err);
        res.status(500).send('Error storing data');
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
