import './App.css';
import React from 'react';
import CountdownTimer from './CountdownTimer';

export default function App() {
  const TEN_SECONDS =  10 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const timeAfter = NOW_IN_MS + TEN_SECONDS;

  return (
    <div className='head'>
      <h1>Birthday Bash</h1>
      <CountdownTimer targetDate={timeAfter} />
    </div>
  );
}

