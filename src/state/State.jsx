import React, { useState } from 'react'
import img1 from '../img/1.webp';
import img2 from '../img/2.jpg';
function State() {
    // let [state, setState] = useState('abhi');
    // console.log(state);

    // console.log(setState);

    // return (
    //     <div>
    //         <h1>{state}</h1>
    //         <button onClick={() => setState('rahul')}>Change Name</button>
    //     </div>
    // )



    // const [image, setImage] = useState(img1);
    // const change = () => {
    //     if (image == img2) {
    //         return setImage(img1);
    //     } else {
    //         return setImage(img2);
    //     }
    // }

    // return (
    //     <div>
    //         <img src={image} alt="Image" onClick={change()} />
    //     </div>
    // )

    // const [count, setCount] = useState(0);
    // return (
    //     <>
    //         <h1>Count: {count}</h1>
    //         <button style={{ marginLeft: "10px" }} onClick={() => { setCount(count + 1) }}>Increment</button>
    //         <button style={{ marginLeft: "10px" }} onClick={() => { setCount(count - 1) }}>Decrement</button>
    //         <button style={{ marginLeft: "10px" }} onClick={() => { setCount(0) }}>Reset</button>
    //     </>
    // )

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, password });
        if (name === password) {
            window.open("https://pixabay.com/");
        } else {
            window.location.reload()
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label><b>Name </b></label>
                <input style={{ marginLeft: "30px" }} type="text" name="name" id="name" onChange={handleNameChange} />
                <br />
                <label><b>Password </b></label>
                <input style={{ marginLeft: "5px" }} type="password" name="password" id="password" on onChange={handlePasswordChange} />
                <br />
                <button style={{ margin: "10px" }} type="submit">Submit</button>
            </form>
        </>
    )
}

export default State