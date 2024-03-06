// components/Game.js
import React, { useState } from 'react';

function Game() {
  const [balloonSize, setBalloonSize] = useState(0);

  const pumpBalloon = () => {
    if (balloonSize < 100) {
      setBalloonSize(balloonSize + 10);
    } else {
      // Balloon pops
      alert('Oops! The balloon popped!');
      setBalloonSize(0);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative">
        <div className="bg-red-500 w-20 h-40 rounded-full absolute bottom-0" style={{ height: `${100 + balloonSize}px` }}></div>
        <button onClick={pumpBalloon} className="bg-blue-500 text-white px-4 py-2 rounded absolute bottom-0 left-1/2 transform -translate-x-1/2">Pump Balloon</button>
      </
