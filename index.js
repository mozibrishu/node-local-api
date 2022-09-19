const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');
const port = process.env.PORT || 3001;

const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

app.get('/', (req, res) => {
    res.send("It's Working")
})

app.listen(port, function () {
    console.log('listening on port :' + port);
});