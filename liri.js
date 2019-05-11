//requirements

let axios = require("axios");
let Spotify = require("node-spotify-api");
let dotenv = require('dotenv').config();
let moment = require('moment');
let fs = require('fs');

//import from keys
let keys = require ('keys.js');
let spotify2 = new Spotify(keys.Spotify);

//command line arguments

moment().format();

//npm installs and initialize package.json

