import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralStatus'
import trash from "../../assets/icons/trash.png"

const ShoppingCart = () => {
  const {productTable, removeProductFromLocalStorage} = useContext(GeneralContext)
  return (
    productTable && productTable.length > 0 ? (<>
      {productTable?.map((p, i) => (
      <div key={i} className='w-11/12 flex justify-between h-24 items-center'>
        <img src={p.imagenProducto} alt={p.imagenProducto} className='w-16 h-16 object-cover rounded-md' />
        <p className='w-40 truncate font-dosis'>{p.nombreProducto}</p>
        <p className='font-dosis w-20'>{"S/ "+p.precioProducto}</p>
        <img src={trash} alt="Trash" className='w-7 duration-150 hover:animate-pulse hover:scale-110 hover:cursor-pointer' onClick={() => removeProductFromLocalStorage(p)} />
      </div>
    )) }
    </>): (<h1 className='rounded-3xl w-11/12 py-6 font-dosis text-lg'>Su carrito está vacio</h1>)
  )
}

export default ShoppingCart