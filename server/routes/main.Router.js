const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const request = require('request');
var keyword_extractor = require("keyword-extractor");
const { rejectUnauthenticated } = require('../modules/authentication-middleware');





router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);

    const queryText = `SELECT error.id,errorcode,topic,url, site,refrences FROM error
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
    let sqlText = `INSERT INTO "error" ("errorcode", "topic") VALUES ($1, $2) RETURNING id`;
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
            let finalWords = []
            for (let i = 0; i < array.length; i++) {
                if (array[i].length > 10) {
                    finalWords.push(array[i])
                }
            }
            return finalWords
        }


        pool.query(sqlText, [req.body.errorCode, req.body.topic,]).then((response) => {
            pool.query(sqlText2, [req.body.url, req.body.siteName, response.rows[0].id, looper(refrenceWords)]).then(() => {
                res.sendStatus(200);
            })
        }).catch(error => {
            console.log('error in adding item to database ', error)
            res.sendStatus(500);
        });
    });



});


router.delete('/:id', rejectUnauthenticated, (req, res) => {
    Id = req.params.id;
    console.log('id of item to delete and user to delete arrived at server', Id);
    let sqlText = `DELETE FROM "error" WHERE "id" = $1`;
    let sqlText2 = `DELETE FROM "url" WHERE "error_id" = $1`;

    pool.query(sqlText2, [Id]).then((response) => {
        pool.query(sqlText, [Id]).then(() => {
            res.sendStatus(200);
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

