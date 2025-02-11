// import React from 'react'
// import {user} from './CompA';

// function CompC() {
//   return (
//     <>
//     {
//         <user.Consumer>
//             {(user) => {
//                 return(
//                   <>
//                 <h1>My name is {user}</h1>)
//                 </>
//                 )
                
                
                
//             }
//         }
//         </user.Consumer>
//     }
//     </>
//   )
// }

// export default CompC

import React,{useContext} from 'react'
import userName from './CompA.jsx'

function CompC() {
  const user = useContext(userName)
  return (
    <div>
      <h1>My name is {user}</h1>
    </div>
  )
}

export default CompC