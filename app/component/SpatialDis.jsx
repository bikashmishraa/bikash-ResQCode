import React from 'react';
import Image from "next/image";

const SpatialDis = () => {
  const data = [
    {
      id: 1,
      image: "/sp11.png",
      alt: "deaths",
      subdataIds: [1], // Link to corresponding subdata
    },
    {
      id: 2,
      image: "/sp22.png",
      alt: "datacards",
      subdataIds: [2], // Link to corresponding subdata
    },
    {
      id: 3,
      image: "/sp33.png",
      alt: "directly and indirectly affected",
      subdataIds: [3], // Link to corresponding subdata
    },
    {
      id: 4,
      image: "/sp44.png",
      alt: "houses destroyed and damaged",
      subdataIds: [4], // Link to corresponding subdata
    },
  ];

  const subdata = [
    {
      id: 1,
      image: "/sp111.jpg",
      alt: "Variable death",
    },
    {
      id: 2,
      image: "/sp222.jpg",
      alt: "variable datacards",
    },
    {
      id: 3,
      image: "/sp333.png",
      alt: "variable houses Destroyed + Houses Damaged",
    },
    {
      id: 4,
      image: "/sp444.png",
      alt: "Indirectly Affected + Directly affected",
    },
  ];

  return (
    <div className="min-h-screen bg-white rounded-lg p-5">
      <div className="w-full border flex items-center justify-center p-5">
        <div className="bg-cover flex flex-wrap flex-col grid grid-cols-1 items-center justify-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-5 w-[100%] grid grid-cols-2 bg-[#ffff] border border-green-400 mt-10"
            >
              {/* Data Item Image */}
              <div className='flex items-center justify-center '>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={900}
                  className="w-[700px]"
                />
              </div>

              {/* Subdata Images linked to this Data Item */}
              <div className=" ml-20 ">
                {subdata
                  .filter((subItem) => item.subdataIds.includes(subItem.id)) // Filter corresponding subdata
                  .map((subItem) => (
                    <div
                      key={subItem.id}
                      className="p-5 w-[30%] bg-[#ffff] border border-green-400 mt-10"
                    >
                      <Image
                        src={subItem.image}
                        alt={subItem.alt}
                        width={800}
                        height={800}
                        className="w-[700px]"
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpatialDis;
