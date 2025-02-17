import React from 'react'
import {Route ,Routes} from 'react-router-dom'
import Home from './Home'
import Edit from './Edit'
import Add from './Create'

function Master() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/create' element={<Add></Add>}></Route>
          <Route path='/edit/:userid' element={<Edit></Edit>}></Route>
       </Routes>
    </div>
  )
}

export default Master