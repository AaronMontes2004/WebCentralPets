import React, { useContext, useEffect } from 'react'
import sum from "../../assets/icons/sum.svg"
import subtraction from "../../assets/icons/subtraction.svg"
import { GeneralContext } from "../context/GeneralStatus"
import Footer from "../part/Footer"

const MakeAPurchase = () => {

  const { productTable, setIconStatus } = useContext(GeneralContext)

  useEffect(() => {
    setIconStatus(false)
  }, [])

  return (
    <>
      <div className='w-full relative flex flex-col justify-center items-center mx-auto bg-gray-100 lg:flex-row'>
        <div className='w-11/12 flex flex-col justify-center items-center relative gap-2'>
          <h1 className='font-dosis text-lg my-4'><span className='font-bold'>Total de comprar:</span> {"4 Productos"}</h1>
          {
            productTable.map(p => (
              <div key={p.idProducto} className='w-11/12 shadow-md flex justify-center items-center rounded-md bg-white'>
                <div className='w-16 h-16 relative my-3 rounded-lg overflow-hidden'>
                  <img src={p.imagenProducto} className='w-full h-full object-cover rounded-lg' alt={p.nombreProducto} />
                </div>
                <div className='w-3/5 flex-col items-center justify-between'>
                  <p className='font-dosis px-2 text-sm mb-2 truncate w-full text-center' >{p.nombreProducto}</p>
                  <div className='flex justify-evenly items-center' >
                    <p className='font-dosis text-sm'>S/12.00</p>
                    <div className='flex justify-center items-center gap-1'>
                      <img src={subtraction} alt="Subtraction" className='w-5 h-5 bg-orange-600 rounded-full object-cover p-0.5 duration-150 lg:hover:scale-95 cursor-pointer' />
                      <p className='w-4 font-dosis text-center'>1</p>
                      <img src={sum} alt="Sum" className='w-5 h-5 bg-orange-600 rounded-full object-cover p-0.5 duration-150 lg:hover:scale-95 cursor-pointer' />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='w-full py-4 sticky bottom-0 my-4 rounded-lg bg-white flex justify-center shadow-xl lg:relative'>
          <div className='w-10/12 relative flex flex-col items-start'>
            <h1 className='font-dosis font-bold mb-2' >Resumen de la orden</h1>
            <div className='w-full flex justify-between'>
              <p className='font-dosis'>Total de productos:</p>
              <p className='font-dosis'>4</p>
            </div>
            <div className='w-full flex justify-between'>
              <p className='font-dosis'>Total a pagar:</p>
              <p className='font-dosis'>S/10.00</p>
            </div>
            <a className='cursor-pointer font-dosis py-3 w-full text-center mt-3 bg-sky-500 rounded-3xl text-white text-base duration-150 shadow-md hover:scale-95 hover:bg-sky-600'>Continuar compra</a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MakeAPurchase