import React from "react";
import Child from "./Child";
class Parent extends React.Component {
    state = {
        username: "Vardhan",
        age: 19,
        roll_no: "2211CS010324",
    };
    render() {
        return (
            <>
                <Child
                    name={this.state.username}
                    age={this.state.age}
                    roll_no={this.state.roll_no}
                />
            </>
        );
    }
}
export default Parent;