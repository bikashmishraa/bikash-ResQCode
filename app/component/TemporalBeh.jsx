import React from 'react'
import Image from "next/image";
const Composition = () => {

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
        <div className='w-full border '>
              <div className='bg-cover'>
                    {data.map((item,id) =>{
                      return (<Image key={item.id} src={item.image} alt={item.alt} width={100} height={100}/>)
                    })}
              </div>
        </div>
    </div>
  )
}

export default Composition