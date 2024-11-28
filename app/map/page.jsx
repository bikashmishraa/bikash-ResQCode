'use client';

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'


const NepalMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const L = await import('leaflet');
        await import('leaflet/dist/leaflet.css');

        console.log('Leaflet imported successfully');
        console.log('Map container:', mapRef.current);

        // Check if map container exists and is not already initialized
        if (!mapRef.current) {
          console.error('Map container is null');
          return;
        }

        // Check if map is already initialized
        if (mapRef.current.classList.contains('leaflet-container')) {
          console.warn('Map is already initialized');
          return;
        }

        // Create map centered on Nepal
        const map = L.map(mapRef.current).setView([28.1094, 84.0917], 7);

        console.log('Map created successfully');

        // Add base map layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

      } catch (error) {
        console.error('Map initialization error:', error);
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        });
      }
    };

    initMap();
  }, []);

  return (
    <div className="flex">
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: '100vh', 
        border: '2px solid #333' 
      }} 
    />
    <div className="searchbox ">
      <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search"  /> 
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
    </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(NepalMap), {
  ssr: false
});