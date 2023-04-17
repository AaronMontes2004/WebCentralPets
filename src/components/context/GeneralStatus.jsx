import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext()

import React from 'react'
import { baseURL } from "../libs/baseURL";

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
  const [totalProductos, setTotalProductos] = useState(0)
  const [totalPagar, setTotalPagar] = useState(0)
  const [index, setIndex] = useState(0)

  // Selected Product

  const [activateSelectProduct, setActivateSelectProduct] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  // Search product

  const [wordToSearch, setWordToSearch] = useState("")
  const [productsForName, setProductsForName] = useState([])
  const [searchProductConfirm, setSearchProductConfirm] = useState(false)

  const addProductToLocalStorage = async (p) => {
    const productsShoppingCart = localStorage.getItem("shoppingCart")
    if (!productsShoppingCart){
      localStorage.setItem("shoppingCart", JSON.stringify([...[{...p, ["cantidadTotal"]: 1, ["precioTotalProducto"]: p.precioProducto}]]))
      setProductChanges(!productChanges)
    } else {   
      let value = JSON.parse(productsShoppingCart).filter(s => s.idProducto == p.idProducto)
      if (!value || value.length === 0){
        localStorage.setItem("shoppingCart", JSON.stringify([...JSON.parse(productsShoppingCart), ...[{...p, ["cantidadTotal"]: 1, ["precioTotalProducto"]: p.precioProducto}]]))
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

  const addAmount = (p) => {
    let data = JSON.parse(localStorage.getItem("shoppingCart"));
    let indexData = data.findIndex(d => d.idProducto == p.idProducto)
    data[indexData].cantidadTotal += 1;
    data[indexData].precioTotalProducto = data[indexData].precioProducto * data[indexData].cantidadTotal
    localStorage.setItem("shoppingCart", JSON.stringify([...data]))
    setProductChanges(!productChanges)
  }

  const subtractAmount = (p) => {
    let data = JSON.parse(localStorage.getItem("shoppingCart"));
    let indexData = data.findIndex(d => d.idProducto == p.idProducto)
    data[indexData].cantidadTotal -= 1;
    data[indexData].precioTotalProducto = data[indexData].precioProducto * data[indexData].cantidadTotal
    localStorage.setItem("shoppingCart", JSON.stringify([...data]))
    setProductChanges(!productChanges)
  } 

  const productsByName = async() => {
    try {
      if (wordToSearch === "" || wordToSearch === null){
        const productsName = await baseURL.get("product")
        console.log(productsName.data.data);
        setProductsForName(productsName.data.data)
      } else {
        const productsName = await baseURL.get("product/filter/"+wordToSearch)
        console.log(productsName.data.data);
        setProductsForName(productsName.data.data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    setProductTable(JSON.parse(localStorage.getItem("shoppingCart") || "[]"))
    let a = 0;
    JSON.parse(localStorage.getItem("shoppingCart") || "[]") ?.map(p => {
      a+=Number(p.precioProducto)
    })
    setPrecioTotal(Math.round(a*100)/100)
    let b = 0;
    let c = 0;
    JSON.parse(localStorage.getItem("shoppingCart") || "[]") ?.map(p => {
      b+=Number(p.cantidadTotal)
      c+=Number(p.precioTotalProducto)
    })
    setTotalProductos(b)
    setTotalPagar(c)
  }, [productChanges])

  useEffect(() => {
    productsByName()
  }, [searchProductConfirm])

  return (
    <GeneralContext.Provider value={{on, setOn, status, setStatus, message, setMessage, user, setUser, categoryId, setCategoryId, listQuantity, setListQuantity, addProductToLocalStorage, removeProductFromLocalStorage, productTable, precioTotal, iconStatus, setIconStatus, addAmount, subtractAmount, totalProductos, totalPagar, activateSelectProduct, setActivateSelectProduct, selectedProduct, setSelectedProduct, index, setIndex, wordToSearch, setWordToSearch, productsForName, setSearchProductConfirm, searchProductConfirm}}>
        {children}
    </GeneralContext.Provider>
  )
}

export default GeneralStatus