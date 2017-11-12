const express = require('express');
const router = express.Router();
const getReadme = require('../controllers/get-readme') 

/* GET home page. */
router.get('/readme', function(req, res, next) {
    getReadme()
    .then((readme) =>{
        res.send(readme)
    })
});

module.exports = router;