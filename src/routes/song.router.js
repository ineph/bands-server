const router = require('express').Router();
const Song = require('../models/song.model');

//get all
router.route('/').get((req, res) => {
    Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(500).json('Error: ' + err))
});

//get specific
router.route('/:id').get((req,res) => {
    Song.findById(req.params.id)
    .then(song => res.json(song))
    .catch(err => res.status(500).json('Error: ' + err));
});

//post new one
router.route('/add').post((req, res) => {

    const name = req.body.name
    const bands = req.body.bands
    const albums = req.body.albums
    const lyrics = req.body.lyrics
    const lineup = req.body.lineup

    const newSong = new Song({
        name,   
        bands,  
        albums, 
        lyrics, 
        lineup
    })

    newSong.save()
    .then(() => res.json('New song added! ID: ' + newSong._id))
    .catch(err => res.status(500).json('Error: ' + err));
});

//update single one
router.route('/update/:id').patch((req, res) => {
    Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedSong => res.json('Song updated: ' + updatedSong))
});

//delete one
router.route('/:id').delete((req, res) => {
    Song.findByIdAndDelete(req.params.id)
    .then(() => res.json('Deleted successfully'))
    .catch(err => res.status(500).json('Error: ' + err))
});

module.exports = router;
