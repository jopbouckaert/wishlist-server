const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
require('./app/routes/wish.routes.js')(app);
mongoose.Promise = global.Promise;

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});