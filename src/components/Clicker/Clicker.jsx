import React from 'react';

function Clicker({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div className="clicker">
      <p className="clicker__amount" data-info="clickerAmount">{counter}</p>
      <div className="buttons__container">
        <button className="button" role="button" data-action="increment" onClick={onIncrement}>
          Ajouter
        </button>
        <button className={counter > 0 ? `button` : `button --disabled`} role="button" data-action="decrement" onClick={onDecrement}>
          Retirer
        </button>
      </div>
    </div>
  );
};

export default Clicker;
