const express = require('express');
const router = express.Router();
const fs = require('fs');
const auth = require('../middleware/auth');

const filepath_average_donation = '../average_donation_barplot.json'
const filepath_piechart = '../data_piechard.json'

// devuelvo el json con los datos del fichero ../average_donation_barplot.json
router.get('/average_donation', auth, async function (req, res) {
    const jsonData = require(filepath_average_donation)
 
        res.json(jsonData)
    });

// devuelvo el json con los datos del fichero ../data_piechard.json
router.get('/piechart', auth, async function (req, res) {
    const jsonData = require(filepath_piechart)
        res.json(jsonData)
    });
    

module.exports = router;