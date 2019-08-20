# LIRI Node App

### This app is called LIRI (Language Interpretation and Recognition Interface). With this app, you can use command line node to take in parameters of movies, songs, or bands in town and returns data from your command. To retrieve data, the requests sent uses the axios package for Bands in Town, Spotify and OMDB APIs.

#### 1. <i>Clearly state the problem the app is trying to solve (i.e. what is it doing and why)</i><br>
    This app answers queries regarding concerts, songs, and movies by using the following commands:<br>
        <ul>
        <li>'concert-this'</li>
        <li>'spotify-this-song'</li>
        <li>'movie-this'</li>
        <li>'do-what-it-says'</li>
        </ul>
        <br>

#### 2. <i>Give a high-level overview of how the app is organized</i><br>
    The app is organized by the following files:
        <ol>
        <li><b>README.md</b>: This file contains documentation of what the app's purpose is and how it works.</li>
        <li><b>package.json</b>: This file contains information about the app and allows the installation of npm packages</li>
        <li><b>.gitignore</b>: This file keeps git not to track files indicated within this document so that it will not be committed to Github</li>
        <li><b>keys.js</b>: This file contains the keys used for the Spotify API. Kept separate for privacy measures.</li>
        <li><b>.env</b>: This file replaces values of API keys. </li>
        <li><b>random.txt</b>: This file is required for the command 'do-what-it-says' to produce desired result.</li>
        <li><b>liri.js</b>: This is the main file containing codes for the variables and functions used by the listed commands above. It also contains codes to import information from the multiple files found in the same directory.</li></ol><br>
        
#### 3. <i>Give start-to-finish instructions on how to run the app</i><br>
    In the terminal, the following commands can be made to produce a result -<br> 
        <ul>
        <li>'node liri.js spotify-this-song (song title)' shows the following information about the song:</li>
            <ul>
            <li>Artist(s)</li>
            <li>Song's Name</li>
            <li>Preview Link to the song from Spotify</li>
            <li>The album the song comes from</li>
        </ul><br>
        'node liri.js concert-this (concert/artist/show title)' shows the following information about the concert:
            - Name of venue
            - Venue location
            - Date of event in the format of "MM/DD/YYYY" (using 'moment' to help format date)</ul><br>
#### 4. Include screenshots, gifs or videos of the app functioning<br> 
   ###### CONCERT-THIS:<br>
    https://youtu.be/5OZZk-i0reE
    <br>
    <img src="/videos/concert-this.gif" width="600" height="400"></img>
    <br>

   ###### SPOTIFY-THIS-SONG:<br>
    https://youtu.be/t2haUSxl-qs
    <br>
    <img src="/videos/spotify-this-song.gif" width="600" height="400"></img>
    <br>

   ###### NO SONG:<br>
    https://youtu.be/qqwY4xxpqm0
    <br>
    <img src="/videos/no-song.gif" width="600" height="400"></img>
    <br>

   ###### NO MOVIE:<br>
    https://youtu.be/0gf6Giit6gY
    <br>
    <img src="/videos/no-movie.gif" width="600" height="400"></img>
    <br>

   ###### DO-WHAT-IT-SAYS:<br>
    https://youtu.be/r6jSel97W1c
    <br>
    <img src="/videos/do-it.gif" width="600" height="400"></img>
    <br>

#### 5. Contain a link to a deployed version of the app<br>
<a href="https://github.com/FrankeyDee/liri-node-app/blob/master/liri.js" target="_blank">https://github.com/FrankeyDee/liri-node-app/blob/master/liri.js</a>
<br>
#### 6. Clearly list the technologies used in the app<br>
<ul>
    <li>Javascript</li>
    <li>Nodejs</li>
    <li>NPM, Node packages:<ul>
        <li>Node-Spotify-API</li>
        <li>Moment</li>
        <li>axios</li>
        <li>DotEnv</li>
        <li>Request</li>
        </ul>
        </li>
    <li>Bands In Town API</li>
    <li>OMDB API</li>
    <li>GitHub</li>
    <li>Visual Studio</li>
    <li>Terminal</li>
</ul><br>    
#### 7. State your role in the app development<br>
Project Manager, Product Owner, Lead Developer, Lead Designer, Lead Analyst
