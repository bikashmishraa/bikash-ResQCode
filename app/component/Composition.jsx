import React from 'react'
import Image from "next/image";
const Composition = () => {

  const data = [
    {
      id: 1,
      image: "/c1.jpg",
      alt: "deaths"
    },
    {
      id: 2,
      image: "/c2.png",
      alt: "datacards"
    },
    {
      id: 3,
      image: "/c3.jpg",
      alt: "directly and indirectly affected"
    },
    {
      id: 4,
      image: "/c4.jpg",
      alt: "houses destroyed and damaged",}
  ]

  return (
    <div className='min-h-screen bg-[#1584ea] p-5'>
        <div className='w-full border'>
              <div className='bg-cover flex flex-wrap flex-col grid grid-cols-2'>
                    {data.map((item,id) =>{
                      return (
                       <div className='p-5 w-[500px]'>
                         <Image key={item.id} src={item.image} alt={item.alt} width={100} height={100} className='w-full'/>
                       </div>
                      )
                    })}
              </div>
        </div>
    </div>
  )
}

export default Composition