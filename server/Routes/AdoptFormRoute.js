const express = require('express');
const router = express.Router();
const { saveForm, getAdoptForms } = require('../Controller/AdoptFormController');

// POST route to save form
router.post('/save', saveForm);

// GET route to fetch all forms (optional, can be used for admin)
router.get('/all', getAdoptForms);

module.exports = router;
