const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name:   {type: String, required:true},
    bands:  [{type: mongoose.Schema.Types.ObjectId, ref: 'Band'}],
    albums: [{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}],
    lyrics: {type: String},
    lineup: [{type: mongoose.Schema.Types.ObjectId, ref: 'Artist'}]
},{
    timestamps: true
});

const Song = mongoose.model('Song', SongSchema);
module.exports = Song;