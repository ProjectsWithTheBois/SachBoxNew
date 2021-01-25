import React from "react"

class RightColumn extends React.Component {
    render() {
        return(
            <div class="col-2">
                {/* FIXME: Add some rightside game art later */}
                <div class="row">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h5>Game Art</h5>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default RightColumn
