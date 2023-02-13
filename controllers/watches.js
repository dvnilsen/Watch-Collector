const Movie = require('../models/watch');
const Performer = require('../models/band');

module.exports = {
    index
};

function index(req, res) {
    Watch.find({}, function(err, watches) {
      res.render('watches/index', { title: 'All Watches', watches });
    });
  }