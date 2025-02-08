import React, { Component } from 'react'

class Props extends Component {

    render() {
        return (
            <>
                {
                    React.createElement("h1", "null", "Hello world")
                }
                {
                    React.createElement("div", { id: "demo" }, React.createElement("span", "null", "I am span tag"))
                }
                <h1>Hello World</h1>
                <h2>{5 + 5}</h2>
            </>
        )
    }
}

export default Props;