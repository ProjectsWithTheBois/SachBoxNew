import React from "react"
import "../../stylesheets/beachspeech.css"
import Island from "./Island"
import CenterColumn from "./CenterColumn"
import RightColumn from "./RightColumn"
import Developers from "./Developers"
import playerData from "../../data/beachspeech/playerData.json"

/* Beach Speech Game Lobby */
class BSGameLobby extends React.Component {
    constructor() {
        super()
        this.state = {
            gameCode: "ABCD",
            id: "1234567890",
            playersBS: playerData
        }
    }
    
    render() {
        const islandInfo = this.state.playersBS.map( player => 
        <Island 
            key={player.id} 
            playerName={player.playerName} 
            islandOffset={player.islandOffset} 
        />)

        return (
            <div class="container-fluid top-buffer">

                <div class="row">
                    { /* Sets up all the Player Islands */ }
                    <div class="col-3 offset-1">
                        {islandInfo}
                    </div>

                    { /* Contains the Logo and Room Code */ }
                    <CenterColumn gameCode={this.state.gameCode}/>

                    { /* Art Filler */ }
                    <RightColumn />
                </div>

                { /* Contains the Developer Names */ }
                <Developers />

            </div>
        )
    }
}

export default BSGameLobby
