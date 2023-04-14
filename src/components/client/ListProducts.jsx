import React, { useContext, useEffect, useState } from 'react'
import { GeneralContext } from '../context/GeneralStatus'
import arrowLeft from "../../assets/icons/arrowLeft.svg"
import arrowRight from "../../assets/icons/arrowRight.svg"
import { baseURL } from '../libs/baseURL'
import { Link } from 'react-router-dom'
import Footer from '../part/Footer'

const ListProducts = () => {

  const [products, setProducts] = useState([])
  const [index, setIndex] = useState(0)
  const { listQuantity, setListQuantity, categoryId, addProductToLocalStorage, setIconStatus } = useContext(GeneralContext)
  const [array, setArray] = useState([])

  const listProducts = async () => {
    if (categoryId === 0){
      const response = await baseURL.get("product")
      operation(response.data.data)
    } else {
      const response = await baseURL.get("product/findByIdCategory/"+categoryId)
      operation(response.data.data)
    }
  }

  const operation = async (data) => {
    const listQuantityTest = [...data, ...data, ...data].length;
    let quantity = Math.ceil(listQuantityTest/10);
    setIndex(quantity)
    let indice = listQuantity * 10

    let list = [...data, ...data, ...data]

    const newResponse = list.slice(indice - 10, indice )

    let n = 1;
    let a = []
    while (n<=quantity){
      a.push(n)
      n++
    }

    setArray(a)
    setProducts(newResponse)
  }

  useEffect(() => {
    listProducts()
  },[listQuantity, categoryId])

  useEffect(() => {
    setIconStatus(true)
  })

  return (
    <>
      <div className='my-5 w-full flex justify-center'>
        <div className='flex gap-1 items-center justify-center lg:gap-2'>
          <img src={arrowLeft} alt="Arrow Left" className={'w-4 h-4 object-cover lg:w-5 lg:h-5 '+(listQuantity == 1 ? "opacity-50" : "opacity-100 hover:cursor-pointer")} onClick={listQuantity == 1 ? ()=>{}: () => {setListQuantity(listQuantity-1)}}/>
          {
            array.map(n => ((<button key={n} className={'rounded-full w-6 h-6 text-sm duration-100 hover:bg-sky-500 hover:text-white lg:w-8 lg:h-8 lg:text-base '+(n == listQuantity ? "bg-sky-500 text-white" : "bg-white")} onClick={() => {setListQuantity(n)}}>{n}</button>)))
          }
          <img src={arrowRight} alt="Arrow Right" className={'w-4 h-4 object-cover lg:w-5 lg:h-5 '+(listQuantity == index ? "opacity-50" : "opacity-100 hover:cursor-pointer")} onClick={listQuantity == index ? ()=>{}: () => {setListQuantity(listQuantity+1)}} />
        </div>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-y-5 gap-x-3 py-4 xl:gap-x-8">
            {
              products.map((p, i) => (
                <div key={i} className="w-28 md:w-44 lg:w-56 xl:w-64 rounded-md shadow-xl overflow-hidden flex flex-col items-center pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-2 md:pb-3 lg:pb-4 xl:pb-5">
                  <div className="w-[80%] h-20 md:h-36 lg:h-44 xl:h-48 rounded-md overflow-hidden relative">
                    <img src={p.imagenProducto} alt="Vestimenta" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-[80%] overflow-hidden relative">
                    <h1 className="font-dosis text-sm font-bold w-full truncate my-1 xl:text-xl md:text-base lg:text-lg">{p.nombreProducto}</h1>
                    <h1 className="font-dosis text-sm w-full truncate xl:text-xl md:text-base lg:text-lg">{"S/ "+p.precioProducto}</h1>
                    <Link to={"/product/"+p.idProducto} className="px-2 text-[11px] w-full inline-block font-dosis text-white rounded-lg text-center py-1.5 mt-2 bg-overall-900 md:truncate xl:text-lg duration-200 hover:bg-overall-800 hover:scale-95 md:text-base lg:text-lg">Ver detalles</Link>
                    <Link onClick={() => addProductToLocalStorage(p)} className="px-2 text-[11px] w-full inline-block font-dosis text-white rounded-lg text-center py-1.5 mt-2 bg-orange-600 md:truncate xl:text-lg duration-200 hover:bg-orange-500 hover:scale-95 md:text-base lg:text-lg hover:cursor-pointer">Agregar al carrito</Link>
                  </div>
                </div>
              ))
            }
      </div>
      <div className='my-5 w-full flex justify-center'>
        <div className='flex gap-1 items-center justify-center lg:gap-2'>
          <img src={arrowLeft} alt="Arrow Left" className={'w-4 h-4 object-cover lg:w-5 lg:h-5 '+(listQuantity == 1 ? "opacity-50" : "opacity-100 hover:cursor-pointer")} onClick={listQuantity == 1 ? ()=>{}: () => {setListQuantity(listQuantity-1)}}/>
          {
            array.map(n => ((<button key={n} className={'rounded-full w-6 h-6 text-sm duration-100 hover:bg-sky-500 hover:text-white lg:w-8 lg:h-8 lg:text-base '+(n == listQuantity ? "bg-sky-500 text-white" : "bg-white")} onClick={() => {setListQuantity(n)}}>{n}</button>)))
          }
          <img src={arrowRight} alt="Arrow Right" className={'w-4 h-4 object-cover lg:w-5 lg:h-5 '+(listQuantity == index ? "opacity-50" : "opacity-100 hover:cursor-pointer")} onClick={listQuantity == index ? ()=>{}: () => {setListQuantity(listQuantity+1)}} />
        </div>
      </div>
    </>
  )
}

export default ListProducts