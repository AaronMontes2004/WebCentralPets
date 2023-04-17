import React, { useContext, useEffect } from 'react'
import { GeneralContext } from '../context/GeneralStatus'
import { Link } from 'react-router-dom'
import sum from "../../assets/icons/sum.svg"

const SelectedProduct = () => {

    const { activateSelectProduct, setActivateSelectProduct, selectedProduct, addProductToLocalStorage } = useContext(GeneralContext)

    useEffect(() => {
      console.log(selectedProduct);
    }, [selectedProduct])
    
  return (
    <div className={"fixed w-full h-screen top-0 z-50 duration-200 flex justify-center items-center "+(activateSelectProduct ? "opacity-100 pointer-events-auto bg-black/25":"delay-300 opacity-0 pointer-events-none")}>
      <div className={'w-3/4 bg-white flex justify-center relative duration-150 max-w-3xl rounded-md '+(activateSelectProduct ? "clip-circle-on":"clip-circle-off")}>
        <div className='w-3/4 flex flex-col items-center justify-center mt-5 md:flex-row md:gap-5'>
          <img src={selectedProduct.imagenProducto || ""} alt="Producto" className='w-36 h-36 object-cover rounded-md md:w-48 md:h-48' />
          <div className='w-full flex flex-col justify-center items-center my-5 md:gap-2'>
            <h1 className='font-dosis truncate text-lg font-bold text-center' title={selectedProduct.nombreProducto || ""}>{selectedProduct.nombreProducto || ""}</h1>
            <p className='font-dosis text-center'>{selectedProduct.descripcionProducto || ""}</p>
            <div className='w-full flex justify-around mt-2'>
              <p className='font-dosis font-bold'>Marca:</p>
              <p className='font-dosis'>{selectedProduct.nombreMarca || ""}</p>
            </div>
            <div className='w-full flex justify-around'>
              <p className='font-dosis font-bold'>Precio:</p>
              <p className='font-dosis'>{"S/ "+selectedProduct.precioProducto || ""}</p>
            </div>
            <Link className='bg-orange-600 text-white py-1.5 px-4 mb-5 rounded-lg font-dosis duration-150 hover:scale-95 hidden md:block md:mt-4' onClick={() => {addProductToLocalStorage(selectedProduct), setActivateSelectProduct(false)}} >Agregar al carrito</Link>
          </div>
          <Link className='bg-orange-600 text-white py-1.5 px-4 mb-5 rounded-lg font-dosis duration-150 hover:scale-95 md:hidden' onClick={() => {addProductToLocalStorage(selectedProduct), setActivateSelectProduct(false)}} >Agregar al carrito</Link>
        </div>
        <img onClick={() => {setActivateSelectProduct(false)}} src={sum} alt="Close" className='absolute w-5 h-5 top-1 right-1 bg-red-700 rotate-45 rounded-full p-0.5 cursor-pointer duration-200 hover:scale-95' />
      </div>
    </div>
  )
}

export default SelectedProduct