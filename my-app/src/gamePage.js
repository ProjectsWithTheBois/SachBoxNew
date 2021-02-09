import React from 'react';
import ThumbNails from './components/thumbNails.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function GamePage(){
    const classID = "gameThumbnail";
    return (
        <div>
            <div className = "container">
                <h1 className = "subHeader">Game Select</h1>
                <div className= "row">
                    {/* FIXME: MAKE ME DYNAMIC*/}
                    <ThumbNails className = "col-sm" classId ={classID} filePath = "/BeachSpeech.png" caption = "Speech Beach" nextLink = "https://www.google.ca"/>
                    <ThumbNails className = "col-sm" classId ={classID} filePath = "/PlaceHolder.png" caption = "PlaceHolder" nextLink = "https://www.google.ca"/>
                    <ThumbNails className = "col-sm" classId ={classID} filePath = "/PlaceHolder.png" caption = "PlaceHolder" nextLink = "https://www.google.ca"/>
                    <ThumbNails className = "col-sm" classId ={classID} filePath = "/PlaceHolder.png" caption = "PlaceHolder" nextLink = "https://www.google.ca"/>
                </div>
            </div>
        </div>
    );
}
export default GamePage;
