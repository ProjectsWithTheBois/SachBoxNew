import React from 'react'

function ThumbNails(props){
    var {nextLink, classId, filePath, caption} = props;
    return (
        <div> 
            <figure>
                <a href ={nextLink}>
                    {/*Fix Me: Make the image size dynamic*/} 
                    <img className = {classId} src = {filePath} alt="" width="500" height="350" />
                    <figcaption>{caption}</figcaption>
                </a>
            </figure> 
        </div>
    );
}
export default ThumbNails;
