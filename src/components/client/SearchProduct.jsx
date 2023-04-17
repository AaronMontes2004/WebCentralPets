import React, { useContext, useEffect } from 'react'
import { GeneralContext } from '../context/GeneralStatus'
import { Link } from 'react-router-dom'
import Footer from '../part/Footer'
import SelectedProduct from '../part/SelectedProduct'

const SearchProduct = () => {

    const { wordToSearch, productsForName, addProductToLocalStorage, setSelectedProduct, setActivateSelectProduct } = useContext(GeneralContext)

    useEffect(() => {
        console.log(wordToSearch);
    }, [wordToSearch])

  return (
    <>
      <h1 className='font-dosis text-center mt-10 text-xl font-bold md:text-2xl'>Se obtuvieron {productsForName.length} resultados</h1>
      <div className="mx-auto w-11/12 flex justify-center flex-wrap gap-y-5 gap-x-3 pb-16 pt-10 xl:gap-x-8">
            {
              productsForName.length !== 0 ?
              productsForName.map((p, i) => (
                <div key={i} className="w-28 md:w-44 lg:w-56 xl:w-64 rounded-md shadow-xl overflow-hidden flex flex-col items-center pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-2 md:pb-3 lg:pb-4 xl:pb-5">
                  <div className="w-[80%] h-20 md:h-36 lg:h-44 xl:h-48 rounded-md overflow-hidden relative">
                    <img src={p.imagenProducto} loading='lazy' alt="Vestimenta" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-[80%] overflow-hidden relative">
                    <h1 className="font-dosis text-sm font-bold w-full truncate my-1 xl:text-xl md:text-base lg:text-lg" title={p.nombreProducto}>{p.nombreProducto}</h1>
                    <h1 className="font-dosis text-sm w-full truncate xl:text-xl md:text-base lg:text-lg">{"S/ "+p.precioProducto}</h1>
                    <Link onClick={() => {setSelectedProduct(p), setActivateSelectProduct(true)}} className="px-2 text-[11px] w-full inline-block font-dosis text-white rounded-lg text-center py-1.5 mt-2 bg-overall-900 md:truncate xl:text-lg duration-200 cursor-pointer hover:bg-overall-800 hover:scale-95 md:text-base lg:text-lg">Ver detalles</Link>
                    <Link onClick={() => addProductToLocalStorage(p)} className="px-2 text-[11px] w-full inline-block font-dosis text-white rounded-lg text-center py-1.5 mt-2 bg-orange-600 md:truncate xl:text-lg duration-200 hover:bg-orange-500 hover:scale-95 md:text-base lg:text-lg hover:cursor-pointer">Agregar al carrito</Link>
                  </div>
                </div>
              )): <div className='w-10/12 mx-auto py-12 bg-orange-600 max-w-lg rounded-xl'>
                    <h1 className='font-dosis text-center text-lg text-white break-words px-10'>Ningún producto coincide con la búsqueda</h1>
                  </div>
            }
      </div>
      <SelectedProduct/>
      <Footer/>
    </>
  )
}

export default SearchProduct