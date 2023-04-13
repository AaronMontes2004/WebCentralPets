import Cookies from "js-cookie";
import { createContext, useState } from "react";

export const GeneralContext = createContext()

import React from 'react'

const GeneralStatus = ({children}) => {

  const [on, setOn] = useState(false)
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  const [user, setUser] = useState({
    nameUser: Cookies.get("name") || "",
    lastnameUser: Cookies.get("lastname") || "",
    email: Cookies.get("email") || "",
    user: Cookies.get("user") || "",
    token: Cookies.get("token") || "",
    id: Cookies.get("id") || "",
    role: Cookies.get("role") || ""
  })

  const [categoryId, setCategoryId] = useState(0)
  const [listQuantity, setListQuantity] = useState(1)

  return (
    <GeneralContext.Provider value={{on, setOn, status, setStatus, message, setMessage, user, setUser, categoryId, setCategoryId, listQuantity, setListQuantity}}>
        {children}
    </GeneralContext.Provider>
  )
}

export default GeneralStatus