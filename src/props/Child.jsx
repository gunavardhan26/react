// import React, { Component } from 'react'

// export default class Child extends Component {
//     render() {
//         return (
//             <>
//                 <h1>My name is {this.props.name}</h1>
//             </>
//         )
//     }
// }

// import React from 'react'


// const Child = (props) => {
//     console.log(props)

//     return (
//         <>
//             {/* <h1>My name is : {props.name}</h1> */}
//             {/* <h1>The id is {props.id}</h1> */}
//             {/* <h1>{props.arr}</h1> */}
//             {/* <h1>Name  : {props.prop.name}</h1>
//             <h1>id  : {props.prop.id}</h1> */}
//             {/* <h1>Designation  : {props.prop.designation}</h1> */}
//             <button onClick={props.fun1}>Click</button>
//         </>
//     )
// }

// export default Child

import React from 'react'

const Child = (props) => {
    console.log(props)
    //console.log(props.Children)
    return (
        <div>
            <h1>
                {props.children}
            </h1>
        </div>
    )
}

export default Child

