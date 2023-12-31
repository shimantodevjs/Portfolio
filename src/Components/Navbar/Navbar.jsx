import './Navbar.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, Close } from '@mui/icons-material';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 1023) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='right'>
          <Link to='hero' 
                smooth={true} 
                duration={500} 
                className='link'
                onClick={menuOpen ? handleMenuToggle : ""}
                >
            Nahid Hasan
          </Link>
        </div>
        <div className={menuOpen ? 'left-mobile open' : 'left'}>
          <Link to='about' smooth={true} duration={500}  className='link' onClick={     menuOpen ? handleMenuToggle : ""}>
            About
          </Link>
          <Link to='skills' smooth={true} duration={500} offset={-50} className='link' onClick={menuOpen ? handleMenuToggle : ""}>
            Skills
          </Link>
          <Link to='projects' smooth={true} duration={500} offset={-50} className='link' onClick={menuOpen ? handleMenuToggle : ""}>
            Projects
          </Link>
          <Link to='contact' smooth={true} duration={500} offset={-50} className='link' onClick={menuOpen ? handleMenuToggle : ""}>
            Contacts
          </Link>
        </div>
        <div className='menu' onClick={handleMenuToggle}>
            {menuOpen ? <Close style={{ fontSize: '2.5rem' }} /> : <Menu style={{ fontSize: '2.5rem' }} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;



