const router = require('express').Router();
let Band = require('../models/band.model');

//get all
router.route('/').get((req, res) => {
    Band.find()
    .then(bands => res.json(bands))
    .catch(err => res.status(400).json('ERROR: ' + err))
});

//get specific
router.route('/:id').get((req, res) => {
    Band.findById(req.params.id)
    .then(band => {res.json(band)})
    .catch(err => {res.status(400).json('Error: ' + err)})
});

//post new one
router.route('/add').post((req, res) => {
    
    const name = req.body.name;
    const genres = req.body.genres;
    const lyrical_themes = req.body.lyrical_themes;
    const country_of_origin = req.body.country_of_origin;
    const location = req.body.location;
    const status = req.body.status;
    const formed_in = req.body.formed_in;
    const years_active = req.body.years_active;
    const labels = req.body.labels;
    
    const newBand = new Band({
        name,
        genres,
        lyrical_themes,
        country_of_origin,
        location,
        status,
        formed_in,
        years_active,
        labels
    });
    
    newBand.save()
    .then(() => res.json('Band added! ID: ' + newBand._id))
    .catch(err => res.status(400).json('Error: ' + err));
});

//update sigle one
router.route('/update/:id').patch((req, res) => {
    Band.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedBand => {res.json('Updated: ' + updatedBand)})
    .catch(err => {res.status(400).json('Error: '+ err)})
});

//delete one
router.route('/:id').delete((req, res) => {
    Band.findByIdAndDelete(req.params.id)
    .then(() => res.json('Band ' + req.params.id + ' deleted successfully'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
