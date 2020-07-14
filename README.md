# MongoBands
MongoBands is a little project for studying Mongo, Express and Node

## Starting
You will need a .env file with a ATLAS_URI variable containing 
the path to your MongoDB in [Atlas](https://www.mongodb.com/cloud/atlas)

## Routes

### GET:
.../album/ = all albums
.../album/{album id} = specific album
.../band/ = all bands
.../band/{band id} = specific band
.../artist/ = all artists
.../artist/{artist id} = specific artist
.../song/ = all songs
.../song/{song id} = specific song

### POST
.../album/add = new album
.../band/add = new band
.../artist/add = new artist
.../song/add = new song

### PATCH
.../album/update/{album id} = update album
.../band/update/{band id} = update band
.../artist/update/{artist id} = update artist
.../song/update/{song id} = update song
.../links/song_album/{album id} = link song and album by album id
.../links/song_artist/{artist id} = link song and artist by artist id
.../links/album_artist/{artist id} = link album and artist by artist id
.../links/artist_band/{band id} = link artist and band by band id
.../links/album_band/{band id} = link album and band by band id


