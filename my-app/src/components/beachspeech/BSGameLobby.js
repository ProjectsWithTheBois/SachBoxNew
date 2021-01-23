import React from "react"
import "../../stylesheets/beachspeech.css"
import Island from "./Island"
import playerData from "../../data/beachspeech/playerData.json"
import BlobLogo from "../../images/beachspeech/BlobLogo.png"

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
        const islandInfo = this.state.playersBS.map( player => <Island key={player.id} playerName={player.playerName} islandOffset={player.islandOffset}/>)

        return (
            <div class="container-fluid top-buffer">

                <div class="row">
                    { /* Sets up all the Player Islands */ }
                    <div class="col-3 offset-1">
                        {islandInfo}
                    </div>

                    { /* Contains the Logo and Room Code */ }
                    <div class="col-5 my-5">
                        <div class="row">
                            <img src={BlobLogo} alt="Blob Studios Logo"></img>
                        </div>

                        <div class="row offset-1 my-2">
                            <h2>Blob Studios</h2>
                        </div>

                        <div class="row justify-content-center buffer">
                            <div class="card mb-4">
                                <div class="card-body text-center">
                                    <h3><em>Room Code</em></h3>
                                    <h1>{this.state.gameCode}</h1>
                                </div> 
                            </div>
                        </div>

                    </div>

                    { /* Art Filler */ }
                    <div class="col-2">
                        <div class="row">
                            <div class="card mb-4">
                                <div class="card-body text-center">
                                    <h5>Game Art</h5>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

                { /* Contains the Developer Names */ }
                <div class="row justify-content-center mt-3">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h3>Developers</h3> 
                            <p class="lead"><b>Sach &#8226; Alec &#8226; Richard &#8226; Luke &#8226; Habib &#8226; Albert &#8226; Ano &#8226; Iqbal &#8226; Hanz &#8226; Ankit</b></p>
                        </div> 
                    </div>
                </div>

            </div>
        )
    }
}

export default BSGameLobby
