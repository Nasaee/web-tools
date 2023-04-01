import { useState, useContext, createContext, useEffect } from 'react';
import data from './data';

const Appcontext = createContext();

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLinksList, setNavLinksList] = useState([]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = data.map((navLink) => navLink.linkName);
  useEffect(() => {
    setNavLinksList(navLinks);
  }, []);

  return (
    <Appcontext.Provider
      value={{ isMenuOpen, setIsMenuOpen, openMenu, closeMenu, navLinksList }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};
