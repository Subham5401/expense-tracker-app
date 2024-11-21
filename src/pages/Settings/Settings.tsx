import Back from '../../assets/back.png';
import Next from '../../assets/arrow_right.svg';
import './Settings.css';

export default function Settings() {
  return (
    <div className='container text-center'>
      <div className='row p-3 d-flex align-items-center'>
        <div className='col text-start'>
          <img src={Back} alt='back' />
        </div>
        <div className='col header-font-style'>Settings</div>
        <div className='col'></div>
      </div>
      <div className='row p-3'>
        <div className='col text-start'>Currency</div>
        <div className='col d-flex justify-content-end'>
          <span className='font-color-light-grey'>USD</span>
          <img src={Next} alt='next' />
        </div>
      </div>
      <div className='row p-3'>
        <div className='col text-start'>Language</div>
        <div className='col d-flex justify-content-end'>
          <span className='font-color-light-grey'>English</span>

          <img src={Next} alt='next' />
        </div>
      </div>
      <div className='row p-3'>
        <div className='col text-start'>Theme</div>
        <div className='col d-flex justify-content-end'>
          <span className='font-color-light-grey'>Dark</span>
          <img src={Next} alt='next' />
        </div>
      </div>
      <div className='row p-3'>
        <div className='col text-start'>Security</div>
        <div className='col d-flex justify-content-end'>
          <span className='font-color-light-grey'>Fingerprint</span>
          <img src={Next} alt='next' />
        </div>
      </div>
      <div className='row p-3'>
        <div className='col text-start'>Notification</div>
        <div className='col d-flex justify-content-end'>
          <img src={Next} alt='next' />
        </div>
      </div>
      <br />
      <br />
      <div className='row p-3'>
        <div className='col text-start'>About</div>
        <div className='col d-flex justify-content-end'>
          <img src={Next} alt='next' />
        </div>
      </div>
      <div className='row p-3'>
        <div className='col text-start'>Help</div>
        <div className='col d-flex justify-content-end'>
          <img src={Next} alt='next' />
        </div>
      </div>
    </div>
  );
}
