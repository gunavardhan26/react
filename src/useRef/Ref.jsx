// import React from 'react'

// function Ref() {

//     let demo = document.getElementById('demo')
//     console.log(demo);
//     demo.style.backgroundColor = 'yellow'

//     return (
//         <div>
//             <h1 id='demo'>Hello World</h1>
//         </div>
//     )
// }
// export default Ref

//  

// import React, { useRef, useState } from 'react'

// import v1 from './88207-602915574.mp4';

// function Ref() {
//     let ref1 = useRef();
//     console.log(ref1.current);
//     let [state, setState] = useState(true);

//     let demo = () => {
//         setState(!state);
//         state === true ? ref1.current.play() : ref1.current.pause();
//     }

//     return (
//         <div>
//             <video ref={ref1} src={v1} style={{ height: "700px" }} onClick={demo}></video>
//         </div>
//     )
// }

// export default Ref

import React from 'react'

function Ref() {
    let name = React.useRef()
    let password = React.useRef()

    let demo = (e) => {
        e.preventDefault()
        console.log(name.current.value, password.current.value)
    }
    return (
        <div>
            <form onSubmit={demo}>
                <label >Name</label>
                <input type="text" ref={name}></input>
                <label>Password</label>
                <input type="password" ref={password} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Ref