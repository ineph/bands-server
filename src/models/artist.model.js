const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    nickname: {type: String, required: true},
    age: {type: String},
    bands: {type: String},
    songs: {type: String},
    albums: {type: String},
    gender: {type: String},
    biography: {type: String},
    full_name: {type: String},
    place_of_origin: {type: String}
},{
    timestamps:true
});

const Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;
