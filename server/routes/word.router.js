const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {

    let id = req.params
    console.log('in word router body is', id.id);

    const queryText = `SELECT error.id, errorcode, topic, url, site, refrences FROM error
        JOIN url ON error.id = url.error_id WHERE refrences ILIKE $1`;
    pool.query(queryText, [`%${id.id}%`])
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