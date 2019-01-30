/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["alien boy","still feel","new girl","queen","conquest"];

var songImg = ["https://bit.ly/2Cr2mB7","https://bit.ly/2stxueX","https://bit.ly/2FHGu89","https://bit.ly/2CobI0E","https://bit.ly/2W0oOua"];
var songArtist = ["Oliver Tree","half alive","FINNEAS","Queen","The White Stripes"];
var songLength = ["2:44","4:15","2:59","4:23","3:47"];
var songLink = ["","","","",""];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song) {
        $("#songs").append("<p>"+song+"</p>");
    });

    songImg.forEach(function(img){
        $("#images").append("<img src="+img+">");
    });
    
    songArtist.forEach(function(artist) {
        $("#artists").append("<p>"+artist+"</p>");
    });
    
    songLength.forEach(function(length) {
        $("#lengths").append("<p>"+length+"</p>");
    });
    
    songLink.forEach(function(link) {
        $("links").append("<p>"+link+"</p>");
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

//displaySongInfo();
