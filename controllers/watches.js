const Watch = require('../models/watch');
//const Performer = require('../models/band');

module.exports = {
    index,
    show,
    new: newWatch,
    create
};

function index(req, res) {
    Watch.find({}, function(err, watches) {
      res.render('watches/index', { title: 'All Watches', watches });
    });
  }

  function show(req, res) {
    Watch.findById(req.params.id, function(err, watch){    
        res.render('watches/show', {title: 'Watch Detail', watch});
    });
}

  function newWatch(req, res) {
    res.render('watches/new', { title: 'Add Watch' });
  }

  function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const watch = new Watch(req.body);
    watch.save(function(err) {
      if (err) return res.redirect('/watches/new');
      //console.log(watch);
      res.redirect(`/watches/${watch._id}`);
    });
  }