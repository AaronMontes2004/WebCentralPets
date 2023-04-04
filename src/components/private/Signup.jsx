import React, { useContext, useEffect, useState } from 'react'
import { baseURL } from '../libs/baseURL'
import { GeneralContext } from '../context/GeneralStatus'
import MessageModal from '../part/MessageModal'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Signup = () => {

    const {on, setOn, status, setStatus, message, setMessage} = useContext(GeneralContext)
    const [user, setUser] = useState({
        nameUser: "",
        lastnameUser: "",
        userUser: "",
        emailUser: "",
        passwordUser: "",
        cellphoneUser: "",
        addressUser: "",
        idSex: "",
        dniUser: ""
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value 
        })
    }

    const signup = async() => {
        try {
            const response = await baseURL.post("user/signup", user, {
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
        <div className='w-full bg-gradient-to-tr from-overall-900 via-overall-500 to-white h-screen flex justify-center items-center overflow-auto min-h-[600px]'>
            <div className='bg-white w-1/2 max-w-xs min-w-[275px] h-auto p-6 flex flex-col gap-3 rounded-lg shadow-md'>
                <h1 className='font-lobster text-center text-4xl'>Central Pets</h1>
                <input className='w-full block border-gray-700 border-2 outline-none px-2 rounded-md py-1' name='nameUser' placeholder='Nombres completos' type={"text"} onChange={(e) => {handleChange(e)}}></input>
                <input className='w-full block border-gray-700 border-2 outline-none px-2 rounded-md py-1' name='lastnameUser' placeholder='Apellidos completos' type={"text"} onChange={(e) => {handleChange(e)}}></input>
                <input className='w-full block border-gray-700 border-2 outline-none px-2 rounded-md py-1' name='userUser' placeholder='Nombre de usuario' type={"text"} onChange={(e) => {handleChange(e)}}></input>
                <input className='w-full block border-gray-700 border-2 outline-none px-2 rounded-md py-1' name='emailUser' placeholder='Correo electrónico' type={"email"} onChange={(e) => {handleChange(e)}}></input>
                <input className='w-full block border-gray-700 border-2 outline-none px-2 rounded-md py-1' name='passwordUser' placeholder='Contrasña' type={"password"} onChange={(e) => {handleChange(e)}}></input>
                <select name='idSex' className='w-full block border-gray-700 border-2 outline-none px-2 rounded-md py-1' onChange={(e) => {handleChange(e)}}>
                    <option value={""}>Seleccione una opción</option>
                    <option value={"1"}>Masculino</option>
                    <option value={"2"}>Femenino</option>
                </select>
                <input className='w-full block border-gray-700 border-2 outline-none px-2 rounded-md py-1' name='cellphoneUser' placeholder='Número de celular' type={"text"} onChange={(e) => {handleChange(e)}}></input>
                <input className='w-full block border-gray-700 border-2 outline-none px-2 rounded-md py-1' name='addressUser' placeholder='Dirección' type={"text"} onChange={(e) => {handleChange(e)}}></input>
                <input className='w-full block border-gray-700 border-2 outline-none px-2 rounded-md py-1' name='dniUser' placeholder='Número de DNI' type={"text"} onChange={(e) => {handleChange(e)}}></input>
                <button type="button" className='bg-overall-900 btn shadow-md duration-200 hover:bg-overall-800' onClick={() => {signup()}}>Registrarse</button>
            </div>
        </div>
        <MessageModal on={on} status={status} message={message}/>
    </>
  )
}

export default Signup