import './App.css';
import Nav from './components/Nav';
import BurgerMenu from './components/BurgerMenu';
import About from './components/About';
import Projects from './components/Projects';
import MazeMakr from './components/MazeMakr';
import TajjMusicHall from './components/TajjMusicHall';

function App() {
  return (
    <div className="App">
      <Nav>
        <BurgerMenu/>
      </Nav>
      <About/>
      <Projects>
        <MazeMakr/>
        <TajjMusicHall/>
      </Projects>
    </div>
  );
}

export default App;
