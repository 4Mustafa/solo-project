const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const request = require('request');
var keyword_extractor = require("keyword-extractor");
const { rejectUnauthenticated } = require('../modules/authentication-middleware');





router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);

    const queryText = `SELECT error.id,errorcode,topic,url, site, refrences, user_id, rating, has_voted, direction FROM error
JOIN url ON error.id = url.error_id`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});


router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in post item', req.body);
    let sqlText = `INSERT INTO "error" ("errorcode", "topic", "user_id") VALUES ($1, $2, $3) RETURNING id`;
    let sqlText2 = `INSERT INTO "url" ("url", "site","error_id","refrences") VALUES ($1, $2, $3, $4);`;

    request(`${req.body.url}`, function (error, response, body) {
        refrenceWords = keyword_extractor.extract(body, {
            language: "english",
            remove_digits: true,
            return_changed_case: true,
            remove_duplicates: false

        });
        console.log(refrenceWords);

        function looper(array) {
            let Words = []
            console.log(array);
            for (let i = 0; i < array.length; i++) {
                if (/[0 - 9 / $ -/:-?{-~!"^_`\[\]]/gi.test(array[i]) === false && array[i].length < 10 && array[i].length > 3) {
                    Words.push(array[i])
                }
            }

            return (Words);
        }

        pool.query(sqlText, [req.body.errorCode, req.body.topic, req.body.user_id]).then((response) => {
            pool.query(sqlText2, [req.body.url, req.body.siteName, response.rows[0].id, looper(refrenceWords)]).then(() => {
                res.sendStatus(200);
            })
        }).catch(error => {
            console.log('error in adding item to database ', error)
            res.sendStatus(500);
        });
    });
});


router.delete('/', rejectUnauthenticated, (req, res) => {
    console.log('id of item to delete and user to delete arrived at server', req.body);
    let sqlText = `DELETE FROM "error" WHERE "id" = $1 AND "user_id" = $2`;
    let sqlText2 = `DELETE FROM "url" WHERE "error_id" = $1`;
    let sqlText3 = `DELETE FROM "fav" WHERE "user_id" = $1 AND error_id = $2`;

    pool.query(sqlText2, [req.body.item_id]).then((response) => {
        pool.query(sqlText, [req.body.item_id, req.body.user_id]).then((response) => {
            pool.query(sqlText3, [req.body.user_id, req.body.item_id]).then(() => {
                res.sendStatus(200);
            })
        })
            .catch(error => {
                console.log('error', error);
                res.sendStatus(500);
            });
    });

});


router.put('/', (req, res) => {
    console.log(req.body);

    let id = req.body.id;
    let errorCode = req.body.errorCode;
    let url = req.body.url;
    let siteName = req.body.siteName;
    let topic = req.body.topic;

    let queryText = `UPDATE url SET url = $1, site = $2, error_id = $3 
                    WHERE error_id = $4`;

    let queryText2 = `UPDATE error SET errorcode = $1, topic = $2 
                    WHERE id = $3`;
    pool.query(queryText, [url, siteName, id, id])
        .then((response) => {
            pool.query(queryText2, [errorCode, topic, id]).then(() => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('Error in UPDATE', error);
                res.sendStatus(500);
            })
        });


});







module.exports = router;