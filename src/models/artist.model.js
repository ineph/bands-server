const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    nickname:        {type: String, required: true},
    full_name:       {type: String},
    bands:          [{type: mongoose.Schema.Types.ObjectId, ref: 'Band'}],
    songs:          [{type: mongoose.Schema.Types.ObjectId, ref: 'Song'}],
    albums:         [{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}],
    biography:       {type: String},
    age:             {type: String},
    gender:          {type: String},
    place_of_origin: {type: String}
},{
    timestamps:true
});

const Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;
