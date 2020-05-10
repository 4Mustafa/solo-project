const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);

    const queryText = `SELECT error.id, errorCode, topic, url, site, refrences FROM error
        JOIN url ON error.id = url.error_id WHERE error.errorcode ILIKE $1`;
    pool.query(queryText, [`%${req.body.newError}%`])
        .then((result) => {
            res.send(result.rows);
            console.log('results.rows are', result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});




module.exports = router;