import React, { useContext, useEffect } from 'react'
import sum from "../../assets/icons/sum.svg"
import subtraction from "../../assets/icons/subtraction.svg"
import { GeneralContext } from "../context/GeneralStatus"
import Footer from "../part/Footer"
import { Link } from 'react-router-dom'

const MakeAPurchase = () => {

  const { productTable, setIconStatus, removeProductFromLocalStorage, addAmount, subtractAmount, totalProductos, totalPagar } = useContext(GeneralContext)

  useEffect(() => {
    setIconStatus(false)
  }, [])

  return (
    <>
      <div className='w-full relative flex flex-col justify-center items-center mx-auto bg-gray-100 lg:flex-row lg:items-start lg:gap-5'>
        <div className='w-11/12 flex flex-col justify-center items-center relative gap-2 lg:w-5/12 lg:mb-6 max-w-lg'>
          <h1 className='font-dosis text-lg my-4'><span className='font-bold'>Cantidad Seleccionada:</span> {productTable.length+" Productos"}</h1>
          {
              productTable.length !== 0 ? productTable?.map(p => (
                <div key={p.idProducto} className='w-full shadow-md flex justify-center items-center rounded-md bg-white relative'>
                  <div className='w-16 h-16 relative my-3 rounded-lg overflow-hidden'>
                    <img src={p.imagenProducto} className='w-full h-full object-cover rounded-lg' alt={p.nombreProducto} />
                  </div>
                  <div className='w-3/5 flex-col items-center justify-between'>
                    <p className='font-dosis px-2 text-sm mb-2 truncate w-full text-center' >{p.nombreProducto}</p>
                    <div className='flex justify-evenly items-center' >
                      <p className='font-dosis text-sm'>{"S/ "+Number(p.precioTotalProducto).toFixed(2)}</p>
                      <div className='flex justify-center items-center gap-1'>
                        <img src={subtraction} alt="Subtraction" className='w-5 h-5 bg-orange-600 rounded-full object-cover p-0.5 duration-150 lg:hover:scale-95 cursor-pointer' onClick={() => {subtractAmount(p)}} />
                        <p className='w-4 font-dosis text-center'>{p.cantidadTotal}</p>
                        <img src={sum} alt="Sum" className='w-5 h-5 bg-orange-600 rounded-full object-cover p-0.5 duration-150 lg:hover:scale-95 cursor-pointer' onClick={() => {addAmount(p)}} />
                      </div>
                    </div>
                  </div>
                  <img src={sum} alt="Delete" className='w-4 h-4 absolute bg-red-600 top-1 right-1 rounded-full cursor-pointer rotate-45 p-0.5' onClick={() => {removeProductFromLocalStorage(p)}} />
                </div>
              )) : <div className='w-full shadow-md flex justify-center items-center rounded-md bg-white relative h-24'>
                  <h1 className='font-dosis' >No hay productos en su carrito</h1>
                </div>
          }
        </div>
        <div className='w-full py-4 sticky bottom-0 my-4 rounded-lg bg-white flex justify-center shadow-xl lg:relative lg:mt-[4.2rem] lg:w-5/12 lg:max-w-lg lg:mb-10'>
          <div className='w-10/12 relative flex flex-col items-start'>
            <h1 className='font-dosis font-bold mb-2' >Resumen de la orden</h1>
            <div className='w-full flex justify-between'>
              <p className='font-dosis'>Total de productos:</p>
              <p className='font-dosis'>{totalProductos}</p>
            </div>
            <div className='w-full flex justify-between'>
              <p className='font-dosis'>Total a pagar:</p>
              <p className='font-dosis'>{"S/ "+Number(totalPagar).toFixed(2)}</p>
            </div>
            <Link to={"/realizar-pago"} className='cursor-pointer font-dosis py-3 w-full text-center mt-3 bg-sky-500 rounded-3xl text-white text-base duration-150 shadow-md hover:scale-95 hover:bg-sky-600'>Continuar compra</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MakeAPurchase