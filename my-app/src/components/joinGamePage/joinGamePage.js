import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function JoinGamePage(){
    return (
        <div>
            <title> Project with the BOIS </title>
            <div className ="container">
                <form>
                    <div className ="form-group">
                        <label for="text">ROOM CODE</label>
                        <input type="text" class="form-control" id="inputRoomCode" placeholder="ENTER 4-LETTER CODE"  maxlength="4"  autocapitalize="off" autocorrect="off" autocomplete="off"/>
                        {/*type/class is basic bootstrap, placeholder is what appears in the bar when it isn't filled in, maxlength sets max length of input (4 digit code), autocaptializing, autocorrect and autocomplete when you input text is all turned off */}
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">NAME</label>
                        <input type="text" class="form-control" id="inputName" placeholder="ENTER YOUR NAME"/>
                    </div>
                    <button type="submit" class="btn btn-warning btn-block">PLAY</button>
                </form>
            </div>
        </div>
    );
}
export default JoinGamePage
