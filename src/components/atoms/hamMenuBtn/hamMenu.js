import MenuIcon from '@mui/icons-material/Menu';
import './hamMenu.css'
import NavLinks from '../../molecules/navlinks/navlinks';
import { useState } from 'react';

export default function MenuBtn(){

  const [showMenu, setShowMenu] = useState(false);

  function showHamburgerMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className='hammenu'>
      <MenuIcon className='menuBar' onClick={showHamburgerMenu} /> 
      <NavLinks className={`header-list ${showMenu ? 'show' : ''}`} />
    </div>
  );
}
