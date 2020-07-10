const router = require('express').Router();
const Artist = require('../models/artist.model');

//get all
router.route('/').get((req, res) => {
    Artist.find()
    .then(artists => res.json(artists))
    .catch(err => res.status(500).json('Error: ' + err))
});

//get specific
router.route('/:id').get((req, res) => {
    Artist.findById(req.params.id)
    .then(artist => res.json(artist))
    .catch(err => res.status(500).json('Error: ' + err));
});

//post new one
router.route('/add').post((req, res) => {

    const age = req.body.age
    const bands = req.body.bands
    const songs = req.body.songs
    const albums = req.body.albums
    const gender = req.body.gender
    const nickname = req.body.nickname 
    const biography = req.body.biography
    const full_name = req.body.full_name
    const place_of_origin = req.body.place_of_origin

    const newArtist = new Artist({
        age,
        bands,
        songs,
        albums,
        gender,
        nickname,
        biography,
        full_name,
        place_of_origin
    })

    newArtist.save()
    .then(() => res.json('Artist added! ID: ' + newArtist._id))
    .catch(err => res.status(500).json('Error: ' + err));
});

//update sigle one
router.route('/update/:id').patch((req, res) => {
    Artist.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedArtist => res.json('Updated: ' + updatedArtist))
    .catch(err => res.status(500).json('Error: ' + err));
});

//delete one
router.route('/:id').delete((req, res) => {
    Artist.findByIdAndDelete(req.params.id)
    .then(() => res.json('Artist ' + req.params.id + ' deleted successfully'))
    .catch(err => res.status(500).json('Error: ' + err));
});

module.exports = router;
