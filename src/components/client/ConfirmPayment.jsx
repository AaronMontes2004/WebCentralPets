import React, { useEffect } from 'react'
import { baseURL } from '../libs/baseURL'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const ConfirmPayment = () => {

    const navigate = useNavigate()

    const addSale = async () => {
        const response = await baseURL.post("sale/addSale", {
            idUser: Cookies.get("id") || ""
        })
        
        const products = JSON.parse(localStorage.getItem("shoppingCart"))
        
        products?.map(async(p) => {
            const res = await baseURL.post("saleDetail/addSaleDetail", {
                "idSale": response?.data?.data?.insertId,
                "idProduct": p.idProducto,
                "quantityProduct": p.cantidadTotal,
                "unitPriceProduct": p.precioProducto,
                "totalPayProduct": p.precioTotalProducto
            })
            console.log(res.data);
        })

        localStorage.removeItem("shoppingCart")
        localStorage.removeItem("confirm")
    }

    useEffect(() => {
        if (Cookies.get("id") && localStorage.getItem("confirm") && localStorage.getItem("shoppingCart")){
            addSale()
        } else {
            navigate("/")
            localStorage.removeItem("confirm")
        }
    }, [])

  return (
    <div>{localStorage.getItem("confirm")}</div>
  )
}

export default ConfirmPayment