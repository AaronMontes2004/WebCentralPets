import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Login from './components/private/Login'
import ValidateUser from './components/part/ValidateUser'
import Signup from './components/private/Signup'
import Menu from './components/client/Menu'
import Navbar from './components/part/Navbar'
import { Carousel, initTE } from "tw-elements";
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    initTE({ Carousel }, true ); 
  },[])

  return (
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Menu/>}/> */}
          <Route element={<ValidateUser/>}>
            <Route path='/login' element={<Login/>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route element={<Navbar/>}>
            <Route path='/' element={<Menu/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
