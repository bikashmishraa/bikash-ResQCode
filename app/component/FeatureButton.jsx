// export default function FeatureButton() {
//     return (
//     <div className="w-full flex justify-around">
        
//         <button className="bg-[#1584ea] text-white py-2 px-4 rounded" onClick={() => {alert('Your location has been sent to the concerned authorities')}}>HEmergency</button>
//         <button className="bg-[#1584ea] text-white py-2 px-4 rounded">Help Me</button>
//         <button className="bg-[#1584ea] text-white py-2 px-4 rounded">Help Me</button>
//         <button className="bg-[#1584ea] text-white py-2 px-4 rounded">Help Me</button>
//     </div>
// );
// }
'use client'
import { useState } from "react";

const disasterData = [
  {
    disaster: "Natural Disaster",
    subDisasters: [
      {
        name: "Earthquake",
        actions: [
          "Drop, Cover, and Hold On.",
          "Move to an open space if outdoors.",
          "Stay away from windows and heavy objects."
        ],
        authorities: [
          { name: "National Emergency Operations Center", phone: "+977-1234567890" },
          { name: "Local Fire Department", phone: "+977-9876543210" }
        ]
      },
      {
        name: "Flood",
        actions: [
          "Move to higher ground immediately.",
          "Avoid walking or driving through floodwaters.",
          "Stay updated via official announcements."
        ],
        authorities: [
          { name: "Flood Control Division", phone: "+977-4561237890" },
          { name: "Local Disaster Response Teams", phone: "+977-7891234560" }
        ]
      },
      {
        name: "Landslide",
        actions: [
          "Evacuate the area immediately.",
          "Avoid river valleys and low-lying areas.",
          "Report blocked roads to the authorities."
        ],
        authorities: [
          { name: "Landslide Monitoring Division", phone: "+977-3216549870" },
          { name: "Rescue Coordination Center", phone: "+977-6549873210" }
        ]
      }
    ]
  },
  {
    disaster: "Man-Made Disaster",
    subDisasters: [
      {
        name: "Fire",
        actions: [
          "Call the fire department immediately.",
          "Evacuate the building and stay low if there’s smoke.",
          "Do not use elevators."
        ],
        authorities: [
          { name: "Local Fire Department", phone: "+977-1231231234" },
          { name: "Emergency Response Team", phone: "+977-4564564567" }
        ]
      },
      {
        name: "Industrial Accident",
        actions: [
          "Evacuate the area immediately.",
          "Alert emergency services and follow their instructions.",
          "Avoid inhaling hazardous chemicals."
        ],
        authorities: [
          { name: "Industrial Safety Authority", phone: "+977-7891234560" },
          { name: "Emergency Response Team", phone: "+977-4567891234" }
        ]
      }
    ]
  }
];

export default function DisasterResponse() {
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const [selectedSubDisaster, setSelectedSubDisaster] = useState(null);

  const handleClickDisaster = (disaster) => {
    setSelectedDisaster(disaster);
    setSelectedSubDisaster(null); // Reset subdisaster
  };

  const handleClickSubDisaster = (subDisaster) => {
    setSelectedSubDisaster(subDisaster);
  };

  const handleClose = () => {
    setSelectedDisaster(null);
    setSelectedSubDisaster(null);
  };

  const chatBot = () => {
    console.log('chatbot')
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2 text-white text-center text-black">Which button is suitable for you?</h1>
      
      {/* Disaster Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {disasterData.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClickDisaster(item)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {item.disaster}
          </button>
        ))}
      </div>

      {/* Sub-Disaster Buttons */}
      {selectedDisaster && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {selectedDisaster.subDisasters.map((subItem, index) => (
            
            <button
              key={index}
              onClick={() => handleClickSubDisaster(subItem)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              {subItem.name}
            </button>
            
          ))}
           <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-red-500 font-bold text-lg"
          >
            ✖
          </button>
        </div>
      )}

      {/* Disaster Details */}
      {selectedSubDisaster && (
        <div className="mt-6 border p-4 rounded bg-gray-100 relative bg-gradient-to-r from-blue-500 to-green-500">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-red-500 font-bold text-lg"
          >
            ✖
          </button>

          <h2 className="text-xl font-semibold mb-2 text-black">{selectedSubDisaster.name}</h2>
          
          <h3 className="font-semibold mt-2 text-black">Actions:</h3>
          <ul className="list-disc ml-5 text-black">
            {selectedSubDisaster.actions.map((action, i) => (
              <li key={i}>{action}</li>
            ))}
          </ul>

          <h3 className="font-semibold mt-2 text-black">Authorities:</h3>
          <ul className="list-disc ml-5 text-black">
            {selectedSubDisaster.authorities.map((authority, i) => (
              <li key={i}>
                {authority.name} - 
                <a 
                  href={`tel:${authority.phone}`} 
                  className="text-white underline ml-1"
                >
                  {authority.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <a href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/29/16/20241129164636-S7W1QJV5.json">
      <button onClick={chatBot}>
      Chatbot
      </button>
      </a>
      
    </div>
    
  );
}
