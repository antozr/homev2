
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Project from './Page/Project';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Credit from './Page/Credit';
import ProjetPerso from './Page/ProjetPerso';
import ProjetDevcha from './Page/ProjetDevcha';
function App() {
  return (


    <div className="app">
      <Navbar />
      <Routes onUpdate={() => window.scrollTo(0, 0)}>

        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route exact path='/projet-perso' element={<ProjetPerso/>} />
        <Route path='/projet-scolaire' element={<Project />} />
        <Route path='/projet-devchalenge' element={<ProjetDevcha />} />
        <Route path="/credit" element={<Credit/>} />

      </Routes>
      <Footer />
    </div>

  );
}

export default App;
