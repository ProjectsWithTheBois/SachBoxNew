import React from "react"
import "../../stylesheets/beachspeech.css"
import Island from "./Island"
import CenterColumn from "./CenterColumn"
import RightColumn from "./RightColumn"
import playerData from "../../data/beachspeech/playerData.json"

/* Beach Speech Game Lobby */
class BSGameLobby extends React.Component {
    constructor() {
        super()
        this.state = {
            playersBS: playerData
        }
    }
    
    render() {
        const islandInfo = this.state.playersBS.map(player => 
        <Island 
            key={player.id} 
            playerName={player.playerName} 
            islandOffset={player.islandOffset} 
        />)
        const gameCode = "EZPZ"

        return (
            <div class="container-fluid my-5">

                <div class="row">
                    <div class="col-3 offset-1">
                        {islandInfo}
                    </div>

                    { /* FIXME: Replace the game logo */ }
                    <CenterColumn gameCode={gameCode}/>

                    { /* FIXME: Add art to the right side of the page */ }
                    <RightColumn />
                </div>

            </div>
        )
    }
}

export default BSGameLobby
