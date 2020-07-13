const router = require('express').Router();

const Album = require('../models/album.model');
const Song = require('../models/song.model');
const Artist = require('../models/artist.model');
const Band = require('../models/band.model');

//link song and album (by album id)
router.route('/song_album/:id').patch((req, res) => {
    Album.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedAlbum => {

        if(req.body.songs.length > 0){
            Song.findByIdAndUpdate({_id: req.body.songs}, {$push: {albums: req.params.id}}, {useFindAndModify: false})
            .then(res.json('updated album: ' + updatedAlbum + ' updated song ' + req.body.songs))
            .catch(errorOnSong => res.status(500).json('Error updating albums in song => ' + errorOnSong));
        }else{
            res.json('Request must have "songs" key id. Updated only Album: ' + updatedAlbum)
        }
    })
    .catch(err => res.status(500).json('Updating album error => ' + err));
});

//link song and artist (by artist id)
router.route('/song_artist/:id').patch((req, res) => {
    Artist.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedArtist => {

        if(req.body.songs.length > 0){
            Song.findByIdAndUpdate({_id: req.body.songs}, {$push: {lineup: req.params.id}}, {useFindAndModify: false})
            .then(res.json('updated artist ' + updatedArtist + ' updated song ' + req.body.songs))
            .catch(errorOnSong => res.status(500).json('Error updating lineup in song => ' + errorOnSong));
        }else{
            res.json('Request must have "songs" key id. Updated only Artist: ' + updatedArtist)
        }
    })
    .catch(err => res.status(500).json('Updating artist error => ' + err));
});

//link album and artist (by artist id)
router.route('/album_artist/:id').patch((req, res) => {
    Artist.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedArtist => {

        if(req.body.albums.length > 0){
            Album.findByIdAndUpdate({_id: req.body.albums}, {$push: {lineup: req.params.id}}, {useFindAndModify: false})
            .then(res.json('updated artist ' + updatedArtist + ' updated album ' + req.body.albums))
            .catch(errorOnAlbum => res.status(500).json('Error updating lineup in album => ' + errorOnAlbum));
        }else{
            res.json('Request must have "albums" key id. Updated only Artist: ' + updatedArtist)
        }
    })
    .catch(err => res.status(500).json('Updating artist error => ' + err));
});

//link artist and band (by band id)
router.route('/artist_band/:id').patch((req, res) => {
    Band.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedBand => {

        if(req.body.members.length > 0){
            Artist.findByIdAndUpdate({_id: req.body.members}, {$push: {bands: req.params.id}}, {useFindAndModify: false})
            .then(res.json('updated band ' + updatedBand + ' updated artist ' + req.body.members))
            .catch(errorOnArtist => res.status(500).json('Error updating bands in artist => ' + errorOnArtist));
        }else{
            res.json('Request must have "members" key id. Updated only Band: ' + updatedBand)
        }
    })
    .catch(err => res.status(500).json('Updating artist error => ' + err));
});

//link album and band (by band id)
router.route('/album_band/:id').patch((req, res) => {
    Band.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedBand => {

        if(req.body.albums.length > 0){
            Album.findByIdAndUpdate({_id: req.body.albums}, {$push: {bands: req.params.id}}, {useFindAndModify: false})
            .then(res.json('updated band: ' + updatedBand + ' updated album: ' + req.body.albums))
            .catch(errorOnAlbum => res.status(500).json('Error updating bands in Album => ' + errorOnAlbum));
        }else{
            res.json('Request must have "albums" key id. Updated only Band')
        }
    })
    .catch(err => res.status(500).json('Updating Band error => ' + err));
});

module.exports = router
