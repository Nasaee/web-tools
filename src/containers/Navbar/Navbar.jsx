import './Navbar.css';
import NavList from '../../components/NavList/NavList';
import webIcon from '../../assets/web-icon/web-icon.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { useGlobalContext } from '../../context';
import Menu from '../../components/Munu/Menu';

const Navbar = () => {
  const { isMenuOpen, openMenu } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="web-icon-container">
        <a href="#">
          <img src={webIcon} alt="" className="web-icon" />
        </a>
        <button className="open-menu-btn" onClick={openMenu}>
          <AiOutlineMenu />
        </button>
        {isMenuOpen && <Menu />}
      </div>
      <NavList />
    </nav>
  );
};
export default Navbar;
