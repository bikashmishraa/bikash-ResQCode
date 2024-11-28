import React from 'react'
import Image from "next/image";
const Composition = () => {
  return (
    <div className='min-h-screen bg-[#1584ea] p-5'>
        <div className='w-full border '>
              <div className='bg-cover'>
                    <Image src="/bg_main.png"  alt="bg_main" width={100} height={100}/>
                    <Image src="/bg_main.png"  alt="bg_main" width={100} height={100}/>
                    <Image src="/bg_main.png"  alt="bg_main" width={100} height={100}/>
                    <Image src="/bg_main.png"  alt="bg_main" width={100} height={100}/>
              </div>
        </div>
    </div>
  )
}

export default Composition