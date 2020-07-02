var express = require('express')
var app = express();
var Router = express.Router();

var Band = require('../models/band');

//get specific
Router.route('/:id').get(function(req, res){
    var id = req.params.id;
    Band.findById(id, function(err, item){
        res.json(item)
    });
});

//get all
Router.route('/').get(function(req, res){
    Band.find(function(err, items){
        if (err) {
            console.log(err);;
        } else {
            res.json(items)
        }
    });
})

Router.route('/add').post(function(res, res){
    var newItem = new Band(req.body);
    newItem.save()
    .then(newItem => {
        res.json('Added: ' + res.body);
    })
    .catch(err => {
        res.status(400).send('unable to save to database');
    }); 
});
