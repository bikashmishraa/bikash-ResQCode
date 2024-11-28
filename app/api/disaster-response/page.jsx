import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, X } from 'lucide-react';
import axios from 'axios';
import OpenAI from 'openai';

const DisasterResponseChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Welcome to Disaster Response Support. How can we help you during this emergency?", 
      sender: 'bot' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize OpenAI client
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // Note: Not recommended for production
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // User message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };

    // Update messages and clear input
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Call NLP and AI-powered response generation
      const botResponse = await generateAIResponse(inputMessage);
      
      // Add bot response to messages
      setMessages(prevMessages => [
        ...prevMessages, 
        {
          id: prevMessages.length + 2,
          text: botResponse,
          sender: 'bot'
        }
      ]);
    } catch (error) {
      // Fallback error message
      setMessages(prevMessages => [
        ...prevMessages, 
        {
          id: prevMessages.length + 2,
          text: "I'm sorry, but I'm experiencing difficulties. Please try again or contact emergency services directly.",
          sender: 'bot'
        }
      ]);
      console.error('Response generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateAIResponse = async (userInput) => {
    // Combine multiple AI and backend integration strategies
    try {
      // 1. NLP Entity Extraction (simulated)
      const nlpEntities = await extractNLPEntities(userInput);

      // 2. Backend Disaster Response System Check
      const backendSystemResponse = await checkDisasterResponseSystem(nlpEntities);
      if (backendSystemResponse) return backendSystemResponse;

      // 3. OpenAI/Claude AI Response Generation
      const aiResponse = await generateOpenAIResponse(userInput, nlpEntities);
      
      return aiResponse;
    } catch (error) {
      console.error('AI Response Generation Error:', error);
      return "I'm processing your request. Emergency services are on standby.";
    }
  };

  // Mock NLP Entity Extraction
  const extractNLPEntities = async (text) => {
    // In a real implementation, use services like Google NLP, AWS Comprehend, etc.
    const entities = {
      emergencyType: detectEmergencyType(text),
      location: detectLocation(text),
      urgency: detectUrgency(text)
    };
    return entities;
  };

  // Mock Backend Disaster Response System Integration
  const checkDisasterResponseSystem = async (entities) => {
    try {
      const response = await axios.post('/api/disaster-response', { entities });
      return response.data.immediateInstructions || null;
    } catch (error) {
      console.error('Backend system error:', error);
      return null;
    }
  };

  // OpenAI Response Generation
  const generateOpenAIResponse = async (userInput, entities) => {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system", 
            content: `You are an AI assistant for disaster response. 
            Provide clear, concise, and actionable information. 
            Current emergency context: ${JSON.stringify(entities)}`
          },
          { role: "user", content: userInput }
        ],
        max_tokens: 150,
        temperature: 0.7
      });

      return completion.choices[0].message.content || 
        "I understand you need help. Emergency services are ready to assist you.";
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return "emergency support is being coordinated. Stay calm and follow local guidelines.";
    }
  };

  // Utility functions for entity detection
  const detectEmergencyType = (text) => {
    const emergencyKeywords = {
      'flood': ['flood', 'water', 'rising water'],
      'fire': ['fire', 'burning', 'smoke'],
      'earthquake': ['earthquake', 'shaking', 'ground'],
      'hurricane': ['hurricane', 'storm', 'wind']
    };

    for (const [type, keywords] of Object.entries(emergencyKeywords)) {
      if (keywords.some(keyword => text.toLowerCase().includes(keyword))) {
        return type;
      }
    }
    return 'general';
  };

  const detectLocation = (text) => {
    // Basic location detection (can be replaced with more sophisticated NER)
    const locationRegex = /\b(in|at)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\b/;
    const match = text.match(locationRegex);
    return match ? match[2] : 'unknown';
  };

  const detectUrgency = (text) => {
    const urgentKeywords = ['emergency', 'help', 'urgent', 'now', 'immediate'];
    return urgentKeywords.some(keyword => text.toLowerCase().includes(keyword)) 
      ? 'high' 
      : 'medium';
  };

  // Rest of the component remains the same as previous implementation
  return (
    // ... (previous render logic remains unchanged)
  );
};

export default DisasterResponseChatbot;