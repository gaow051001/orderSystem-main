var express = require('express')
var router = express.Router()
var pool = require('./config')

// ****************************************
// ***** Test Route to ensure connectivity
// ****************************************

// return.good should show connection message
router.get('/test', (req, res) => {
    res.json( { good: "THE APP IS CONNECTED" } );
});
  
// prints sent fields to console and returns validation message
router.put('/test', (req, res, next) => {
// values should match sending json values
const values = [
    req.body.field1, req.body.field2, req.body.field3
    ]
    console.log(values);

    res.json( { good: "VALUES LOGGED IN SERVER CONSOLE" } );
});

router.get('/ordertest', (req, res, next) => {
    pool.query(`SELECT * FROM customer;`,(q_err, q_res) => {
        if (q_err) return next(q_err);
        res.json(q_res.rows);
    });
});

router.get('/menu_items', (req, res, next) => {
    pool.query(`SELECT * FROM menu_item;`,(q_err, q_res) => {
        if (q_err) return next(q_err);
        res.json(q_res.rows);
    });
});



router.get('/orderticket', (req, res, next) => {
    pool.query(`SELECT * FROM customer;`,(q_err, q_res) => {
        if (q_err) return next(q_err);
        res.json(q_res.rows);
    });
});

router.get('/orderticket:uid', (req, res, next) => {
    pool.query(`SELECT p.menu_id, p.sort_id, p.item_name, p.item_cost, b.quantity, b.entry_description
                FROM menu_item p
                JOIN order_entry b ON p.menu_id = b.menu_id
                JOIN order_cart s ON s.order_id = b.order_id
                WHERE s.cust_id = $1;`, [req.params.uid],(q_err, q_res) => {
        if (q_err) return next(q_err);
        res.json(q_res.rows);
    });
});

module.exports = router