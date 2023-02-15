const Watch = require('../models/watch');
const Band = require('../models/band');

module.exports = {
    index,
    show,
    new: newWatch,
    create
};

function index(req, res) {
    Watch.find({}, function(err, watches) {
      res.render('watches/index', { title: 'Your Collection', watches });
    });
  }

  function show(req, res) {
    Watch.findById(req.params.id, function(err, watch){   
        Band.find({watch: watch._id}, function(err, bands) { 
        res.render('watches/show', {title: 'Watch Detail', watch, bands});
        });
    });
}

  function newWatch(req, res) {
    res.render('watches/new', { title: 'Add Watch' });
  }

  function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const watch = new Watch(req.body);
    watch.save(function(err) {
      if (err) return res.redirect('/watches/new');
      res.redirect(`/watches/${watch._id}`);
    });
  }