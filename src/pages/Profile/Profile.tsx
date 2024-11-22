import Footer from '../../components/Footer/Footer';
import Acc from '../../assets/account_icon.svg';
import Set from '../../assets/settings_icon.svg';
import Export from '../../assets/export_icon.svg';
import Logout from '../../assets/log-out_icon.svg';
import Edit from '../../assets/edit_icon.svg';
import ProfilePic from '../../assets/myPic.png';
import './Profile.css';

export default function Profile() {
  return (
    <div className='container text-center'>
      <div className='row d-flex align-items-center mb-4 mt-4 p-2'>
        <div className='col text-start d-flex align-items-center'>
          <img src={ProfilePic} className='rounded-circle profile-pic' />
          <div className='col d-flex flex-column text-start p-2'>
            <span className='font-color-light-grey'>Username</span>
            <span className='header-font-style text-nowrap'>Subham Mishra</span>
          </div>
        </div>
        <div className='col text-end'>
          <img src={Edit} />
        </div>
      </div>
      <div className='row profile-body-style rounded-top-left-right'>
        <div className='col-2 p-3 text-start d-flex align-items-center'>
          <img src={Acc} alt='icon' />
          <span className='p-2'>Account</span>
        </div>
      </div>
      <div className='row profile-body-style'>
        <div className='col-2 p-3 text-start d-flex align-items-center'>
          <img src={Set} alt='icon' />
          <span className='p-2'>Settings</span>
        </div>
      </div>
      <div className='row profile-body-style'>
        <div className='col-2 p-3 text-start d-flex align-items-center'>
          <img src={Export} alt='icon' />
          <span className='p-2 text-nowrap'>Export Data</span>
        </div>
      </div>
      <div className='row profile-body-style rounded-bottom-left-right'>
        <div className='col-2 p-3 text-start d-flex align-items-center'>
          <img src={Logout} alt='icon' />
          <span className='p-2'>Logout</span>
        </div>
      </div>
    </div>
  );
}
