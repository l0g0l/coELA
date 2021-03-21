const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

router.post('/create', 
    [
        check('user', 'El Nombre es Obligatorio').not().isEmpty(),
    ],auth,
    donationController.createDonation
);

router.post('/info', 
    [
        check('user', 'El Nombre es Obligatorio').not().isEmpty(),
    ],auth,
    donationController.infoDonation
);

module.exports = router;

