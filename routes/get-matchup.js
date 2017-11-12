const express = require('express');
const router = express.Router();
const getMatchup = require('../controllers/get-matchup') 

/* GET home page. */
router.get('/matchup', function(req, res, next) {
    getMatchup()
    .then((result)=>{
        res.json(result)
    })
    .catch((error)=>{
        console.log(error)
    });
});

module.exports = router;