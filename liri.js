require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");

var Spotify = require("node-spotify-api");
var spotify = new Spotify (keys.spotify);
// console.log(keys.spotify);

var command = process.argv[2];
var value = process.argv[3];

///Command Switch
switch (command) {

    case 'concert-this':
        bandsInTown(value);
        break;
    
    case 'spotify-this-song':
        spotifySong(value);
        break;
    
    case 'movie-this':
        movieThis(value);
        break;

    case 'do-what-it-says':
        doThis(value);
        break;
};

///Functions
function bandsInTown(value) {
    axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
    .then(function(response) {
        for(var i = 0; i < response.data.length; i++) {
            var concertResults =
            "----------------------------------------------" + 
            "\nVenue Name: " + response.data[i].venue.name + 
            "\nVenue Location: " + response.data[i].venue.city +
            "\nDate: " + moment(response.data[i].datetime).format("MM/DD/YYYY");
        
        console.log(concertResults);
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}

function spotifySong(value) {
    if(!value){
        value = "The Sign";
    }
    spotify
    .search({ type: 'track', query: value })
    .then(function(response) {
        for (var i = 0; i < 5; i++) {
            var spotifyResults = 
                "--------------------------------------------------------------------" +
                    "\nArtist(s): " + response.tracks.items[i].artists[0].name + 
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nPreview Link: " + response.tracks.items[i].preview_url;
                    
            console.log(spotifyResults);
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}

function movieThis(value) {
    if(!value || value === undefined){
        value = "Mr. Nobody";
    }  
    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + value)
    .then (function(response) {
            var movieThis =
                "----------------------------------------------" + 
                "\nTitle: " + response.data.Title +
                "\nYear: " + response.data.Year +
                "\nIMDB Rating: " + response.data.imdbRating +
                "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                "\nProduced in: " + response.data.Country +
                "\nPlot: " + response.data.Plot +
                "\nStarring: " + response.data.Actors;
            console.log(movieThis);
        }
    )
}

function doThis(value) {
    
}