import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const stopCounter = () => {
    setIsRunning(false);
  };

  const startCounter = () => {
    setIsRunning(true);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={stopCounter}>Parar Contador</button>
      <button onClick={startCounter} disabled={isRunning}>Iniciar Contador</button>
    </div>
  );
};

export default Counter;
