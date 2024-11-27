import { useState } from 'react';
import Back from '../../assets/back_white.svg';
import NumberKeypad from '../NumberKeypad/NumberKeypad';
import './Add.css';

export default function Add() {
  const [inputValue, setInputValue] = useState<string>('');
  const [showKeypad, setShowKeypad] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleFocus = () => {
    setShowKeypad(true);
  };

  const handleCloseKeypad = () => {
    setShowKeypad(false);
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className='container'>
      <div className='row d-flex align-items-center pt-3'>
        <div className='col text-start'>
          <img src={Back} alt='back' />
        </div>
        <div className='col text-center style-add-header'>
          <span>Income</span>
        </div>
        <div className='col'></div>
      </div>

      <div className='row d-flex flex-column'>
        <div className='col text-start style-amt-head'>
          <span>How much?</span>
        </div>

        <div className='col text-start style-input-amount ps-3'>
          <span>$</span>
          <input
            type='text'
            value={inputValue}
            onFocus={handleFocus}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='0'
            className='style-input-amount'
          />
        </div>
      </div>
      {showKeypad && (
        <NumberKeypad
          onInputChange={handleInputChange}
          onClose={handleCloseKeypad}
          onClear={handleClear}
        />
      )}
    </div>
  );
}
