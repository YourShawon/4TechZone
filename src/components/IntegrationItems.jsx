import React from 'react'
import Image from "next/image";
import ImageOne from "../../public/integration-image/zapier.png"


const IntegrationItems = ({Intragrationparts}) => {
  return (
    <div className='cursor-pointer items-design'>
        <div className='px-[20px] py-[25px]'>
            <Image src={Intragrationparts.image} width={50} height={50} className='m-auto' alt="Image"></Image>
            <h6 className='text-[17px] leading-[34px] mt-[18px] font-bold text-center'>{Intragrationparts.name}</h6>
        </div>
    </div>
  )
}

export default IntegrationItems