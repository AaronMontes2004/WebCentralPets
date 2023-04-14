import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { baseURL } from '../libs/baseURL'
import arrowIcon from "../../assets/icons/arrowBlack.svg"
import { GeneralContext } from '../context/GeneralStatus'
import ListProducts from './ListProducts'
import Footer from '../part/Footer'

const ProductInquiry = () => {

    const { categoryId, setCategoryId, setIconStatus } = useContext(GeneralContext)
    
    const [categoryName, setCategoryName] = useState("")
    const [categories, setCategories] = useState([])
    const [activeCombo, setActiveCombo] = useState(false)

    const listCategories = async () => {
        try {
            const response = await baseURL.get("category")
            setCategories(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listCategories()
        setIconStatus(true)
    }, [])

    useEffect(() => {
        setActiveCombo(false)
    }, [categoryId])

  return (
    <>
    
    <div className='w-11/12 mx-auto relative flex flex-col justify-evenly my-10'>
        <div className='w-full flex justify-between'>
            <div className='w-44 h-12 border-b-[1px] flex flex-col relative md:h-14 lg:h-16 lg:w-52'>
                <p className='font-dosis text-sm mb-1 ml-1.5 md:text-base lg:text-lg'>Categorias:</p>
                <button className='w-full flex gap-1 items-center justify-between px-1.5' onClick={() => setActiveCombo(!activeCombo)}>
                    <span className='font-dosis text-sm font-bold md:text-base lg:text-lg'>{categoryName || "Todos los productos"}</span>
                    <img src={arrowIcon} alt="Arrow" className={'w-4 h-4 duration-500 '+(activeCombo ? "-rotate-0" : "-rotate-180")} />
                </button>
                <div className={'w-full duration-200 absolute overflow-y-auto top-full flex flex-col items-start shadow-md bg-white z-20 '+(activeCombo ? "h-auto overflow-auto": "h-0 overflow-hidden")}>
                    <button className='font-dosis text-sm truncate w-full text-start py-1.5 pl-3 hover:bg-gray-100 md:text-base lg:text-lg ' onClick={() => {setCategoryId(0), setCategoryName("")}} >Todos los productos</button>
                    {
                        categories.map(c => (
                            <button className='font-dosis text-sm truncate w-full text-start py-1.5 pl-3 hover:bg-gray-100 md:text-base lg:text-lg' key={c.idCategoria} onClick={() => {setCategoryId(c.idCategoria), setCategoryName(c.nombreCategoria)}} >{c.nombreCategoria}</button>
                        ))
                    }
                </div>
            </div>
        </div>
        <ListProducts/>
    </div>
    <Footer/>
    </>
  )
}

export default ProductInquiry