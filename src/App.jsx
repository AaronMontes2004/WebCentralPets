import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Login from './components/private/Login'
import ValidateUser from './components/part/ValidateUser'
import Signup from './components/private/Signup'
import Menu from './components/client/Menu'
import Navbar from './components/part/Navbar'
import { Carousel, initTE } from "tw-elements";
import { useEffect } from 'react'
import ProductInquiry from './components/client/ProductInquiry'
import ListProducts from './components/client/ListProducts'
import ShoppingCart from './components/client/ShoppingCart'
import MakeAPurchase from './components/client/MakeAPurchase'

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
            <Route element={<ProductInquiry/>}>
              <Route path='/consulta-producto' element={<ListProducts/>} />
            </Route>
            <Route path='/realizar-compra' element={<MakeAPurchase/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
