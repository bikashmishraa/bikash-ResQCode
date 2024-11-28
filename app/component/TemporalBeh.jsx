import React from 'react'
import Image from "next/image";
const TemporalBeh = () => {

  const data = [
    {
      id: 1,
      image: "/t5.jpg",
      alt: "deaths"
    },
    {
      id: 2,
      image: "/t6.jpg",
      alt: "datacards"
    },
    {
      id: 3,
      image: "/t7.jpg",
      alt: "directly and indirectly affected"
    },
    {
      id: 4,
      image: "/t8.jpg",
      alt: "houses destroyed and damaged",}
  ]

  return (
    <div className='min-h-screen bg-[#1584ea] p-5'>
        <div className='w-full border flex items-center justify-center'>
              <div className='bg-cover flex flex-wrap flex-col grid grid-cols-1 items-center justify-center'>
                    {data.map((item,id) =>{
                      return (
                      <div className='p-5 w-[550px]'>
                      <Image key={item.id} src={item.image} alt={item.alt} width={100} height={100} className='w-[700px]'/>
                      </div>
                      )
                    })}
              </div>
        </div>
    </div>
  )
}

export default TemporalBeh