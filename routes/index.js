const express = require('express');
const router = express.Router();
const oracledb = require("oracledb");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/query', async function(req, res, next) {

  let conn;
  let result = [];
  let binds = [];
  let opts = {};

  try {
    let statement = "select * from production.products";
    conn = await oracledb.getConnection({ poolAlias: 'nrPool' });
    result = await conn.execute(statement, binds, opts);
    let rowsAffected = result.rows;
    console.log("db updated. rows affected="+rowsAffected)

    res.render('query', { title: 'Query', "rows": rowsAffected });
  } catch (err) {
    console.error(err);
    throw (err);
  } finally {
    if (conn) { // conn assignment worked, need to close
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }

});

/*
router.get('/insert', function(req, res, next) {

  let insert_query = "INSERT INTO dbo.customers (id, name, city) VALUES(1, 'prakash', 'boston')";

  req.app.locals.db.query(insert_query).then(function (recordSet) {
    //console.log(recordSet);
    let rowsAffected = recordSet.rowsAffected;
    console.log("db updated. rows affected="+rowsAffected)

    res.render('query', { title: 'Query', "rows": rowsAffected });
  }).catch(function (err) {
    console.log(err);
  });

});
*/


/*
router.get('/stream', function(req, res, next) {

  req.app.locals.db.query("select * from production.products").then(function (recordSet) {
    //console.log(recordSet);
    let rowsAffected = recordSet.rowsAffected;
    console.log("db updated. rows affected="+rowsAffected)

    res.render('query', { title: 'Query', "rows": rowsAffected });
  }).catch(function (err) {
    console.log(err);
  });

});
*/


module.exports = router;
