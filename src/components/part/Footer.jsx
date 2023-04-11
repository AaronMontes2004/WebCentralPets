import React from 'react'
import whatsappIcon from "../../assets/icons/networks/whatsapp.png"
import instagramIcon from "../../assets/icons/networks/instagram.png"
import facebookIcon from "../../assets/icons/networks/facebook.png"
import locationIcon from "../../assets/icons/networks/location.png"
import telephoneIcon from "../../assets/icons/networks/telephone.png"
import mailIcon from "../../assets/icons/networks/mail.png"

const Footer = () => {
  return (
    <div className='w-full bg-overall-900 p-[0.1px] flex flex-col items-center gap-3'>
        <div className='w-11/12 flex justify-center gap-5 mt-20'>
            <a href="https://wa.me/981558109" target='_blank' className='w-10 h-10 flex justify-center items-center rounded-full bg-white'>
                <img src={whatsappIcon} alt="" className='w-6 h-6' />
            </a>
            <a href="https://www.instagram.com/veterinariacentralpets/?fbclid=IwAR0tZE3-1CKKE_SsSMVeB7gnhMtXrzKZyUY2QhBMsiiBkrbfaCw-JVz6llQ" target='_blank' className='w-10 h-10 flex justify-center items-center rounded-full bg-white'>
                <img src={instagramIcon} alt="" className='w-6 h-6' />
            </a>
            <a href="https://www.facebook.com/veterinariacentralpets/" target='_blank' className='w-10 h-10 flex justify-center items-center rounded-full bg-white'>
                <img src={facebookIcon} alt="" className='w-6 h-6' />
            </a>
        </div>
        <div className='w-11/12 flex flex-col justify-center gap-1 md:flex-row md:gap-5'>
            <a href="https://www.google.com/maps/place/Veterinaria+Central+Pets/@-12.0938212,-77.0064807,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c7cfdda7ab83:0x7331701774cdcbd4!8m2!3d-12.0938212!4d-77.004292!16s%2Fg%2F1hc2_x2lr" target='_blank' className='w-auto h-10 text-white gap-1 flex justify-center items-center rounded-full font-dosis text-lg'>
                <img src={locationIcon} alt="" className='w-6 h-6' />
                Av. San Borja Nte. 499
            </a>
            <a href="https://wa.me/981558109" target='_blank' className='w-auto h-10 text-white gap-1 flex justify-center items-center rounded-full font-dosis text-lg'>
                <img src={telephoneIcon} alt="" className='w-6 h-6' />
                981-558-109
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmllksKMqLRZbPhBHhwNJnRGQFwhrVjfjTVJrpnffLqmmJLlcgjVXRtCQxBgGzQbZxnDGX" target='_blank' className='w-auto h-10 text-white gap-1 flex justify-center items-center rounded-full font-dosis text-lg'>
                <img src={mailIcon} alt="" className='w-6 h-6' />
                veterinaria@centralpets.pe
            </a>
        </div>
        <div className='w-11/12 flex justify-center mb-20'>
            <p className='font-dosis text-white text-lg'><a href='https://wa.me/960116321' target='_blank'>Copyright</a> © 2023</p>
        </div>
    </div>
  )
}

export default Footer