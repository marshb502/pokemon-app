var mongoose = require("mongoose");
var Trainer = require("../models/Trainer");

var trainerController = {};

// Show list of trainers
trainerController.list = function(req, res) {
  Trainer.find({}).exec(function (err, trainers) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/trainers/index", {trainers: trainers});
    }
  });
};

// Show trainer by id
trainerController.show = function(req, res) {
  Trainer.findOne({_id: req.params.id}).exec(function (err, trainer) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/trainers/show", {trainer: trainer});
    }
  });
};

trainerController.random = function(req, res) {
  Trainer.find({}).exec(function (err, trainers) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      var randomTrainer = Math.floor(Math.random() * trainers.length);
      res.json(trainers[randomTrainer]);
    }
  });
};

// Create new trainer
trainerController.create = function(req, res) {
  res.render("../views/trainers/create");
};

// Save new trainer
trainerController.save = function(req, res) {
  var trainer = new Trainer(req.body);

  trainer.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/trainer/create");
    } else {
      console.log("Successfully created an Pokemon Trainer.");
      res.redirect("/trainers/show/"+trainer._id);
    }
  });
};

// Edit trainer
trainerController.edit = function(req, res) {
  Trainer.findOne({_id: req.params.id}).exec(function (err, trainer) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/trainers/edit", {trainer: trainer});
    }
  });
};

// Update trainer
trainerController.update = function(req, res) {
  Trainer.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, trainer) {
    if (err) {
      console.log(err);
      res.render("../views/trainers/edit", {trainer: req.body});
    }
    res.redirect("/trainers/show/"+trainer._id);
  });
};

// Delete trainer
trainerController.delete = function(req, res) {
  Trainer.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Pokemon Trainer deleted!");
      res.redirect("/trainers");
    }
  });
};

module.exports = trainerController;
