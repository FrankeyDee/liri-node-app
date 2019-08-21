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
            var bandData = response.data[i]
            var concertResults =
            "----------------------------------------------" + 
            "\nVenue Name: " + bandData = response.data[i].venue.name + 
            "\nVenue Location: " + bandData.venue.city +
            "\nDate: " + moment(bandData.datetime).format("MM/DD/YYYY");
        
        console.log(concertResults);
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}

function spotifySong(value) {
    if(value === null || value === undefined){
        value = "The Sign";
    }
    spotify
    .search({ type: 'track', query: value })
    .then(function(response) {
        for (var i = 0; i < 5; i++) {
            var result = response.tracks.items[i];
            var spotifyResults = 
                "--------------------------------------------------------------------" +
                    "\nArtist(s): " + result.artists[0].name.join(' ') + 
                    "\nSong Name: " + result.name +
                    "\nAlbum Name: " + result.album.name +
                    "\nPreview Link: " + result.preview_url;
                    
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
            var movieInfo = response.data;
            var movieThis =
                "----------------------------------------------" + 
                "\nTitle: " + movieInfo.Title +
                "\nYear: " + movieInfo.Year +
                "\nIMDB Rating: " + movieInfo.imdbRating +
                "\nRotten Tomatoes Rating: " + movieInfo.Ratings[1].Value +
                "\nProduced in: " + movieInfo.Country +
                "\nPlot: " + movieInfo.Plot +
                "\nStarring: " + movieInfo.Actors;
            console.log(movieThis);
        }
    )
}

function doThis(value) {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) throw err;
        var result = data.split(",");
        command = result[0];
        value = result[1];
        spotifySong(value);
    });
}
