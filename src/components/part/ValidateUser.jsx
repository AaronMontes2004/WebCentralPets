import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const ValidateUser = () => {

    const navigate = useNavigate()

    const validateUser = () => {
        if (Cookies.get("token")) navigate("/")
    }

    useEffect(() => {
        validateUser()
    }, [])

  return (
    <>
        <Outlet/>
    </>
  )
}

export default ValidateUser