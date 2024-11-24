import React from 'react';
import './NumberKeypad.css';

type NumberKeypadProps = {
  onInputChange: (value: string) => void;
  onClose: () => void;
  onClear: () => void;
};

const NumberKeypad: React.FC<NumberKeypadProps> = ({
  onInputChange,
  onClose,
  onClear,
}) => {
  const handleClick = (value: string) => {
    onInputChange(value);
  };

  return (
    <div className='container keypad'>
      <div className='keypad-buttons'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}
      </div>
      <div className='keypad-actions'>
        <button onClick={onClear}>Clear</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NumberKeypad;
