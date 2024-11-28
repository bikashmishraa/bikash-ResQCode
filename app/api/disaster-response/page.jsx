'use client'
import React, { useState, useEffect } from 'react';

export default function DisasterResponse() {
  const [magnitude, setMagnitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEarthquakeData = async () => {
      try {
        const Apidata = await fetch(
          'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2024-11-25T00:00:00&minmagnitude=6'
        );
        const data = await Apidata.json();
        const magnitudeValue = data['features']?.[0]?.['properties']?.['mag'];
        setMagnitude(magnitudeValue);
      } catch (error) {
        setError('Unable to fetch earthquake data');
      }
    };

    // Set interval to fetch data every second
    const interval = setInterval(() => {
      fetchEarthquakeData();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Disaster Response</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {magnitude !== null ? (
        <p>Magnitude: {magnitude}</p>
      ) : (
        <p>Loading earthquake data...</p>
      )}

      
    {(magnitude > 3.0) ? (
      <p>Run from home</p>
    ) : (
      <p>Do not run from home</p>
    )}

    </div>
  );
}
