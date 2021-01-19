import React from 'react'

function ThumbNails(props){

    return (
        <div> 
            
            <figure>
                <a href ={props.nextLink}>
                    <img className = {props.classId} src = {props.filePath} alt="" width="1250" height="600"/>
                    <figcaption>{props.caption}</figcaption>
                </a>
            </figure> 
        </div>
    );

}
export default ThumbNails;