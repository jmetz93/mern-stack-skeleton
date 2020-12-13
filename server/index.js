require('dotenv').config();

const express = require('express');
const parser = require('body-parser');
const path = require('path');

// intialize database
require('../db/config');

const { router } = require('./router');

// security for server
const helmet = require('helmet');
// secure headers
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

// app.use(helmet());
// app.use(cors());

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(process.env.PORT, err => {
  err ? console.log('Failed to start server') : console.log('Listening on port: ', PORT);
})