const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Delts
         .find(req.query)
         .sort({ rating: -1 })
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Delts
         .create(req.body)
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Delts
         .findOneAndUpdate({ _id: req.params.id }, req.body)
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Delts
         .findById({ _id: req.params.id })
         .then(dbModel => dbModel.remove())
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
      }
};