'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FloodPredictionForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    total_slope: '',
    total_elevation: '',
    annual_rainfall_mm: '',
    flood_month: '',
    river_basin_width_km: ''
  });

  // State to store prediction result
  const [predictionResult, setPredictionResult] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle prediction
  const handlePredict = async () => {
    try {
      // Validate inputs
      const isValid = Object.values(formData).every(value => value !== '');
      if (!isValid) {
        alert('Please fill in all fields');
        return;
      }

      // Convert inputs to numbers
      const numericFormData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [key, Number(value)])
      );

      // Here you would typically make an API call to your prediction service
      const response = await fetch('/api/predict-flood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(numericFormData)
      });

      if (!response.ok) {
        throw new Error('Prediction failed');
      }

      const result = await response.json();
      setPredictionResult(result);
    } catch (error) {
      console.error('Prediction error:', error);
      alert('Failed to get prediction');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Flood Prediction</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Input fields */}
          {Object.keys(formData).map((fieldName) => (
            <div key={fieldName} className="space-y-2">
              <label htmlFor={fieldName} className="block text-sm font-medium">
                {fieldName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </label>
              <Input
                type="number"
                id={fieldName}
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleInputChange}
                step="0.01"
                placeholder={`Enter ${fieldName.replace(/_/g, ' ')}`}
                className="w-full"
              />
            </div>
          ))}

          {/* Predict Button */}
          <Button 
            onClick={handlePredict} 
            className="w-full mt-4"
          >
            Predict Flood Risk
          </Button>

          {/* Prediction Result */}
          {predictionResult && (
            <div className="mt-4 p-3 bg-gray-100 rounded">
              <h3 className="font-semibold">Prediction Result</h3>
              <pre className="text-sm">{JSON.stringify(predictionResult, null, 2)}</pre>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FloodPredictionForm;