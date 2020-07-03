const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BandSchema = new Schema ({
    name:              {type: String,required: true},
    genres:            {type: String},
    lyrical_themes:    {type: String},
    country_of_origin: {type: String},
    location:          {type: String},
    status:            {type: String},
    formed_in:         {type: String},
    years_active:      {type: String},
    labels:            {type: String}
}, {
    timestamps: true
});

const Band = mongoose.model('Band', BandSchema);
module.exports = Band
