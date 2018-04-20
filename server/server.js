require('./config/config');

const port = process.env.PORT;
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/usuario', (req, res) => {
    res.send('Hello WOrld');
});
app.post('/usuario', (req, res) => {
    let body = req.body;
    res.status(201).send({
        data: body
    });
});
app.put('/usuario', (req, res) => {

});
app.delete('/usuario', (req, res) => {

});

app.listen(port, () => {
    console.log('Escuchando en puerto: ', port);
});