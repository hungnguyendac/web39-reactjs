import React from "react"

class Footer extends React.Component {

    constructor() {
        super()
        this.name = "Footer Component";
    }

    render() {
        return (
            <div style={{width: "100%", height: "200px", backgroundColor: "green"}}>
                <h1>This is {this.name}</h1>
            </div>
        )
    }
}

export default Footer