import React from 'react'
import Image from "next/image";
const SpatialDis = () => {

  const data = [
    {
      id: 1,
      image: "/sp11.png",
      alt: "deaths"
    },
    {
      id: 2,
      image: "/sp22.png",
      alt: "datacards"
    },
    {
      id: 3,
      image: "/sp33.png",
      alt: "directly and indirectly affected"
    },
    {
      id: 4,
      image: "/sp44.png",
      alt: "houses destroyed and damaged",}
  ]

  return (
    <div className='min-h-screen bg-[#1584ea] p-5'>
        <div className='w-full border flex items-center justify-center'>
              <div className='bg-cover flex flex-wrap flex-col grid grid-cols-1 items-center justify-center'>
                    {data.map((item,id) =>{
                      return(
                        <div className='p-5 w-[550px] bg-[#ffff]'>
                        <Image key={item.id} src={item.image} alt={item.alt} width={800} height={800} className='w-[700px]'/>
                        </div>
                      )
                    })}
              </div>
        </div>
    </div>
  )
}

export default SpatialDis