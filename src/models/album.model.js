const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema ({
    name:         {type: String, required: true},
    songs:        [{type: mongoose.Schema.Types.ObjectId, ref: 'Song', required: true}],
    bands:        [{type: mongoose.Schema.Types.ObjectId, ref: 'Band', required: true}],
    lineup:       [{type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true}],
    release_year: {type: String},
    type:         {type: String},
    format:       {type: String}
}, {
    timestamps: true
});

const Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;
