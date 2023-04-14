import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import petsIcon from "../../assets/icons/Pets.png"
import userIcon from "../../assets/icons/user.svg"
import arrowIcon from "../../assets/icons/arrow.svg"
import arrowCloseIcon from "../../assets/icons/arrowClose.svg"
import searchIcon from "../../assets/icons/search.svg"
import shoppingCartIcon from "../../assets/icons/shopping-cart.svg"
import shoppingBagIcon from "../../assets/icons/shopping-bag.svg"
import keyIcon from "../../assets/icons/key.svg"
import Cookies from 'js-cookie'
import { baseURL } from '../libs/baseURL'
import ShoppingCart from '../client/ShoppingCart'
import { GeneralContext } from '../context/GeneralStatus'

const Navbar = () => {

  const navigate = useNavigate()

  const [permission, setPermission] = useState(true)
  const [checkedUser, setCheckedUser] = useState(false)
  const [openShoppingCart, setOpenShoppingCart] = useState(false)
  const {precioTotal, iconStatus} = useContext(GeneralContext)

  const [user, setUser] = useState({
    nameUser: Cookies.get("name") || "",
    lastnameUser: Cookies.get("lastname") || "",
    email: Cookies.get("email") || "",
    user: Cookies.get("user") || "",
    token: Cookies.get("token") || ""
  })

  const signOff = () => {
    Cookies.remove("name")
    Cookies.remove("lastname")
    Cookies.remove("email")
    Cookies.remove("user")
    Cookies.remove("token")
    Cookies.remove("id")
    Cookies.remove("role")
    setUser({
      nameUser: Cookies.get("name") || "",
      lastnameUser: Cookies.get("lastname") || "",
      email: Cookies.get("email") || "",
      user: Cookies.get("user") || "",
      token: Cookies.get("token") || ""
    })
  }

  const verifyAdmin = async () => {
    try {
      const response = await baseURL.get("user/verifyToken", {
        headers: {
          "Authorization": "Bearer " + user.token || ""
        }
      })
      if (response.data === "Authorized"){ 
        setPermission(true)
      }
    } catch (error) {
      setPermission(false)
    }
  }

  useEffect(() => {
    verifyAdmin()
  }, [user])

  return (
    <>
        <div className={'fixed w-full h-full duration-150 z-30 '+(checkedUser || openShoppingCart ? "bg-gray-500/10 pointer-events-auto" : "bg-gray-500/0 pointer-events-none")} onClick={()=>{setCheckedUser(false), setOpenShoppingCart(false)}}>
        </div>
        <nav className='w-full bg-overall-600 flex justify-around z-20'>
          <div className='flex justify-center items-center gap-2 py-4 px-2'>
            <Link to={"/"}>
              <img src={petsIcon} alt="Central pets" className='w-10 h-10 object-cover cursor-pointer duration-200 hover:scale-105'/>
            </Link>
            <Link to={"/"}>
              <h1 className='text-white font-dosis font-extrabold text-2xl hidden sm:inline-block md:text-3xl cursor-pointer duration-200 hover:scale-105'>Central<span className='font-normal'>pets</span></h1>
            </Link>
          </div>
          <div className='flex justify-center items-center py-4 px-1 min-w-[130px] w-1/2 sm:w-1/3'>
            <div className='flex relative w-full'>
              <input type="text" placeholder='Buscar un producto' className='py-1 pl-2 pr-8 outline-none rounded-lg w-full relative font-dosis'/> 
              <img src={searchIcon} alt="Search" className='h-full inline-block absolute right-0 p-1 cursor-pointer' onClick={() => {alert("XDDDD")}}/>
            </div>
          </div>
          <div className='flex justify-center items-center py-4 px-2 gap-8'>
            <button className='text-center justify-center items-center w-auto hidden md:flex' onClick={() => {navigate("/consulta-producto")}}>
              <div className='text-center justify-center items-center w-auto duration-200 hover:scale-105 hidden md:flex' >
                <img src={shoppingBagIcon} alt="Carrito de compras" className='w-8 h-8 duration-200 '/>
                <span className='text-lg font-dosis text-white hidden px-1 xl:inline-block duration-200'>Productos</span>
              </div>
            </button>
            <button className='relative text-center justify-center items-center w-auto hidden md:flex z-40 cursor-default'>
              <div className='relative text-center justify-center items-center w-auto duration-200 hover:scale-105 hidden md:flex z-40 cursor-pointer'>
                <div className='relative' onClick={() => {/* navigate("/carrito-compras") */ setOpenShoppingCart(!openShoppingCart)}}>
                  <img src={shoppingCartIcon} alt="Carrito de compras" className='w-8 h-8'/>
                </div>
                <span onClick={() => {/* navigate("/carrito-compras") */ setOpenShoppingCart(!openShoppingCart)}} className='text-lg font-dosis text-white hidden px-1 xl:inline-block'>Mi carrito</span>
              </div>
              <div className={'absolute max-h-[21rem] shadow-md w-96 duration-300 top-full bg-white flex flex-col translate-y-3 translate-x-2 right-0 rounded-lg items-center gap-4 overflow-hidden z-40 modify-scroll '+(openShoppingCart ? "h-auto overflow-y-auto py-4 clip-circle-on" : "clip-circle-off")}>
                <ShoppingCart/>
                <div className='w-11/12 border-[1px] px-10 border-t-black flex pt-4 pb-2 justify-between'>
                  <p className='font-dosis text-base font-bold'>Precio total:</p>
                  <p className='font-dosis text-base'>{"S/ "+precioTotal.toFixed(2)}</p>
                </div>
                <div className='flex justify-center'>
                  <Link to={"/realizar-compra"} className='bg-orange-600 rounded-xl text-white py-3 px-10 mb-3 duration-150 hover:bg-orange-500 hover:scale-95 cursor-pointer' onClick={() => {setOpenShoppingCart(false)}}>Realizar pedido</Link>
                </div>
              </div>
            </button>
            <button className='text-center flex justify-center items-center w-auto duration-200 hover:scale-105 relative z-40' onClick={() => setCheckedUser(!checkedUser)} >
              <img src={userIcon} alt="Usuario" className='w-8 h-8' />
              <span className='text-lg font-dosis text-white hidden px-1 text-ellipsis overflow-hidden w-auto max-w-[180px] sm:inline-block'>{user.user || "Iniciar Sesión"}</span>
              <img src={arrowIcon} alt="Arrow" className={'w-4 h-4 duration-500 '+(checkedUser ? "-rotate-0" : "-rotate-90")} />
              <div className={'absolute shadow-md w-32 sm:w-full duration-300 top-full bg-white flex flex-col translate-y-3 translate-x-2 min-w-[120px] max-w-[180px] right-0 rounded-lg '+(checkedUser ? "h-[73px]" : "h-0")}>
                <img src={arrowCloseIcon} alt="Arrow" className={'w-auto duration-300 top-0 right-0 absolute -translate-y-[63%] '+(checkedUser ? 'h-8' : 'h-0')}/>
                <div className='w-full h-full flex flex-col overflow-hidden rounded-lg'>
                  <Link className={'py-1.5 hover:bg-gray-300 font-dosis '+(user.user ? 'block' : 'hidden')}>Mi cuenta</Link>
                  <Link to={"/login"} className={'block py-1.5 hover:bg-gray-300 font-dosis '+(!user.user ? 'block' : 'hidden')}>Iniciar sesión</Link>
                  <Link to={"/signup"} className={'block py-1.5 hover:bg-gray-300 font-dosis '+(!user.user ? 'block' : 'hidden')}>Registrarse</Link>
                  <Link className={'block py-1.5 hover:bg-gray-300 font-dosis '+(user.user ? 'block' : 'hidden')} onClick={signOff}>Cerrar Sesión</Link>
                </div>
              </div>
            </button>
          </div>  
        </nav>
        <div className={'bottom-5 left-5 md:hidden rounded-full overflow-hidden cursor-pointer animate-bounce hover:animate-none hover:shadow-sm z-20 '+(iconStatus ? "fixed" : "hidden" )}>
          <div className='bg-overall-900 w-12 h-12'>
            <img src={shoppingBagIcon} alt="Mi carrito" className='w-full h-full scale-[0.6]'/>
          </div>
        </div>
        <div className={'bottom-5 right-5 md:hidden rounded-full overflow-hidden cursor-pointer animate-bounce hover:animate-none hover:shadow-sm z-20 '+(iconStatus ? "fixed" : "hidden" )}>
          <div className='bg-orange-600 w-12 h-12'>
            <img src={shoppingCartIcon} alt="Mi carrito" className='w-full h-full scale-[0.6]'/>
          </div>
        </div>
        <div className={'fixed bottom-20 right-5 md:bottom-5 rounded-full overflow-hidden cursor-pointer animate-bounce hover:animate-none hover:shadow-sm z-20 translate-y-96 '+(permission ? "block" : "hidden")}>
          <div className='bg-sky-500 w-12 h-12'>
            <img src={keyIcon} alt="Mi carrito" className='w-full h-full scale-[0.6]'/>
          </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Navbar