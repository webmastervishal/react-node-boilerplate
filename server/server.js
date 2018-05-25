const express = require('express');
const path = require('path');
const port = process.env.port || 3000;

const app = express();
app.use(express.static('public'));

app.get('/',(req, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}...`);
});