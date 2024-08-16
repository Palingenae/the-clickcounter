import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={onIncrement}>
        Ajouter
      </button>
      <button onClick={onDecrement}>
        Retirer
      </button>
    </div>
  );
};

export default Home;
