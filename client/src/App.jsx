import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './User/userAuth/Signup'
import Login from './User/userAuth/Login'
import Navbar from './User/Components/Navbar'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

          <Route path="/" element={<Signup/>}/>
        <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App