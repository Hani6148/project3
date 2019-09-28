const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log(`findALL actually got hit?`)

    console.log(req.query)
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel =>{ 
        console.log(dbModel)
        res.json(dbModel)
      
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("HEY YOU HIT FIND BY ID")
    db.User
      .findOne({
        firstname: req.params.firstname,
        lastname: req.params.lastname
      })
      .sort({ date: -1 })
      .then(dbModel =>{ 
        console.log(dbModel)
        res.json(dbModel)
      
      })
      .catch(err => res.status(422).json(err));
    
 
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
