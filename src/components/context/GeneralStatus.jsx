import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

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
  const [productTable, setProductTable] = useState([])
  const [productChanges, setProductChanges] = useState(true)
  const [precioTotal, setPrecioTotal] = useState(0)
  const [iconStatus, setIconStatus] = useState(true)

  const addProductToLocalStorage = async (p) => {
    const productsShoppingCart = localStorage.getItem("shoppingCart")
    if (!productsShoppingCart){
      localStorage.setItem("shoppingCart", JSON.stringify([...[p]]))
      setProductChanges(!productChanges)
    } else {   
      let value = JSON.parse(productsShoppingCart).filter(s => s.idProducto == p.idProducto)
      if (!value || value.length === 0){
        localStorage.setItem("shoppingCart", JSON.stringify([...JSON.parse(productsShoppingCart), ...[p]]))
        setProductChanges(!productChanges)
      }
    }
  }
  
  const removeProductFromLocalStorage = async (p) => {
    let data = JSON.parse(localStorage.getItem("shoppingCart"));
    let newTable = data.filter(d => d.idProducto != p.idProducto)
    localStorage.setItem("shoppingCart", JSON.stringify([...newTable]))
    setProductChanges(!productChanges)
  }
  
  useEffect(() => {
    setProductTable(JSON.parse(localStorage.getItem("shoppingCart")))
    let a = 0;
    JSON.parse(localStorage.getItem("shoppingCart"))?.map(p => {
      a+=Number(p.precioProducto)
    })
    setPrecioTotal(Math.round(a*100)/100)
  }, [productChanges])

  return (
    <GeneralContext.Provider value={{on, setOn, status, setStatus, message, setMessage, user, setUser, categoryId, setCategoryId, listQuantity, setListQuantity, addProductToLocalStorage, removeProductFromLocalStorage, productTable, precioTotal, iconStatus, setIconStatus}}>
        {children}
    </GeneralContext.Provider>
  )
}

export default GeneralStatus