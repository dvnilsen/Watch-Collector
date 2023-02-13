const Movie = require('../models/watch');
//const Performer = require('../models/band');

module.exports = {
    index,
    show,
    new: newWatch
};

function index(req, res) {
    Watch.find({}, function(err, watches) {
      res.render('watches/index', { title: 'All Watches', watches });
    });
  }

  function show(req, res) {
    Watch.findById(req.params.id)
      //.populate('cast')
      //.exec(function(err, movie) {
        //Performer.find(
          //{_id: {$nin: movie.cast}},
          //function(err, performers) {
            //console.log(performers);
            res.render('watches/show', {
              title: 'Watch Detail',
              watch
              //performers
            });
          }
        //);
      //});
  //}

  function newWatch(req, res) {
    res.render('watches/new', { title: 'Add Watch' });
  }