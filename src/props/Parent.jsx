// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//     state = {
//         username: 'abhi',
//     }
//     render() {
//         return (
//             <>
//                 <Child name={this.state.username} />
//             </>
//         )
//     }
// }


// import React from 'react'
// import Child from './Child'

// var var1 = {
//     name: 'Guna',
//     id: 25,
//     designation: 'student'
// }




// const Parent = () => {
//     const fun = () => {
//         window.alert("I am a funtion")
//     }

//     return (
//         // <><Child name="Guna" />
//         <>
//             {/* <Child id={10} /> */}
//             {/* <Child arr={[10, 20, 30]} /> */}
//             {/* <Child prop={var1} /> */}
//             <Child fun1={fun} />
//         </>
//     )
// }

// export default Parent

import React from 'react'
import Child from './Child'

const Parent = () => {
    return (
        <div>
            <Child>
                <children>
                    I am Child
                </children>
            </Child>
        </div>
    )
}

export default Parent

