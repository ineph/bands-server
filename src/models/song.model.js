const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name:   {type: String, required:true},
    bands:  {type: String, required:true},
    albums: {type: String},
    lyrics: {type: String},
    lineup: {type: String}
},{
    timestamps: true
});

const Song = mongoose.model('Song', SongSchema);
module.exports = Song;