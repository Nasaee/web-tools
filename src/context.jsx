import { useState, useContext, createContext, useEffect } from 'react';
import data from './data';

const Appcontext = createContext();

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLinksList, setNavLinksList] = useState([]);
  // const [navHeight, setNavHeight] = useState(0);
  // const [mainElement, setMainElement] = useState();

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

  // useEffect(() => {
  //   const navHeight = document
  //     .querySelector('.navbar')
  //     .getBoundingClientRect().height;
  //   setNavHeight(navHeight);
  // }, []);

  // useEffect(() => {
  //   const main = document.getElementsByTagName('main')[0];
  //   setMainElement(main);
  // }, []);

  return (
    <Appcontext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        openMenu,
        closeMenu,
        navLinksList,
        // navHeight,
        // mainElement,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};
