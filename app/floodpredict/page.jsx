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

  // Prediction Logic
  const predictFloodRisk = (inputData) => {
    // Validate input data
    const requiredFields = [
      'total_slope', 
      'total_elevation', 
      'annual_rainfall_mm', 
      'flood_month', 
      'river_basin_width_km'
    ];

    // Check if all required fields are present
    for (const field of requiredFields) {
      if (!(field in inputData)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Risk calculation logic
    let riskScore = 0;
    let riskFactors = [];

    // 1. Rainfall Assessment
    if (inputData.annual_rainfall_mm > 2000) {
      riskScore += 30;
      riskFactors.push("High annual rainfall increases flood risk");
    } else if (inputData.annual_rainfall_mm > 1000) {
      riskScore += 15;
      riskFactors.push("Moderate annual rainfall contributes to flood potential");
    }

    // 2. Slope Analysis
    if (inputData.total_slope < 2) {
      riskScore += 25;
      riskFactors.push("Low slope increases water accumulation risk");
    } else if (inputData.total_slope < 5) {
      riskScore += 10;
      riskFactors.push("Moderate slope may impact water drainage");
    }

    // 3. Elevation Consideration
    if (inputData.total_elevation < 100) {
      riskScore += 20;
      riskFactors.push("Low elevation increases flood vulnerability");
    }

    // 4. Flood Month Assessment
    const highRiskMonths = [6, 7, 8, 9]; // Typical monsoon/hurricane months
    if (highRiskMonths.includes(inputData.flood_month)) {
      riskScore += 25;
      riskFactors.push("High-risk month for flooding");
    }

    // 5. River Basin Width
    if (inputData.river_basin_width_km > 10) {
      riskScore += 15;
      riskFactors.push("Wide river basin increases flood potential");
    }

    // Determine Risk Level
    let riskLevel = 'Low';
    let floodLikelihood = 'Minimal';

    if (riskScore > 70) {
      riskLevel = 'Very High';
      floodLikelihood = 'Extremely Likely';
    } else if (riskScore > 50) {
      riskLevel = 'High';
      floodLikelihood = 'Likely';
    } else if (riskScore > 30) {
      riskLevel = 'Moderate';
      floodLikelihood = 'Possible';
    } else if (riskScore > 10) {
      riskLevel = 'Low';
      floodLikelihood = 'Unlikely';
    }

    // Generate recommendations
    const recommendations = {
      'Very High': [
        "Immediate evacuation recommended",
        "Prepare emergency flood kit",
        "Contact local disaster management",
        "Move valuable items to higher ground"
      ],
      'High': [
        "Stay alert for flood warnings",
        "Prepare emergency supplies",
        "Have an evacuation plan ready",
        "Protect important documents"
      ],
      'Moderate': [
        "Monitor local weather updates",
        "Prepare basic emergency kit",
        "Clear drainage systems",
        "Review flood insurance"
      ],
      'Low': [
        "Stay informed about weather",
        "Maintain drainage around property",
        "Keep emergency contact numbers handy"
      ]
    };

    return {
      riskScore,
      riskLevel,
      floodLikelihood,
      riskFactors,
      recommendations: recommendations[riskLevel] || []
    };
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle prediction
  const handlePredict = () => {
    try {
      // Validate inputs
      const isValid = Object.values(formData).every(value => value !== '');
      if (!isValid) {
        alert('Please fill in all fields');
        return;
      }

      // Convert inputs to numbers
      const numericFormData = {
        total_slope: Number(formData.total_slope),
        total_elevation: Number(formData.total_elevation),
        annual_rainfall_mm: Number(formData.annual_rainfall_mm),
        flood_month: Number(formData.flood_month),
        river_basin_width_km: Number(formData.river_basin_width_km)
      };

      // Perform prediction
      const result = predictFloodRisk(numericFormData);
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
              <div className="space-y-2">
                <p><strong>Risk Level:</strong> {predictionResult.riskLevel}</p>
                <p><strong>Flood Likelihood:</strong> {predictionResult.floodLikelihood}</p>
                
                <div>
                  <strong>Risk Factors:</strong>
                  <ul className="list-disc list-inside">
                    {predictionResult.riskFactors.map((factor, index) => (
                      <li key={index}>{factor}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <strong>Recommendations:</strong>
                  <ul className="list-disc list-inside">
                    {predictionResult.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FloodPredictionForm;