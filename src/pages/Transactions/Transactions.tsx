import Footer from '../../components/Footer/Footer';
import Menu from '../../assets/menu.svg';
import Next from '../../assets/arrow_right.svg';
import Shop from '../../assets/shopping.svg';
import Salary from '../../assets/money.svg';
import Transportation from '../../assets/transportation.svg';
import './Transactions.css';

export default function Transactions() {
  return (
    <div className='container text-center'>
      <div className='row p-2 mt-3 d-flex align-items-center'>
        <div className='col text-start'>
          <div className='dropdown'>
            <button className='dropdown-toggle'>Month</button>
            <ul className='dropdown-menu'>
              <li>
                <a className='dropdown-item' href='#'>
                  Action
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col text-end'>
          <img src={Menu} alt='menu' className='menu-style' />
        </div>
      </div>
      <div className='row p-3 m-2 d-flex sec-header-style'>
        <div className='col text-start text-nowrap'>
          See your financial report
        </div>
        <div className='col d-flex justify-content-end'>
          <img src={Next} alt='next' />
        </div>
      </div>

      {/* implement scroll in the following div */}
      <div className='scroll'>
        <div className='row'>
          <div className='col m-3 text-start style-group-header'>Today</div>
        </div>

        <div className='row d-flex align-items-center style-transaction'>
          <div className='col-2'>
            <img src={Shop} alt='transaction' />
          </div>
          <div className='col-6 '>
            <div className='p-3 d-flex flex-column text-start'>
              <span>Shopping</span>
              <span className='font-color-light-grey text-nowrap'>
                Buy some grocery
              </span>
            </div>
          </div>
          <div className='col-4 d-flex flex-column text-end'>
            <span className='debit'>-$120</span>
            <span className='font-color-light-grey'>10:00 AM</span>
          </div>
        </div>

        <div className='row d-flex align-items-center style-transaction'>
          <div className='col-2'>
            <img src={Salary} alt='transaction' />
          </div>
          <div className='col-6 '>
            <div className='p-3 d-flex flex-column text-start'>
              <span>Salary</span>
              <span className='font-color-light-grey text-nowrap'>
                Salary for July
              </span>
            </div>
          </div>
          <div className='col-4 d-flex flex-column text-end'>
            <span className='credit'>+$5000</span>
            <span className='font-color-light-grey'>04:30 AM</span>
          </div>
        </div>

        <div className='row'>
          <div className='col m-3 text-start style-group-header'>Yesterday</div>
        </div>

        <div className='row d-flex align-items-center style-transaction'>
          <div className='col-2'>
            <img src={Transportation} alt='transaction' />
          </div>
          <div className='col-6 '>
            <div className='p-3 d-flex flex-column text-start'>
              <span>Transportation</span>
              <span className='font-color-light-grey text-nowrap'>
                Charging Tesla
              </span>
            </div>
          </div>
          <div className='col-4 d-flex flex-column text-end'>
            <span className='debit'>-$18</span>
            <span className='font-color-light-grey'>10:00 AM</span>
          </div>
        </div>

        <div className='row d-flex align-items-center style-transaction'>
          <div className='col-2'>
            <img src={Transportation} alt='transaction' />
          </div>
          <div className='col-6 '>
            <div className='p-3 d-flex flex-column text-start'>
              <span>Transportation</span>
              <span className='font-color-light-grey text-nowrap'>
                Charging Tesla
              </span>
            </div>
          </div>
          <div className='col-4 d-flex flex-column text-end'>
            <span className='debit'>-$18</span>
            <span className='font-color-light-grey'>10:00 AM</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
