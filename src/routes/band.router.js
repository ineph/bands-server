const router = require('express').Router();
let Band = require('../models/band.model');

//get all
router.route('/').get((req, res) => {
    Band.find()
    .then(bands => res.json(bands))
    .catch(err => res.status(400).json('ERROR: ' + err))
});

//get specific
router.route('/:id').get(function(req, res){
    var id = req.params.id;
    Band.findById(id, function(err, item){
        res.json(item)
    });
});

//post single one
router.route('/add').post(function(res, res){
    var newItem = new Band(req.body);
    newItem.save()
    .then(newItem => {
        res.json('Added: ' + res.body);
    })
    .catch(err => {
        res.status(400).send('unable to save to database');
    }); 
});

module.exports = router;
