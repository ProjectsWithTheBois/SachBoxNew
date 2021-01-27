import React from "react"
import IslandPNG from "../../images/beachspeech/Island.png"

class Island extends React.Component {
    render() {
        return (
            <div style={{display: this.props.playerName === "Empty" && "none"}} class={this.props.islandOffset}>
                <img src={IslandPNG} width="120px" height="120px" alt="Pixel Island" />
                <div>
                    <h5 class="text-uppercase name-block">{this.props.playerName}</h5>
                </div>
            </div>
        )
    }
}

export default Island
