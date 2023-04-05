import Cookies from "js-cookie";
import React, { useState } from "react";
import vetWithPetImage from "../../assets/img/vetWithPet.jpg"
import cats from "../../assets/img/cats.jpg"
import petClothes from "../../assets/img/petClothes.jpg"
import reservacionIcon from "../../assets/img/QuienesSomos/reservacion.png"
import hospitalizacionIcon from "../../assets/img/QuienesSomos/hospitalizacion.png"
import cosmeticosIcon from "../../assets/img/QuienesSomos/cosmeticos.png"
import vestimentasIcon from "../../assets/img/QuienesSomos/vestimentas.png"
import tratamientosIcon from "../../assets/img/QuienesSomos/tratamiento.png"
import consultasIcon from "../../assets/img/QuienesSomos/consulta.png"

const Menu = () => {
  const [user, setUser] = useState({
    nameUser: Cookies.get("name") || "",
    lastnameUser: Cookies.get("lastname") || "",
    email: Cookies.get("email") || "",
    user: Cookies.get("user") || "",
  });
  return (
    <>
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

    </>
  );
};

export default Menu;
