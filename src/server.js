const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bandRouter = require('./routes/band.router');
const albumRouter = require('./routes/album.router');
const songRouter = require('./routes/song.router');
const artistRouter = require('./routes/artist.router');
const linksRouter = require('./routes/links.router');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

connection.once('open', () => {
    console.log('############## Mongo DB database: connection established successfully!');
});

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
}); 

app.use('/band', bandRouter);
app.use('/album', albumRouter);
app.use('/song', songRouter);
app.use('/artist', artistRouter);
app.use('/links', linksRouter);
