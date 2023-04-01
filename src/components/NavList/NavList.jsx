import './NavList.css';
import { useGlobalContext } from '../../context';

const NavList = () => {
  const { navLinksList } = useGlobalContext();
  return (
    <ul className="links ">
      {navLinksList.map((nav, i) => {
        return (
          <li className="link" key={i}>
            <a href={`#${nav}`}>{nav}</a>
          </li>
        );
      })}
    </ul>
  );
};
export default NavList;
