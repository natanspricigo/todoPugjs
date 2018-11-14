var express = require('express');
var router = express.Router();
const Tarefa = require("../scripts/tarefas");
const cache = require("../scripts/cache");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tarefas:  cache});
});

module.exports = router;
