var express = require('express');
var router = express.Router();
var trainer = require("../controllers/trainerController.js");

// Get all trainers
router.get('/', function(req, res) {
  trainer.list(req, res);
});

// Get single trainer by id
router.get('/show/:id', function(req, res) {
  trainer.show(req, res);
});

// Create trainer
router.get('/create', function(req, res) {
  trainer.create(req, res);
});

// Save trainer
router.post('/save', function(req, res) {
  trainer.save(req, res);
});

// Edit trainer
router.get('/edit/:id', function(req, res) {
  trainer.edit(req, res);
});

// Edit update trainer
router.post('/update/:id', function(req, res) {
  trainer.update(req, res);
});

// Delete Trainer
router.post('/delete/:id', function(req, res, next) {
  trainer.delete(req, res);
});

module.exports = router;
