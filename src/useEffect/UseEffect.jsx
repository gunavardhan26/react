import React, { useEffect } from 'react'

const UseEffect = () => {
    let [state, setState] = React.useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setState(state+1)

        },2000)
    })
  return (
    <>
      <h1>{state}</h1>
    </>
  )
}

export default UseEffect