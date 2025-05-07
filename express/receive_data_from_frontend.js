const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post('/submit', (req, res) => {
    console.log('Received data:', req.body);
    res.send('Data received successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
