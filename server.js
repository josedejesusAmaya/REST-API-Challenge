require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const covidCasesRouter = require('./routes/covid');
app.use('/covid', covidCasesRouter);

app.listen(3000, () => console.log('Server ready'));
