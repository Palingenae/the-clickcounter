import React from 'react';

function Clicker({
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

export default Clicker;
