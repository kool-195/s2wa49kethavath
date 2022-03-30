var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }


  
  let frou = Math.fround(x) 
  let ran = Math.random(x)
  let rou = Math.round(x)
  res.render('computation', {
    title: 'Computation',
    values: `applied to ` + x + ` is ` + frou ,
    v1: `applied to ` + x + ` is ` + ran,
    v2: `applied to ` + x + ` is ` + rou;
  });
});

module.exports = router;