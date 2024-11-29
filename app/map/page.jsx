'use client';

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS globally
import Head from "next/head";

const NepalMap = () => {
  const mapRef = useRef(null);

  // Array of data for multiple markers
  const data = [
    {
        id: 1,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Bajura\nMagnitude: 4.0",
        coordinates: [
            29.56,
            81.65
        ]
    },
    {
        id: 2,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dolakha\nMagnitude: 4.0",
        coordinates: [
            27.68,
            86.11
        ]
    },
    {
        id: 3,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: gorkha\nMagnitude: 4.0",
        coordinates: [
            28.16,
            84.89
        ]
    },
    {
        id: 4,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dailekh\nMagnitude: 4.0",
        coordinates: [
            28.99,
            81.77
        ]
    },
    {
        id: 5,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dharchula\nMagnitude: 4.0",
        coordinates: [
            29.90,
            80.54
        ]
    },
    {
        id: 6,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Taplejung\nMagnitude: 4.0",
        coordinates: [
            27.71,
            88.13
        ]
    },
    {
        id: 7,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dolakha\nMagnitude: 4.0",
        coordinates: [
            27.79,
            86.33
        ]
    },
    {
        id: 8,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dolakha\nMagnitude: 4.0",
        coordinates: [
            26.7,
            86.33
        ]
    },
    {
        id: 9,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Tibet\nMagnitude: 4.0",
        coordinates: [
            25.07,
            85.96
        ]
    },
    {
        id: 10,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dolakha\nMagnitude: 4.0",
        coordinates: [
            27.10,
            86.01
        ]
    },
    {
        id: 11,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Darchula\nMagnitude: 4.0",
        coordinates: [
            28.82,
            80.76
        ]
    },
    {
        id: 12,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Sindhupalchowk\nMagnitude: 4.0",
        coordinates: [
            26.96,
            85.68
        ]
    },
    {
        id: 13,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dolakha\nMagnitude: 5.0",
        coordinates: [
            25.63,
            86.19
        ]
    },
    {
        id: 14,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Bajhang\nMagnitude: 4.0",
        coordinates: [
            26.78,
            81.28
        ]
    },
    {
        id: 15,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Achham\nMagnitude: 4.0",
        coordinates: [
            29.08,
            81.45
        ]
    },
    {
        id: 16,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Myagdi\nMagnitude: 4.0",
        coordinates: [
            28.5,
            83.32
        ]
    },
    {
        id: 17,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Rukum\nMagnitude: 4.0",
        coordinates: [
            28.83,
            82.55
        ]
    },
    {
        id: 18,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dolakha\nMagnitude: 4.0",
        coordinates: [
            27.62,
            86.25
        ]
    },
    {
        id: 19,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Bajura\nMagnitude: 4.0",
        coordinates: [
            29.68,
            81.65
        ]
    },
    {
        id: 20,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dolakha\nMagnitude: 4.0",
        coordinates: [
            27.68,
            86.11
        ]
    },
    {
        id: 21,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: gorkha\nMagnitude: 4.0",
        coordinates: [
            28.17,
            84.89
        ]
    },
    {
        id: 22,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dailekh\nMagnitude: 4.0",
        coordinates: [
            28.9,
            81.77
        ]
    },
    {
        id: 23,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dharchula\nMagnitude: 4.0",
        coordinates: [
            29.98,
            80.54
        ]
    },
    {
        id: 24,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Taplejung\nMagnitude: 4.0",
        coordinates: [
            27.74,
            88.13
        ]
    },
    {
        id: 25,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dolakha\nMagnitude: 4.0",
        coordinates: [
            27.7,
            86.33
        ]
    },
    {
        id: 26,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dolakha\nMagnitude: 4.0",
        coordinates: [
            27.7,
            86.33
        ]
    },
    {
        id: 27,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Tibet\nMagnitude: 4.0",
        coordinates: [
            28.07,
            85.96
        ]
    },
    {
        id: 28,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Dolakha\nMagnitude: 4.0",
        coordinates: [
            27.72,
            86.01
        ]
    },
    {
        id: 29,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Darchula\nMagnitude: 4.0",
        coordinates: [
            29.82,
            80.76
        ]
    },
    {
        id: 30,
        name: "Did You feel it?",
        amenity: "Disaster Location",
        popupContent: "Location: Sindhupalchowk\nMagnitude: 4.0",
        coordinates: [
            27.96,
            85.68
        ]
    },
    
];

  useEffect(() => {
    const initMap = async () => {
      try {
        const L = await import('leaflet');
        const LGeocoder = await import('leaflet-control-geocoder');

        

        // Custom marker icon
        const customIcon = L.icon({
          iconUrl: '/marker.svg',  // Replace this with the path to your custom image
          iconSize: [32, 32], // Size of the icon
          iconAnchor: [16, 32], // Anchor point (typically the bottom center of the marker)
          popupAnchor: [0, -32], // Adjust this to position the popup properly
        });

        if (!mapRef.current || mapRef.current.classList.contains('leaflet-container')) {
          console.warn('Map container  not available or already initialized.');
          return;
        }

        // Initialize map centered on Nepal
        const map = L.map(mapRef.current).setView([28.1094, 84.0917], 7);

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        // Add markers for each item in the array
        data.forEach((location) => {
          // Create marker for each location in the array
          L.marker(location.coordinates, { icon: customIcon })
            .addTo(map)
            .bindPopup(`<b>${location.name}</b><br>${location.popupContent} ${location.id}`);
            // console.log(location.coordinates,location.id);
        });
        // L.Control.geocoder().addTo(map);

        var geocoder = L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) {
              var bbox = e.geocode.bbox;
              var poly = L.polygon([
                bbox.getSouthEast(),
                bbox.getNorthEast(),
                bbox.getNorthWest(),
                bbox.getSouthWest()
              ]).addTo(map);
              map.fitBounds(poly.getBounds());
            })
            .addTo(map);

            if(!navigator.geolocation){
              alert("Geolocation is not supported by this browser.");
            }
            else{
                navigator.geolocation.getCurrentPosition(getposition);
            }

            function getposition(position){
                    console.log(position)
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    var accuracy = position.coords.accuracy;
                    console.log(latitude,longitude,accuracy);
            }

        // LGeocoder.nominatim().addTo(map);

      } catch (error) {
        console.error('Error initializing the map:', error);
      }
    };

    initMap();
  }, []);

  return (

    <div className="flex">
         <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css"
        />
        <script
          src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"
          defer
        ></script>
      </Head>
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '100vh',
          border: '2px solid #333',
        }}
      />
      {/* <div className="searchbox">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div> */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(NepalMap), { ssr: false });
