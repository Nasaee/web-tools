import Navbar from './containers/Navbar/Navbar';
import Section from './containers/Section/Section';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Section />
      <button className="go-to-navbar">
        <a href="#">
          <AiOutlineArrowUp />
        </a>
      </button>
    </>
  );
}

export default App;
