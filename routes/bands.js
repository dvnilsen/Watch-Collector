const express = require('express');
const router = express.Router();
const bandsCtrl = require('../controllers/bands');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes "starts with" / (root)

router.get('/watches/:id/bands/new', ensureLoggedIn, bandsCtrl.new);

router.post('/watches/:id/bands', ensureLoggedIn, bandsCtrl.create);

// DELETE band
router.delete('/bands/:id', ensureLoggedIn, bandsCtrl.delete);

module.exports = router;