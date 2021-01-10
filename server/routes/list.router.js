const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET ROUTE
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "notes" ORDER BY "id"`
    pool.query(queryText).then((result) => {
        console.log(result);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
}); //end GET


//POST ROUTE
router.post('/', (req, res) => {
    console.log(req.body);

    const queryText = `
    INSERT INTO "notes" ("priority", "note")
    VALUES ($1, $2);`;

    pool.query(queryText, [req.body.priority, req.body.note])
        .then((result) => {
            console.log(result);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
}); //end POST


//PUT ROUTE
router.put('/:id', (req, res) => {
    let notes = req.body;
    let id = req.params.id;

    console.log(`Updating TO DO note ${id} with`, notes.completed);

    let queryText;

    if (notes.completed === 'true') {
        queryText = `
            UPDATE "notes"
            SET "completed" = '✓'
            WHERE "id" = $1;`
    } else {
        res.sendStatus(400);
        return;
    }

    pool.query(queryText, [id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})


//DELETE ROUTE
router.delete('/:id', (req, res) => {
    console.log(req.params.id);

    const queryText = `DELETE FROM "notes" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(204);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})






module.exports = router;