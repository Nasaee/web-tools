import Navbar from './containers/Navbar/Navbar';
import Section from './containers/Section/Section';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const navgationHeight = document.querySelector('.navbar').offsetHeight;
    document.documentElement.style.setProperty(
      '--scroll-padding',
      navgationHeight - 1 + 'px'
    );
  }, []);

  return (
    <>
      <Navbar />
      <Section />
    </>
  );
}

export default App;
