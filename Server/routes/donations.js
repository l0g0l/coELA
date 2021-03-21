const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

router.post('/', donationController.donation);
// router.post('/', donationController.percent);
// router.post('/', donationController.onedonation);
// router.post('/', donationController.periodic);
// router.post('/', donationController.roundup);

module.exports = router;