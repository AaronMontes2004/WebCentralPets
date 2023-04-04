import React, { useEffect, useState } from 'react'
import ok from "../../assets/img/check.png"
import failed from "../../assets/img/warning.png"

const MessageModal = ({on = false, status = "OK", message = "no message"}) => {

  const [container, setContainer] = useState("absolute top-0 w-full h-screen flex justify-center items-center pointer-events-none")
  const [card, setCard] = useState("w-72 bg-white border-[1px] border-gray-500 flex flex-col relative gap-2 duration-300 scale-0")

  useEffect(() => {
    if (on){
      setContainer("absolute top-0 w-full h-screen flex justify-center items-center pointer-events-auto")
      setCard("w-72 bg-white border-[1px] border-gray-500 flex flex-col relative gap-2 duration-300 scale-100")
    } else {
      setContainer("absolute top-0 w-full h-screen flex justify-center items-center pointer-events-none")
      setCard("w-72 bg-white border-[1px] border-gray-500 flex flex-col relative gap-2 duration-300 scale-0")
    }
  }, [on])

  return (
    <div className={container}>
        <div className={`${card}`}>
            <div className='flex justify-center items-end pt-4 w-full'>
    	        <img src={status.toUpperCase() === "OK" ? ok : failed} className="w-20 h-20 animate-pulse" alt="Image" />
            </div>
            <div className='flex justify-center items-start pb-4'>
                <p className='text-center font-sans w-56 break-words'>{message}</p>
            </div>
        </div> 
    </div>
  )
}

export default MessageModal