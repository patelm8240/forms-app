const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


app.post('/api/submit', (req, res) => {
    console.log('Form Data:', req.body);
    res.status(200).json({ message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// node server.js