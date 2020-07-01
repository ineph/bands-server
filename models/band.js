var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Band = new Schema ({
    desc: {
        name: String,
        genres: String,
        years_active: String
    },},
    {collection: 'Tasks'});

module.exports = mongoose.model('Band', Band)