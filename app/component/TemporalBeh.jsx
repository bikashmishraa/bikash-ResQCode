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
    <div className='min-h-screen bg-white rounded-lg p-5'>
        <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-semibold flex items-center justify-center text-green-500 mt-10'>Temporal Behaviour of Disaster</h1>
              <div className='bg-cover flex flex-wrap flex-col grid grid-cols-1 items-center justify-center mt-10 w-full border'>
                    {data.map((item,id) =>{
                      return (
                      <div className='p-5 w-full flex items-center justify-center'>
                      <Image key={item.id} src={item.image} alt={item.alt} width={1000} height={1000} className='w-[1000px] border py-2 pb-5'/>
                      </div>
                      )
                    })}
              </div>
        </div>
    </div>
  )
}

export default TemporalBeh