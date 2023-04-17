import { Routes, BrowserRouter, Route, HashRouter } from 'react-router-dom'
import Login from './components/private/Login'
import ValidateUser from './components/part/ValidateUser'
import Signup from './components/private/Signup'
import Menu from './components/client/Menu'
import Navbar from './components/part/Navbar'
import { Carousel, initTE } from "tw-elements";
import { useEffect } from 'react'
import ProductInquiry from './components/client/ProductInquiry'
import ListProducts from './components/client/ListProducts'
import MakeAPurchase from './components/client/MakeAPurchase'
import PayProduct from './components/client/PayProduct'
import ErrorElement from './components/libs/ErrorElement'
import ConfirmPayment from './components/client/ConfirmPayment'
import SearchProduct from './components/client/SearchProduct'

function App() {

  useEffect(() => {
    initTE({ Carousel }, true ); 
  },[])

  return (
      <HashRouter>
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
            <Route path='/buscar-producto' element={<SearchProduct/>}/>
          </Route>
          <Route path='/realizar-pago' element={<PayProduct/>} errorElement={<ErrorElement/>}/>
          <Route path='/confirmar-pago' element={<ConfirmPayment/>} />
        </Routes>
      </HashRouter>
  )
}

export default App
