const router = require('express').Router();
let Album = require('../models/album.model');

//get all
router.route('/').get((req, res) => {
    Album.find()
    .then(albums => res.json(albums))
    .catch(err => res.status(400).json('Error: ' + err));
});

//get specific
router.route('/:id').get((req, res) => {
    Album.findById(req.params.id)
    .then(album => res.json(album))
    .catch(err => res.status(400).json('Error: ' + err));
});

//post new one
router.route('/add').post((req, res) => {

    const name = req.body.name;
    const songs = req.body.songs;
    const bands = req.body.bands;
    const release_year = req.body.release_year;
    const type = req.body.type;
    const format = req.body.format;
    const lineup = req.body.lineup;

    const newAlbum = new Album({
        name,
        songs,
        bands,
        release_year,
        type,
        format,
        lineup
    });

    newAlbum.save()
    .then(() => res.json('New Album added! ID: ' + newAlbum._id))
    .catch(err => res.status(400).json('Error: ' + err));
});

//update single one
router.route('/update/:id').patch((req, res) => {
    Album.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedAlbum => res.json('Upadated: ' + updatedAlbum))
    .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    Album.findByIdAndDelete(req.params.id)
    .then(() => res.json('Album ' + req.params.id + ' deleted successfully'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router