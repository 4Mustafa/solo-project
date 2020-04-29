const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.post('/', (req, res) => {
    console.log(req.body);

    const queryText = `SELECT error.id, errorCode, topic, url, site, refrences FROM error
        JOIN url ON error.id = url.error_id WHERE site LIKE ${req.body.newSite}`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});



module.exports = router; 