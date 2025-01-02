import './App.css';
import Header from './Components/Header/Header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import Refs from './Components/Refs/Refs.jsx';
import Goals from './Components/Goals/Goals.jsx';
import Information from './Components/Information/Information.jsx';

function App() {
  //TODO: анимацию для лого при наведении
  return (
    <>
      <Header />
      <Hero />
      <Refs />
      <Goals />
      <AboutUs />
      <Information />
    </>
  )
}

export default App
