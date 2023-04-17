import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import vetWithPetImage from "../../assets/img/vetWithPet.jpg"
import cats from "../../assets/img/cats.jpg"
import petClothes from "../../assets/img/petClothes.jpg"
import reservacionIcon from "../../assets/img/QuienesSomos/reservacion.png"
import hospitalizacionIcon from "../../assets/img/QuienesSomos/hospitalizacion.png"
import cosmeticosIcon from "../../assets/img/QuienesSomos/cosmeticos.png"
import vestimentasIcon from "../../assets/img/QuienesSomos/vestimentas.png"
import tratamientosIcon from "../../assets/img/QuienesSomos/tratamiento.png"
import consultasIcon from "../../assets/img/QuienesSomos/consulta.png"
import { Link } from "react-router-dom";
import vestimentaDog1 from "../../assets/img/NuestrosProductos/vestimentas/vestimentasDog1.png"
import vestimentaDog2 from "../../assets/img/NuestrosProductos/vestimentas/vestimentasDog2.png"
import vestimentaCat1 from "../../assets/img/NuestrosProductos/vestimentas/vestimentasCat1.png"
import vestimentaCat2 from "../../assets/img/NuestrosProductos/vestimentas/vestimentasCat2.png"
import cosmeticoDog1 from "../../assets/img/NuestrosProductos/cosmeticos/cosmeticosDog1.png"
import cosmeticoDog2 from "../../assets/img/NuestrosProductos/cosmeticos/cosmeticosDog2.png"
import cosmeticoCat1 from "../../assets/img/NuestrosProductos/cosmeticos/cosmeticosCat1.png"
import cosmeticoCat2 from "../../assets/img/NuestrosProductos/cosmeticos/cosmeticosCat2.png"
import veterinario1 from "../../assets/img/NuestroEquipo/veterinaria1.png"
import veterinaria1 from "../../assets/img/NuestroEquipo/veterinaria2.png"
import veterinaria2 from "../../assets/img/NuestroEquipo/veterinaria3.png"
import Map from "../part/Map";
import Footer from "../part/Footer";
import { baseURL } from "../libs/baseURL";
import { GeneralContext } from "../context/GeneralStatus";
import SelectedProduct from "../part/SelectedProduct";

const Menu = () => {
  const [productsVestments, setProductsVestments] = useState([])
  const [productsCosmetics, setProductsCosmetics] = useState([])
  const { setCategoryId, setIconStatus, setSelectedProduct, setActivateSelectProduct } = useContext(GeneralContext)
  /* const [user, setUser] = useState({
    nameUser: Cookies.get("name") || "",
    lastnameUser: Cookies.get("lastname") || "",
    email: Cookies.get("email") || "",
    user: Cookies.get("user") || "",
  }); */

  const listProductsCosmetics = async () => {
    try {
      const productsList = await baseURL.get("product/findByIdCategory/2")
      const productLength = productsList.data.data.length
      let arrayTest = []
      let list = []

      if (productLength === 0){
        return;
      }
      
      if (productLength < 4){
        if (productLength === 3){
          list = [productsList.data.data[0], productsList.data.data[1], productsList.data.data[2]]
        } else if (productLength === 2){
          list = [productsList.data.data[0], productsList.data.data[1]]
        } else {
          list = [productsList.data.data[0]]
        }
      } else {
        while (arrayTest.length < 4){
          let randomNumber = Math.round(Math.random() * (productLength - 1)+1)
          if (arrayTest.length === 0){
            arrayTest.push(randomNumber)
          } else {
            let position = 0
            let pass = true;
            while (position < productLength){
              if (arrayTest[position] == randomNumber){
                pass = false
                break;
              }
              position++
            }
            if (pass){
              arrayTest.push(randomNumber)
            }
          }
          console.log(arrayTest);
        }
        list = [productsList.data.data[arrayTest[0]-1], productsList.data.data[arrayTest[1]-1], productsList.data.data[arrayTest[2]-1], productsList.data.data[arrayTest[3]-1]]
      }

      setProductsCosmetics(list)
      
    } catch (error) {
      console.log(error);
    }
  }

  const listProductsVestments = async () => {
    try {
      const productsList = await baseURL.get("product/findByIdCategory/1")
      const productLength = productsList.data.data.length
      let arrayTest = []
      let list = []
      
      if (productLength === 0){
        return;
      }

      if (productLength < 4){
        if (arrayTest.length === 3){
          list = [productsList.data.data[0], productsList.data.data[1], productsList.data.data[2]]
        } else if (arrayTest.length === 2){
          list = [productsList.data.data[0], productsList.data.data[1]]
        } else {
          list = [productsList.data.data[0]]
        }
      } else {
        while (arrayTest.length < 4){
          let randomNumber = Math.round(Math.random() * (productLength - 1)+1)
          if (arrayTest.length === 0){
            arrayTest.push(randomNumber)
          } else {
            let position = 0
            let pass = true;
            while (position < productLength){
              if (arrayTest[position] == randomNumber){
                pass = false
                break;
              }
              position++
            }
            if (pass){
              arrayTest.push(randomNumber)
            }
          }
          console.log(arrayTest);
        }
        list = [productsList.data.data[arrayTest[0]-1], productsList.data.data[arrayTest[1]-1], productsList.data.data[arrayTest[2]-1], productsList.data.data[arrayTest[3]-1]]
      }

      setProductsVestments(list)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listProductsCosmetics()
    listProductsVestments()
    setIconStatus(true)
  },[])

  return (
    <>
      {/* El Carousel */}
      <div
        id="carouselExampleCaptions"
        className="relative z-10"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div
          className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="0"
            data-te-carousel-active
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="1"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="2"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active
            data-te-carousel-item
            style={{backfaceVisibility: "hidden"}}
          >
            <img
              src={vetWithPetImage}
              className="block w-full h-[90vh] object-cover"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl font-bold font-dosis">Reserva una cita</h5>
              <p className="font-dosis text-lg">
                Brindanos toda la información del estado de su mascota
              </p>
            </div>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{backfaceVisibility: "hidden"}}
          >
            <img
              src={cats}
              className="block w-full h-[90vh] object-cover"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl font-bold font-dosis">Cuidados de tus mascotas</h5>
              <p className="font-dosis text-lg">
                Te aconsejamos de como debes cuidar y alimentar a tus mascotas saludablemente
              </p>
            </div>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{backfaceVisibility: "hidden"}}
          >
            <img
              src={petClothes}
              className="block w-full h-[90vh] object-cover"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl font-bold font-dosis">Ropa y cosméticos</h5>
              <p className="font-dosis text-lg">
                Todo tipo de ropas y cosméticos para tus mascotas
              </p>
            </div>  
          </div>
        </div>
        <button
          className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>

      {/*  ¿QUE OFRECEMOS?  */ }
      <div className="w-full min-h-[250px] h-auto flex flex-col items-center py-10" >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-dosis font-bold text-center">¿Que ofrecemos?</h1>
        <div className="w-[90%] grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-6 mt-10 md:grid-cols-3 md:grid-rows-2">
          <div className="w-full h-full flex flex-col items-center">
            <img src={reservacionIcon} alt="Reservaciones" className="w-16 h-16 object-cover drop-shadow-md duration-200 hover:scale-105"/>
            <h1 className="font-dosis font-bold my-2 text-base md:text-lg">Reservación</h1>
            <p className="font-dosis text-center px-3 md:text-lg">
              Reserva tu cita médica para ayudar a tu mascota con su mal estado de salud
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center">
            <img src={hospitalizacionIcon} alt="Reservaciones" className="w-16 h-16 object-cover drop-shadow-md duration-200 hover:scale-105"/>
            <h1 className="font-dosis font-bold my-2 text-base md:text-lg">Hospitalización</h1>
            <p className="font-dosis text-center px-3 md:text-lg">
              Hospitalizamos a tus mascota en caso sea necesario para su recuperación
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center">
            <img src={cosmeticosIcon} alt="Reservaciones" className="w-16 h-16 object-cover drop-shadow-md duration-200 hover:scale-105"/>
            <h1 className="font-dosis font-bold my-2 text-base md:text-lg">Cosméticos</h1>
            <p className="font-dosis text-center px-3 md:text-lg">
              Venta de productos para la salud y el higiene personal de tu mascota
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center">
            <img src={vestimentasIcon} alt="Reservaciones" className="w-16 h-16 object-cover drop-shadow-md duration-200 hover:scale-105"/>
            <h1 className="font-dosis font-bold my-2 text-base md:text-lg">Vestimentas</h1>
            <p className="font-dosis text-center px-3 md:text-lg">
              Venta de ropa y accesorios para que salgas a lucir entre las personas a tu mascota
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center">
            <img src={tratamientosIcon} alt="Reservaciones" className="w-16 h-16 object-cover drop-shadow-md duration-200 hover:scale-105"/>
            <h1 className="font-dosis font-bold my-2 text-base md:text-lg">Tratamiento</h1>
            <p className="font-dosis text-center px-3 md:text-lg">
              Te brindamos tratamientos para el bienestar de tu mascota según el diagnóstico
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center">
            <img src={consultasIcon} alt="Reservaciones" className="w-16 h-16 object-cover drop-shadow-md duration-200 hover:scale-105"/>
            <h1 className="font-dosis font-bold my-2 text-base md:text-lg">Consultas</h1>
            <p className="font-dosis text-center px-3 md:text-lg">
              Consultario para resolverte todo tipo de dudas que tengas sobre tu mascota
            </p>
          </div>
        </div>
      </div>

      {/* Nuestros productos */}
      <div className="w-full min-h-[250px] flex flex-col items-center py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-dosis font-bold text-center">Nuestros productos</h1>
        <div className="relative w-[90%] mt-6 xl:w-max">
          <div className="w-full flex justify-between items-center">
            <h1 className="font-dosis text-xl">Vestimentas:</h1>
            <Link className="font-dosis py-2 px-8 rounded-2xl bg-overall-600 text-white duration-200 hover:scale-95 hover:bg-overall-800" href="">Ver más</Link>
          </div>
          <div className="w-full flex justify-center flex-wrap gap-y-5 gap-x-3 py-4 xl:gap-x-8">
            {
              productsVestments.map(p => (
                <div key={p.idProducto} className="w-32 md:w-44 lg:w-56 xl:w-64 rounded-md shadow-xl overflow-hidden flex flex-col items-center pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-2 md:pb-3 lg:pb-4 xl:pb-5">
                  <div className="w-[80%] h-24 md:h-36 lg:h-44 xl:h-48 rounded-md overflow-hidden relative">
                    <img src={p.imagenProducto} alt="Vestimenta" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-[80%] overflow-hidden relative">
                    <h1 className="font-dosis font-bold w-full truncate my-1 xl:text-xl" title={p.nombreProducto}>{p.nombreProducto}</h1>
                    <h1 className="font-dosis w-full truncate xl:text-xl">{"S/ "+p.precioProducto}</h1>
                    <Link className="w-full inline-block font-dosis text-white rounded-lg text-center py-1.5 mt-2 bg-orange-600 truncate xl:text-lg duration-200 hover:bg-orange-500 hover:scale-95 cursor-pointer" onClick={() => {setSelectedProduct(p), setActivateSelectProduct(true)}}>Ver producto</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="relative w-[90%] mt-6 xl:w-max">
          <div className="w-full flex justify-between items-center">
            <h1 className="font-dosis text-xl">Cosméticos:</h1>
            <Link className="font-dosis py-2 px-8 rounded-2xl bg-overall-600 text-white duration-200 hover:scale-95 hover:bg-overall-800" href="">Ver más</Link>
          </div>
          <div className="w-full flex justify-center flex-wrap gap-y-5 gap-x-3 py-4 xl:gap-x-8">
            {
              productsCosmetics.map(p => (
                <div key={p.idProducto} className="w-32 md:w-44 lg:w-56 xl:w-64 rounded-md shadow-xl overflow-hidden flex flex-col items-center pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-2 md:pb-3 lg:pb-4 xl:pb-5">
                  <div className="w-[80%] h-24 md:h-36 lg:h-44 xl:h-48 rounded-md overflow-hidden relative">
                    <img src={p.imagenProducto} alt="Vestimenta" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-[80%] overflow-hidden relative">
                    <h1 className="font-dosis font-bold w-full truncate my-1 xl:text-xl" title={p.nombreProducto}>{p.nombreProducto}</h1>
                    <h1 className="font-dosis w-full truncate xl:text-xl">{"S/ "+p.precioProducto}</h1>
                    <Link className="w-full inline-block font-dosis text-white rounded-lg text-center py-1.5 mt-2 bg-orange-600 truncate xl:text-lg duration-200 hover:bg-orange-500 hover:scale-95 cursor-pointer" onClick={() => {setSelectedProduct(p), setActivateSelectProduct(true)}}>Ver producto</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* Nuestro equipo */}
      <div className="w-full min-h-[250px] flex flex-col items-center py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-dosis font-bold text-center">Nuestro equipo</h1>
        <div className="w-11/12 flex justify-center flex-wrap gap-x-3 gap-y-5 items-center my-8">
          <div className="flex flex-col justify-center items-center">
            <div className="w-28 h-28 overflow-hidden rounded-t-lg shadow-lg lg:w-40 lg:h-40">
              <img src={veterinario1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 px-4 bg-sky-500 overflow-hidden rounded-3xl lg:w-56">
              <h1 className="font-dosis w-full truncate py-1.5 text-center text-white lg:py-2.5 lg:text-lg" title="AEA">Dr. Emenejildo Jose Antonio Alfredo</h1>
            </div>
            <div className="w-40 px-4 bg-overall-900 overflow-hidden rounded-b-3xl lg:w-44 shadow-lg">
              <h1 className="font-dosis w-full truncate py-1.5 text-center text-white lg:py-2.5 lg:text-lg" title="AEA">Odontologo</h1>
            </div>
          </div>  
          <div className="flex flex-col justify-center items-center">
            <div className="w-28 h-28 overflow-hidden rounded-t-lg shadow-lg lg:w-40 lg:h-40">
              <img src={veterinaria1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 px-4 bg-sky-500 overflow-hidden rounded-3xl lg:w-56">
              <h1 className="font-dosis w-full truncate py-1.5 text-center text-white lg:py-2.5 lg:text-lg" title="AEA">Dr. Emenejildo Jose Antonio Alfredo</h1>
            </div>
            <div className="w-40 px-4 bg-overall-900 overflow-hidden rounded-b-3xl lg:w-44 shadow-lg">
              <h1 className="font-dosis w-full truncate py-1.5 text-center text-white lg:py-2.5 lg:text-lg" title="AEA">Odontologo</h1>
            </div>
          </div> 
          <div className="flex flex-col justify-center items-center">
            <div className="w-28 h-28 overflow-hidden rounded-t-lg shadow-lg lg:w-40 lg:h-40">
              <img src={veterinaria2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 px-4 bg-sky-500 overflow-hidden rounded-3xl lg:w-56">
              <h1 className="font-dosis w-full truncate py-1.5 text-center text-white lg:py-2.5 lg:text-lg" title="AEA">Dr. Emenejildo Jose Antonio Alfredo</h1>
            </div>
            <div className="w-40 px-4 bg-overall-900 overflow-hidden rounded-b-3xl lg:w-44 shadow-lg">
              <h1 className="font-dosis w-full truncate py-1.5 text-center text-white lg:py-2.5 lg:text-lg" title="AEA">Odontologo</h1>
            </div>
          </div>  
        </div>
        <a href="" className="inline-block mt-5 font-dosis py-2 px-8 rounded-3xl text-lg duration-200 hover:bg-overall-900 hover:text-white" >Ver mas</a>
      </div>
      <div className="w-11/12 mx-auto pt-8 pb-14 flex justify-center flex-col items-center lg:flex-row">
        <div className="w-full lg:w-2/6 flex flex-col items-center lg:items-start">
          <h1 className="w-full text-2xl sm:text-3xl md:text-4xl font-dosis font-bold text-center lg:text-left">Contáctanos</h1>
          <div className="h-1 w-16 bg-orange-600 my-3"></div>
          <p className="font-dosis text-lg text-center px-3 lg:text-left lg:px-0 lg:pr-5">Puedes escribirnos a nuestro Whatsapp con alguna inquietud que tengas o para hacernos llegar tus sugerencias.</p>
          <a href="https://wa.me/981558109" className="inline-block py-2 px-4 bg-orange-600 my-3 text-white rounded-3xl text-center duration-200 hover:bg-orange-500 hover:scale-95" target="_blank">Contactanos a nuestro Whatsapp</a>
        </div>
        <div className="w-11/12 h-80 lg:w-7/12 relative z-0 overflow-hidden rounded-xl mt-5 lg:h-96">
          <Map/>
        </div>
      </div>
      <SelectedProduct/>
      <Footer/>
    </>
  );
};

export default Menu;
