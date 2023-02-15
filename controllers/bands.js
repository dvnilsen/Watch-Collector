const Band = require('../models/band');
const Watch = require('../models/watch');

module.exports = {
    create,
    new: newBand,
    delete: deleteBand
};

function create(req, res){
    req.body.watch = req.params.id;
    Band.create(req.body, function(err, band) {
        res.redirect(`/watches/${req.params.id}`)
    })
}

function newBand(req, res){
    let watchId = req.params.id
    res.render('bands/new', {watchId, title: 'Add Band'});
};

 
function deleteBand(req, res) {
    Band.findByIdAndDelete(req.params.id, function(err, band) {
      res.redirect(`/watches/${band.watch._id}`);
    });
  }
