const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in minus item', req.body.data);
    let sqlText = `UPDATE  "error" SET rating = rating + 1 WHERE id = $1`;
    pool.query(sqlText, [req.body.data]).then((response) => {
        res.sendStatus(200);

    }).catch(error => {
        console.log('error in adding item to database ', error)
        res.sendStatus(500);
    });
});


module.exports = router;