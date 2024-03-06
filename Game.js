// components/Game.js
import React, { useState } from 'react';

function Game() {
  const [balloonSize, setBalloonSize] = useState(20);
  const [message, setMessage] = useState('');
  const [popped, setPopped] = useState(false);

  const pumpBalloon = () => {
    if (popped) return;
    if (balloonSize < 100) {
      setBalloonSize(balloonSize + 10);
    } else {
      setMessage('Balloon popped!');
      setPopped(true);
    }
  };

  const resetGame = () => {
    setBalloonSize(20);
    setMessage('');
    setPopped(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4">Balloon Popping Game</h2>
      <div className="mb-4">
        <div
          className="w-20 h-40 bg-red-500 rounded-full

