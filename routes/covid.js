const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Hello, World
router.get('/', (req, res) => {
    res.send('Hello, World');
})

// Info about Covid19 in Mexico
router.get('/info', async (req, res) => {
    const info = {
        'confirmed': 0,
        'suspected': 0,
        'healed': 0
    }

    covidAPI()
        .then((response) => {
            info.confirmed = response.total_confirmed;
            info.suspected = response.total_suspected;
            info.healed = response.total_healed;
            res.json(info);
        }).catch((err) => {
            res.status(500).json({ message: err.message});
        });
})

function covidAPI() {
    return fetch('https://overflow.ai/coronavirus/api')
        .then(promise => promise.json())
        .then((res) => {
            return res;
        }).catch((err) => {
            console.error(err);
        });
}

module.exports = router;
