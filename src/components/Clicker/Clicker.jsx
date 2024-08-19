import React from 'react';

function Clicker({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div className="clicker">
      <p className="clicker__amount">{counter}</p>
      <div className="buttons__container">
        <button className="button" role="button" onClick={onIncrement}>
          Ajouter
        </button>
        <button className={counter > 0 ? `button` : `button --disabled`} role="button" onClick={onDecrement}>
          Retirer
        </button>
      </div>
    </div>
  );
};

export default Clicker;
