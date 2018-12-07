const express = require('express');
const app = express();
const path = require('path');

app.use('/style.css',(req, res) => {
    res.sendFile(path.join(__dirname + '/client/style.css'));
});

app.use('/script.js',(req, res) => {
    res.sendFile(path.join(__dirname + '/client/script.js'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(8080, () => {
    console.log('server started on port 8080');
})