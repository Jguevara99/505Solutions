import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import ContryDropdown from '../CountryDropdown/ContryDropdown.jsx';
import { IoIosSearch } from "react-icons/io";
import  Button  from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox/SearchBox.jsx';
import Navigation from './Navigations/Navigation.jsx';
import { MyContext } from '../../App.jsx';
import { useContext } from 'react';

const Header = () => {

  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Hola <b>xxx</b> hola
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center  col-sm-2">
               <Link to={'/'}><img src={Logo} style={{ marginLeft: 0 }}  alt='Logo'/></Link>
              </div>

              <div className='col-sm-10 d-flex align-items-center part2'>
                 
                 {
                  context.countryList.length !==0 &&  <ContryDropdown/>
                 }
                
                 <SearchBox/>

                 <div className='part3 d-flex align-items-center ml-auto'>
                    <Button className='circle mr-3'><FiUser/></Button>
                    <div className='ml-auto cartTab d-flex align-items-center'>
                      <span className='price'>C$300</span>
                      <div className='position-relative ml-2'>
                       <Button className='circle'><IoBagOutline/></Button>
                       <span className='count d-flex align-items-center justify-content-center'>1</span>
                      </div>

                    </div>
                 </div>

              </div>
            </div>
          </div>
        </header>

       <Navigation/>

      </div>
    </>
  );
};

export default Header;
