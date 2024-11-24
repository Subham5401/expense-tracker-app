import { useState } from 'react';
import Back from '../../assets/back.png';
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
      <div className='row d-flex align-items-center p-3'>
        <div className='col text-start'>
          <img src={Back} alt='back' />
        </div>
        <div className='col text-center style-add-header'>
          <span>Income</span>
        </div>
        <div className='col'></div>
      </div>

      <div className='row d-flex flex-column'>
        <div className='col text-start'>
          <input
            type='text'
            value={inputValue}
            onFocus={handleFocus}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='How much?'
          />
        </div>

        <div className='col text-start style-input-amount p-3'>
          <span>{`$${inputValue}` || '$0'}</span>
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
