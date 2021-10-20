const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json()); //app.use(bodyParser.json()); DEPRECATED
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.get('*', (req, res) => {
    res.send('chanchito feliz');
})

module.exports = app;