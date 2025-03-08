import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Trainers />
              <Membership />
              <LocationMap />
              <Contact />
              <ChatBot />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;