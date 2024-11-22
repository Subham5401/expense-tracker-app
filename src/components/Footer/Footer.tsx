import Home from '../../assets/home.svg';
import Transaction from '../../assets/transaction.svg';
import Chart from '../../assets/pie-chart.svg';
import User from '../../assets/user.svg';
import Add from '../../assets/add.svg';
import './Footer.css';

export default function Footer() {
  return (
    <div className='position-fixed bottom-0 start-0 w-100 footer'>
      <div className='row'>
        <div className='col d-flex flex-column align-items-center'>
          <img src={Home} alt='home' />
          <span className='menu-font-style'>Home</span>
        </div>
        <div className='col d-flex flex-column align-items-center'>
          <img src={Transaction} alt='transaction' />
          <span className='menu-font-style'>Transaction</span>
        </div>
        <div className='col d-flex flex-column align-items-center'>
          <img src={Add} alt='add' className='icon-add' />
        </div>
        <div className='col d-flex flex-column align-items-center'>
          <img src={Chart} alt='budget' />
          <span className='menu-font-style'>Budget</span>
        </div>
        <div className='col d-flex flex-column align-items-center'>
          <img src={User} alt='user' />
          <span className='menu-font-style'>Profile</span>
        </div>
      </div>
    </div>
  );
}
