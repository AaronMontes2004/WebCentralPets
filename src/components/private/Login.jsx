import React, { useContext, useEffect, useState } from 'react'
import mail from "../../assets/icons/mail.png"
import padlock from "../../assets/icons/padlock.png"
import MessageModal from '../part/MessageModal'
import { GeneralContext } from '../context/GeneralStatus'
import {baseURL} from "../libs/baseURL"
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const {on, setOn, status, setStatus, message, setMessage} = useContext(GeneralContext)
  const [user, setUser] = useState({
    emailUser: "",
    passwordUser: ""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const login = async () => {
    try {
      const response = await baseURL.post("user/login", user, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setStatus(response.data.status)
      setMessage(response.data.msg)
      setOn(true)
      setTimeout(() => {
        setOn(false)
        Cookies.set("token", response?.data?.token.toString(), {expires: 7});
        Cookies.set("name", response?.data?.user?.nombreUsuario, {expires: 7})
        Cookies.set("lastname", response?.data?.user?.apellidoUsuario, {expires: 7})
        Cookies.set("id", response?.data?.user?.idUsuario, {expires: 7})
        Cookies.set("role", response?.data?.user?.rolUsuario, {expires: 7})
        Cookies.set("user", response?.data?.user?.usuarioUsuario, {expires: 7})
        Cookies.set("email", response?.data?.user?.emailUser, {expires: 7})
        setTimeout(() => {
          navigate("/")
        }, 200)
      }, 1500)

    } catch (error) {
      if (error?.response){
        setStatus(error.response.data.status)
        setMessage(error.response.data.msg)
        setOn(true)
        setTimeout(() => {
          setOn(false)
        }, 1500)
        return;
      } 
      console.log(error);
      setStatus("DANGER")
      setMessage("Error interno en el sistema")
      setOn(true)
      setTimeout(() => {
        setOn(false)
      }, 1500)
    }
  }

  return (
    <>
      <div className='w-full bg-gradient-to-tr from-overall-900 via-overall-500 to-white h-screen flex justify-center items-center'>
        <div className='bg-white w-1/2 max-w-xs min-w-[275px] h-auto p-6 flex flex-col gap-3 rounded-lg shadow-md'>
          <h1 className='font-lobster text-center text-4xl'>Central Pets</h1>
          <label className='flex shadow-md rounded-md'>
            <div className='w-12 h-10 block border-gray-700 border-y-2 border-l-2 relative rounded-l-md'>
              <img src={mail} alt="user image" className='absolute w-full h-full p-2' />
            </div>
            <input className='w-full block border-gray-700 border-y-2 border-r-2 outline-none px-1 rounded-r-md' name='emailUser' placeholder='Correo electrónico' type={"email"} onChange={(e) => {handleChange(e)}}></input>
          </label>
          <label className='flex shadow-md rounded-md'>
            <div className='w-12 h-10 block border-gray-700 border-y-2 border-l-2 relative rounded-l-md'>
              <img src={padlock} alt="user image" className='absolute w-full h-full p-2' />
            </div>
            <input className='w-full block border-gray-700 border-y-2 border-r-2 outline-none px-1 rounded-r-md' name='passwordUser' placeholder='Contraseña' type={"password"} onChange={(e) => {handleChange(e)}}></input>
          </label>
          <button type="button" className='bg-overall-900 btn shadow-md duration-200 hover:bg-overall-800' onClick={() => {login()}}>Iniciar Sesión</button>
          <div className='flex flex-col justify-center items-center'>
            <Link to={"/"} className='text-overall-900 duration-200 hover:text-blue-800'>¿Olvidaste tu contraseña?</Link>
            <Link to={"/signup"} className='text-overall-900 duration-200 hover:text-blue-800'>¿No tienes una cuenta?</Link>
          </div>
        </div>
      </div>
      <MessageModal on={on} status={status} message={message}/>
    </>
  )
}

export default Login