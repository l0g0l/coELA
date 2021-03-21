const express = require('express');
const router = express.Router();
const oneDonationController = require('../controllers/oneDonationController')

router.post('/', 
 
    oneDonationController.onedonation
);

module.exports = router;