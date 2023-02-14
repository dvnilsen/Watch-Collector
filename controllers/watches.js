const Watch = require('../models/watch');
//const Performer = require('../models/band');

module.exports = {
    index,
    //show,
    //new: newWatch
};

function index(req, res) {
    Watch.find({}, function(err, watches) {
      res.render('watches/index', { title: 'All Watches', watches });
    });
  }

//  function show(req, res) {
//    res.render('watches/show', { title: 'Watch Collection' });
//  }

//  function newWatch(req, res) {
//    res.render('watches/new', { title: 'Add Watch' });
//  }