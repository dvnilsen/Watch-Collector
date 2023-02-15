const express = require('express');
const router = express.Router();
const bandsCtrl = require('../controllers/bands');

// All routes "starts with" / (root)

router.get('/watches/:id/bands/new', bandsCtrl.new);

router.post('/watches/:id/bands', bandsCtrl.create);

module.exports = router;