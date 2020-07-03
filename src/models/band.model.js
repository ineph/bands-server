const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BandSchema = new Schema ({

    name: {
        type: String,
        required: true,
    },
    genres: {
        type: String,
    },
    years_active: {
        type: String
    }
}, {
    timestamps: true
});

const Band = mongoose.model('Band', BandSchema);
module.exports = Band
