import React from 'react'
import Image from "next/image";
const Composition = () => {

  const data = [
    {
      id: 1,
      image: "/c1.jpg",
      alt: "deaths",
      desc:'Deaths'
    },
    {
      id: 2,
      image: "/c2.png",
      alt: "datacards",
      desc:'Datacards'
    },
    {
      id: 3,
      image: "/c3.jpg",
      alt: "directly and indirectly affected",
      desc:'Directly + indirectly affected'
    },
    {
      id: 4,
      image: "/c4.jpg",
      alt: "houses destroyed and damaged",
      desc:'Houses destroyed + damaged'
    },
  ]

  return (
    <div className='min-h-screen  p-5 bg-[#ffff]'>
        <div className='w-full bg-[#ffff] flex flex-col items-center justify-center rounded-lg '>
      <h1 className='text-4xl font-semibold flex items-center justify-center text-green-500 mt-10'>Composition of Disaster</h1>
      <br/>
          <div className='bg-cover flex flex-wrap flex-col grid grid-cols-2 rounded-lg  gap-2 '>
            {/* <div  className='bg-cover w-full  flex flex-wrap flex-col grid grid-cols-2'> */}
                    {data.map((item,id) =>{
                      return (
                       <div key={item.id} className='p-5 w-[550px] rounded-lg border border-red-500 '>
                         <h1 className='text-2xl font-semibold flex items-center justify-center text-green-500'>{item.desc}</h1>
                         <Image key={item.id} src={item.image} alt={item.alt} width={500} height={500} className='w-full h-full rounded-lg p-9'/>
                       </div>
                      )
                    })}
                    {/* </div> */}
          </div>
        </div>
    </div>
  )
}

export default Composition