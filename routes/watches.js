const express = require('express');
const router = express.Router();
const watchesCtrl = require('../controllers/watches');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/watches'

// GET /watches (display all watches)
router.get('/', watchesCtrl.index);

// GET /watches/new (display a form for entering a new watch)
router.get('/new', ensureLoggedIn, watchesCtrl.new);

// GET /watches/:id (display a "detail/show" page for a single watch)
router.get('/:id', watchesCtrl.show);

// POST /watches (handle the new form being submitted)
router.post('/', ensureLoggedIn, watchesCtrl.create);

// GET /watches/:id/edit
router.get("/:id/edit", ensureLoggedIn, watchesCtrl.edit);

//PUT /watches/:id
router.put("/:id/", ensureLoggedIn, watchesCtrl.update);

module.exports = router;