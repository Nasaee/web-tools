import './Menu.css';
import { useGlobalContext } from '../../context';
import { VscChromeClose } from 'react-icons/vsc';

const Menu = () => {
  const { isMenuOpen, closeMenu, navLinksList } = useGlobalContext();
  return (
    <div className={`menu-container ${isMenuOpen && 'open-menu'}`}>
      <div className="menu">
        <ul className="menu-links">
          {navLinksList.map((nav) => {
            return (
              <li className="menu-link">
                <a href={`#${nav}`} onClick={closeMenu}>
                  {nav}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="close-menu-btn" onClick={closeMenu}>
          <VscChromeClose />
        </button>
      </div>
    </div>
  );
};
export default Menu;
