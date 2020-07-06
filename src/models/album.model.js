const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    name:         {type: String, required: true},
    songs:        {type: String, required: true},
    bands:        {type: String, required: true},
    release_year: {type: String},
    type:         {type: String},
    format:       {type: String},
    lineup:       {type: String}
}, {
    timestamps: true
});

const Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;
