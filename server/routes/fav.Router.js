const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in fav router', req.body);
    let sqlText = `INSERT INTO "fav" ("topic", "errorcode","url", "site", "user_id", "error_id") VALUES ($1, $2, $3, $4, $5, $6)`;
    pool.query(sqlText, [req.body.data.item.topic, req.body.data.item.errorcode, req.body.data.item.url, req.body.data.item.site, req.body.data.ID, req.body.data.item.id]).then((response) => {

        res.sendStatus(200);
    }).catch(error => {
        console.log('error in adding item to database ', error)
        res.sendStatus(500);
    });
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
    let id = req.params.id
    console.log('in getfav router', id);

    const queryText = `SELECT id, errorcode, user_id, topic, url, error_id, site FROM fav WHERE user_id = $1 `;
    pool.query(queryText, [id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let id = req.params.id
    console.log('id of item to delete and user to delete arrived at server', id);
    let sqlText = `DELETE FROM "fav" WHERE "id" = $1`;

    pool.query(sqlText, [id]).then(() => {
        res.sendStatus(200);
        console.log('fav deleted');

    })
        .catch(error => {
            console.log('error', error);
            res.sendStatus(500);
        });

});
module.exports = router;