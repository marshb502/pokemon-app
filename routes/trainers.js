var express = require('express');
var router = express.Router();
var trainer = require("../controllers/trainerController.js");
var path = require('path');

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
// get random trainer 
router.get('/random', function (req, res) {
	trainer.random(req, res);
});

//Get MVP trainer from AJAX call
router.get('/mvp', function (req, res) {
	var randomTrainerLocation = path.join(__dirname, "../views/trainers/mvp.html")
	res.sendFile(randomTrainerLocation);
});


router.post('/save', function(req, res) {
  trainer.save(req, res);
});


router.get('/edit/:id', function(req, res) {
  trainer.edit(req, res);
});


router.post('/update/:id', function(req, res) {
  trainer.update(req, res);
});

router.post('/delete/:id', function(req, res, next) {
  trainer.delete(req, res);
});

module.exports = router;
