const express = require('express');
const conn = require('../utils/dbconnect.js')
const router = express.Router();

//show all departments
router.get('/api/departments', (req, res) => {
    let sql = "SELECT * FROM departments";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//show single departments
router.get('/api/departments/:id', (req, res) => {
    let sql = "SELECT * FROM departments WHERE dept_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err; res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

router.post('/api/departments', (req, res) => {
    let data = { dept_name: req.body.dept_name };
    let sql = "INSERT INTO departments SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

router.put('/api/departments/:id', (req, res) => {
    let sql = "UPDATE departments SET dept_name='" + req.body.dept_name + "' WHERE dept_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

router.delete('/api/departments/:id', (req, res) => {
    let sql = "DELETE FROM departments WHERE dept_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
module.exports = router;
