const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).send('Olá mundo');
})

app.post('/', (req, res) => {
    res.status(201).send(req.body);
})

app.put('/:id', (req, res) => {
    res.status(202).send({
        codigo: req.params.id,
        corpo: req.body
    });
})

app.delete('/:id', (req, res) => {
    res.status(204).send(req.param.id);
})

app.listen(3000, () => {
    console.log('started api');
})