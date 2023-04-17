import React, { useEffect } from 'react'
import catSend from "../../assets/img/cat-send.png"
import { baseURL } from '../libs/baseURL'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'

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
    <div className='w-full h-screen flex justify-center items-center relative bg-gray-50'>
        <div className="w-3/4 shadow-md rounded-lg relative flex justify-center items-center bg-white flex-col py-12 gap-3 md:py-16 max-w-3xl z-20">
            <img src={catSend} alt="Gatito" className='w-24 h-24 absolute top-0 -translate-y-1/2 md:w-32 md:h-32' />
            <p className='font-dosis text-center w-5/6 text-black text-lg font-bold md:text-2xl'>Muchas gracias {Cookies.get("user")} por su compra</p>
            <p className='w-5/6 text-center text-black text-sm md:text-base' >
                Se le estará enviando una boleta de su respectiva compra a su correo, tenga un excelente dia.
            </p>
            <Link to={"/"} className='max-w-sm w-auto text-sm py-2 px-5 rounded-xl text-white bg-overall-800 md:text-lg font-dosis duration-150 hover:scale-95 hover:bg-white hover:text-black border-transparent border-[1px] hover:border-gray-500 hover:shadow-xl'>Regresar a la página</Link>
        </div>
        <div className='mix-blend-multiply w-full h-full absolute bg-cover bg-center' style={{backgroundImage: "url('bg-cat-confirm.jpg')"}}>
        </div>
        <div className='mix-blend-multiply bg-black/50 w-full h-full absolute'>
        </div>
    </div>
  )
}

export default ConfirmPayment