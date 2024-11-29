import React from 'react'
import Image from "next/image";

const Dremedy = () => {
    const data = [

        {
          id: 1,
          image: "/dr1.png",
          alt: ".",
          desc:''
        },
        {
          id: 2,
          image: "/dr2.png",
          alt: ".",
          desc:''
        },
        {
          id: 3,
          image: "/dr3.png",
          alt: ".",
          desc:''
        },
          
    ]
    const data2 = [

        {
          id: 1,
          image: "/dr1.png",
          alt: ".",
          desc:''
        },
        {
          id: 2,
          image: "/dr2.png",
          alt: ".",
          desc:''
        },
        {
          id: 3,
          image: "/dr3.png",
          alt: ".",
          desc:''
        },

    ]
    const data3 = [

        {
          id: 1,
          image: "/dr1.png",
          alt: ".",
          desc:''
        },
        {
          id: 2,
          image: "/dr2.png",
          alt: ".",
          desc:''
        },
        {
          id: 3,
          image: "/dr3.png",
          alt: ".",
          desc:''
        },

    ]


    return (
        <div className='min-h-screen w-full flex justify-center items-center  p-5 bg-[#ffff] border border-red-500'>
            <div className='w-full bg-[#ffff] flex  items-center justify-center flex-col '>
                <h1 className='text-5xl font-semibold flex items-center justify-center text-green-500 mt-10 mb-10'>Remedies</h1>
                <br/>
                <div className='w-full'>
                <div className='border flex'>
                <h1 className='text-4xl text-gray-700 flex justify-center items-center transform -rotate-90'>Earthquake</h1>
                <div className='flex flex-col mt-20 '>
                <div  className="carousel carousel-center bg-[#ffff] rounded-lg w-[80%] space-x-2 p-4 mb-8 ml-6 ">
                    {data.map((item,id) =>{
                        return (
                            <div className="flex item-center justify-center border border-gray-500 carousel-item rounded-lg"> 
                                <Image key={id} src={item.image} alt={item.desc} width={500} height={500} className='rounded-lg'/>
                          </div>
                        )
                    })}
                </div>
                </div>
                <div className=' border-green-500 w-full h-full my-12 flex item-center justify-center mt-[6%] mr-8'>
                    <ul role="list" class="marker:text-grey-600 list-disc pl-5 space-y-3 text-slate-400">
                        <h2 className='text-2xl text-gray-700' ><li>Should develop sophisticated monitoring technologies for early warning systems.</li><br/><li>Train local communities in disaster response and resilience for proper aid and support during the disaster.</li><br/><li>Implement engineering solutions like retaining walls, terracing, and vegetation management.</li><br/><li>Develop and implement robust legal frameworks.</li></h2></ul>
                    </div>
                    </div>
                <div className='w-full'>
                    <div className='border flex'>
                <h1 className='text-4xl text-gray-700 flex justify-center items-center transform -rotate-90 '>Flood</h1>
                    <div className='flex flex-col mt-20'>
                <div  className="carousel carousel-center bg-[#ffff] rounded-lg w-[80%] space-x-2 p-4 mb-8 ml-6">
                    {data2.map((item,id) =>{
                        return (
                            <div className="border border-gray-500 flex item-center justify-center carousel-item rounded-lg"> 
                                <Image key={id} src={item.image} alt={item.desc} width={500} height={500} className='rounded-lg'/>
                          </div>
                        )
                    })}
                </div>
                </div>
                <div className='border-green-500 w-full h-full my-12 flex item-center justify-center mt-[6%] mr-8'>
                    <ul role="list" class="marker:text-gray-600 list-disc pl-5 space-y-3 text-slate-400">
                        <h2 className='text-2xl text-gray-700'><li> Should construct embankments, drainage systems, and flood-resistant infrastructure.</li><br/><li>Should have regular assessment and potential controlled drainage of unstable glacial lakes.</li><br/><li> Regular training programs on disaster preparedness.</li><br/><li>Develop and implement robust legal frameworks.</li></h2>
                    </ul>
                    </div>
                    </div>
                <div className='w-full'>
                    <div className='border flex'>
                <h1 className='text-4xl  mb-3 text-gray-700 flex justify-center items-center transform -rotate-90 '>Landslide</h1>
                    <div className='flex flex-col mt-20'>
                <div  className="carousel carousel-center bg-[#ffff] rounded-lg w-[80%] space-x-2 p-4 mb-8 ml-6">
                    {data3.map((item,id) =>{
                        return (
                            <div className="flex item-center justify-center border border-gray-500 carousel-item rounded-lg"> 
                                <Image key={id} src={item.image} alt={item.desc} width={500} height={500} className='rounded-lg'/>
                          </div>
                        )
                    })}
                </div>
                </div>
                <div className=' border-green-500 w-full h-full my-12 flex item-center justify-center mt-[6%] mr-8'>
                    <ul role="list" class="marker:text-grey-600 list-disc pl-5 space-y-3 text-slate-400">
                        <p className='text-2xl text-gray-700'><li>Protect and restore natural ecosystems.</li><br/><li>Apply Sustainable Agricultural Practices so as to reduce soil erosion and improve land resilience.</li><br/><li>Implement engineering solutions like retaining walls, terracing, and vegetation management.</li><br/><li> Reduce community vulnerability through alternative livelihood strategies.</li></p>
                    </ul>
                    </div>
            </div>
            </div>
         </div>
         </div>
         </div>
         </div>

      )
}

export default Dremedy


// import React from 'react'
// import Image from "next/image";
// const Composition = () => {

//   const data = [
//     {
//       id: 1,
//       image: "/c1.jpg",
//       alt: "deaths",
//       desc:'Deaths'
//     },
//     {
//       id: 2,
//       image: "/c2.png",
//       alt: "datacards",
//       desc:'Datacards'
//     },
//     {
//       id: 3,
//       image: "/c3.jpg",
//       alt: "directly and indirectly affected",
//       desc:'Directly + indirectly affected'
//     },
//     {
//       id: 4,
//       image: "/c4.jpg",
//       alt: "houses destroyed and damaged",
//       desc:'Houses destroyed + damaged'
//     },
//   ]

//   return (
//     <div className='min-h-screen  p-5 bg-[#ffff]'>
//         <div className='w-full bg-[#ffff] flex flex-col items-center justify-center rounded-lg '>
//       <h1 className='text-4xl font-semibold flex items-center justify-center text-green-500 mt-10'>Composition of Disaster</h1>
//       <br/>
//           <div className='bg-cover flex flex-wrap flex-col grid grid-cols-2 rounded-lg  gap-2 '>
//             {/* <div  className='bg-cover w-full  flex flex-wrap flex-col grid grid-cols-2'> */}
//                     {data.map((item,id) =>{
//                       return (
//                        <div key={item.id} className='p-5 w-[550px] rounded-lg border border-red-500 '>
//                          <h1 className='text-2xl font-semibold flex items-center justify-center text-green-500'>{item.desc}</h1>
//                          <Image key={item.id} src={item.image} alt={item.alt} width={500} height={500} className='w-full h-full rounded-lg p-9'/>
//                        </div>
//                       )
//                     })}
//                     {/* </div> */}
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Composition


// return (
//     <div className='min-h-screen  p-5 bg-[#ffff]'>
//         <div className='w-full bg-[#ffff] flex flex-col items-center justify-center rounded-lg '>
//       <h1 className='text-4xl font-semibold flex items-center justify-center text-green-500 mt-10'>Composition of Disaster</h1>
//       <br/>
//           <div className='bg-cover flex flex-wrap flex-col grid grid-cols-2 rounded-lg  gap-2 '>
//             {/* <div  className='bg-cover w-full  flex flex-wrap flex-col grid grid-cols-2'> */}
//                     {data.map((item,id) =>{
//                       return (
//                        <div key={item.id} className='p-5 w-[550px] rounded-lg border border-red-500 '>
//                          <h1 className='text-2xl font-semibold flex items-center justify-center text-green-500'>{item.desc}</h1>
//                          <Image key={item.id} src={item.image} alt={item.alt} width={500} height={500} className='w-full h-full rounded-lg p-9'/>
//                        </div>
//                       )
//                     })}
//                     {/* </div> */}
//           </div>
//         </div>
//     </div>
//   )