const db = require("../models");
const Journal = db.journals;
const Op = db.Sequelize.Op;

// Create and Save a new Journal
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Journal
  const journal = {
    title: req.body.title,
    description: req.body.description,
    tag: req.body.tag,
    published: req.body.published ? req.body.published : false
  };

  // Save Journal in the database
  Journal.create(journal)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Journal."
      });
    });
};

// Retrieve all Journals from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Journal.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving journals."
      });
    });
};

// Find a single Journal with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Journal.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Journal with id=" + id
      });
    });
};

// Update a Journal by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Journal.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Journal was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Journal with id=${id}. Maybe Journal was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Journal with id=" + id
      });
    });
};

// Delete a Journal with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Journal.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Journal was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Journal with id=${id}. Maybe Journal was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Journal with id=" + id
      });
    });
};

// Delete all Journals from the database.
exports.deleteAll = (req, res) => {
  Journal.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Journals were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all journals."
      });
    });
};

// find all published Journal
exports.findAllPublished = (req, res) => {
  Journal.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving journals."
      });
    });
};
