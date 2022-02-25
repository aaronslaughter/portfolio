import './App.css';
import { useState } from 'react'
import MobileNav from './components/MobileNav';
import Nav from './components/Nav'
import BurgerMenu from './components/BurgerMenu';
import BurgerMenuItems from './components/BurgerMenuItems';
import About from './components/About';
import Projects from './components/Projects';
import MazeMakr from './components/MazeMakr';
import TajjMusicHall from './components/TajjMusicHall';
import DispatchDashboard from './components/DispatchDashboard';
import SmartRockets from './components/SmartRockets';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {

  const [isActive, toggleActive] = useState(false)

  return (
    <div className="App">
      <nav>
        <MobileNav>
          <BurgerMenu
            isActive={isActive}
            toggleActive={toggleActive}
          />
          <BurgerMenuItems
            isActive={isActive}
            toggleActive={toggleActive}
          />
        </MobileNav>
        <Nav>
          <BurgerMenuItems
            isActive={true}
            toggleActive={toggleActive}
          />
        </Nav>
      </nav>
      <section className='main'>
        <About/>
        <Projects>
          <MazeMakr/>
          <TajjMusicHall/>
          <DispatchDashboard/>
          <SmartRockets/>
        </Projects>
        <Education/>
        <Skills/>
      </section>
    </div>
  );
}

export default App;
