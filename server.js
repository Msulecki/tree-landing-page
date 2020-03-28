const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client", "build")));

app.get('/api/all', (req, res) => {
    fs.readFile('./data/data.json', (err, data) => {
        setTimeout(() => { // shitty server emulation
            return err ? console.error(err) : res.json(JSON.parse(data))
        }, 1000)

    })
})

app.get('/api/episodes', (req, res) => {
    fs.readFile('./data/episodes.json', (err, data) => {
        return err ? console.error(err) : res.json(JSON.parse(data))
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(port, () => console.log(`listening on port ${port}`))