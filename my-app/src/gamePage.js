import React from 'react';
import ThumbNails from './thumbNails.js';
function GamePage(){

    const gameThumbsPaths = ["/SpeechBeach.png","/PlaceHolder.png"];
    const classID = "gameThumbnail";
    const captionArray = [
        "Speech Beach",
        "Placeholder"
    ];
    const links = [
        "https://www.google.ca",
        "https://www.youtube.com" 
    ];
    return (
        <div>
            <title> Project with the BOIS </title>
            <body>
                <ThumbNails classId ={classID} filePath ={gameThumbsPaths[0]} caption = {captionArray[0]} nextLink = {links[0]} />
                <ThumbNails classId ={classID} filePath ={gameThumbsPaths[1]} caption = {captionArray[1]} nextLink = {links[0]} />
                <ThumbNails classId ={classID} filePath ={gameThumbsPaths[1]} caption = {captionArray[1]} nextLink = {links[1]} />
            </body>
        </div>
    );
}
export default GamePage