import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { GoogleGenerativeAI, HarmBlockThreshold } from '@google/generative-ai';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API key not found');
      }
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-1.5-flash',
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
        ],
      });

      const prompt = `
        You are a helpful gym assistant for PowerFit Gym in Surat, Gujarat. 
        Use this context for answers:
        - Location: 123 Ring Road, Adajan, Surat, Gujarat 395009
        - Contact: +91 98765 43210
        - Features: 24/7 access, expert trainers, modern equipment
        - Membership plans: Basic (₹2,999/month), Premium (₹4,999/month), Elite (₹7,999/month)
        - Facilities: Modern equipment, cardio zone, strength training area, group fitness studio, personal training
        - Operating hours: 24/7 access for members
        - Classes: Yoga, Zumba, HIIT, CrossFit, Spinning
        
        Provide a helpful, friendly response to this question about our gym: ${userMessage}
        
        Keep responses concise but informative. If you're not sure about specific details, 
        suggest that the user contact the gym directly at +91 98765 43210 for the most accurate information.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (!text || text.trim().length === 0) {
        throw new Error('Empty response from AI');
      }

      setMessages(prev => [...prev, { text, isBot: true }]);
    } catch (error) {
      console.error('Chatbot error:', {
        message: error.message,
        code: error.code,
        status: error.status,
        stack: error.stack
      });
      const errorMessage = error.message.includes('network') 
        ? "Please check your internet connection and try again."
        : error.message.includes('API key')
        ? "Configuration error: Please contact gym support"
        : error.message.includes('Insufficient response')
        ? "Received incomplete response from gym assistant"
        : "Our gym assistants are busy. Please try again in a moment.";
      
      setMessages(prev => [...prev, { 
        text: errorMessage, 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-4 bg-red-600 text-white rounded-t-lg">
            <h3 className="font-semibold">PowerFit Assistant</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500">
                👋 Hi! Ask me anything about PowerFit Gym's memberships, facilities, or services!
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100'
                      : 'bg-red-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  Typing...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our gym..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;