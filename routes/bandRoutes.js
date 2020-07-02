var express = require('express')
var app = express();
var Router = express.Router();

var Band = require('../models/band');

Router.route('/:id').get(function(req, res){
    var id = req.params.id;
    Band.findById(id, funciton(err, item){
        
    })
});
