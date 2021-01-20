import React from "react"

class Island extends React.Component {
    render() {
        return (
            <div style={{display: this.props.playerName === "Empty" && "none"}} class={this.props.islandOffset}>
                <div class="card my-3">
                    <div class="card-body text-center">
                        <h5 class="text-uppercase">{this.props.playerName}</h5>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Island
