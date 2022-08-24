const express = require('express');
const sql = require("mssql");
const router = express.Router();

/*
router.get('/query', async function(req, res, next) {
    let sql = require("mssql");

    const ps = new sql.PreparedStatement(req.app.locals.db);
    try {
        ps.input('brand_id', sql.Int);
        await ps.prepare("select * from production.products where brand_id = @brand_id")
        try {
            let data = await ps.execute({brand_id: 9});
            let rowsAffected = data.rowsAffected;
            console.log("db updated. rows affected="+rowsAffected)
            res.render('query', { title: 'Query', "rows": rowsAffected });
        } finally {
            await ps.unprepare();
        }
    } catch (err) {
        console.log("SQL Err", err.stack);
    }

});
*/


module.exports = router;