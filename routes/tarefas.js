var express = require('express');
var router = express.Router();
const Tarefa = require("../scripts/tarefas");
const cache = require("../scripts/cache");

/* GET users listing. */
router.get('/nova', function(req, res, next) {
  res.render("tarefas/novo", { title: 'Nova Tarefa' });
});

/* GET users listing. */
router.post('/salvar', function(req, res, next) {
  console.log(req.body.nomeTarefa);
  cache.push(Tarefa(req.body.nomeTarefa));
  res.redirect("/");
});
module.exports = router;
