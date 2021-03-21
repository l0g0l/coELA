const express = require('express');
const router = express.Router();
const roundupController = require('../controllers/roundupController')

router.post('/', 
 
    roundupController.roundup
);

module.exports = router;