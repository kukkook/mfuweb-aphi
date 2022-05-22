const express = require('express');
const conn = require('../utils/dbconnect.js')
const router = express.Router();
//API
//show 
router.get('/api/Projects', (req, res) => {
    let sql = "SELECT * FROM projects";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
//show project ID
router.get('/api/Projects/:id', (req, res) => {
    let sql = "SELECT * FROM projects WHERE project_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200, "error": null,
            "response": results
        }));
    });
});
router.post('/api/Projects', (req, res) => {
    let data = {
        project_id: req.body.project_id,
        fiscal_year: req.body.fiscal_year,
        project_name_th: req.body.project_name_th,
        project_name_en: req.body.project_name_en,
        project_pi: req.body.project_pi,
        project_school: req.body.project_school,
        project_funding_name: req.body.project_funding_name,
        project_funding_source: req.body.project_funding_source,
        project_budget: req.body.project_budget,
        project_period_from: req.body.project_period_from,
        project_period_to: req.body.project_period_to, 
        remark: req.body.remark
    };
    let sql = "INSERT INTO projects SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null,"response": results }));
    });
});
router.put('/api/Projects/:id', (req, res) => {
    let sql = "UPDATE projects SET fiscal_year = '" + req.body.fiscal_year + "',project_name_th= '" + req.body.project_name_th + "',project_name_en='" + req.body.project_name_en+"', project_pi= '" + req.body.project_pi + "',project_school='" + req.body.project_school + "',project_funding_name='" + req.body.project_funding_name + "',project_funding_source='" + req.body.project_funding_source + "',project_budget='" + req.body.project_budget + "',project_period_from= '" + req.body.project_period_from + "',project_period_to='" + req.body.project_period_to + "',remark='" + req.body.remark + "' WHERE project_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null,"response": results
        }));
    });
});
//get count project by school
router.get('/api/countpro', (req, res) => {
    let sql = "SELECT project_school, COUNT(project_id) AS 'count_project' FROM projects GROUP BY project_school;";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
//Counter school
router.get('/api/countsc', (req, res) => {
    let sql = "SELECT project_school, count(project_id) count FROM projects GROUP BY project_school";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
//count year
router.get('/api/countye', (req, res) => {
    let sql = "SELECT fiscal_year, count(project_id) count FROM projects GROUP BY fiscal_year";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
router.get('/api/countpi', (req, res) => {
    let sql = "SELECT project_pi, count(project_id)  count FROM projects GROUP BY project_pi;";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
router.get('/api/countfun', (req, res) => {
    let sql = "SELECT project_funding_name, count(project_id) as count_project_id FROM projects GROUP BY project_funding_name;";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

router.delete('/api/Projects/:id', (req, res) => {
    let sql = "DELETE FROM projects WHERE project_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null,"response": results
        }));
    });
});

module.exports = router;