//requirements

let axios = require("axios");
let Spotify = require("node-spotify-api");
let dotenv = require('dotenv').config();
let moment = require('moment');
let fs = require('fs');

//import from keys
let keys = require('keys.js');
let spotify2 = new Spotify(keys.Spotify);

//command line arguments

moment().format();

//npm installs and initialize package.json

let command = process.argv[2];
let input = process.argv[3];

// 4 different parameters this can take
//concert-this
//spotify-this-song
//movie-this
//do-what-it-says

switch (command) {
    case 'concert-this':


        console.log("concert command test");
        break;

    case 'spotify-this-song':


        console.log("spotify command test");
        break;

    case 'movie-this':


        console.log("movie command test");
        break;

    case 'do-what-it-says':


        console.log("filesystem command test");
        break;

}