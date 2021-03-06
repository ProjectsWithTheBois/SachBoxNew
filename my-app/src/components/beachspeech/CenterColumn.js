import React from "react"
import BlobLogoPNG from "../../images/beachspeech/BlobLogo.png"

class CenterColumn extends React.Component {
    render() {
        return (
            <div class="col-5 my-5">   
                {/* FIXME: Replace the final logo here */}
                <div class="row">
                    <img src={BlobLogoPNG} alt="Blob Studios Logo"></img>
                </div>

                <div class="row offset-1 my-2">
                    <h2>Blob Studios</h2>
                </div>

                <div class="row justify-content-center room-code">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h3><em>Room Code</em></h3>
                            <h1>{this.props.gameCode}</h1>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default CenterColumn
