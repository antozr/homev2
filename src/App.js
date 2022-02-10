
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
import OverlayProjet from './Page/OverlayProjet';
function App() {
  return (


    <div className="app">
      <Navbar />
      <Routes onUpdate={() => window.scrollTo(0, 0)}>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/:id' element={<OverlayProjet />} />
        <Route path='/about' element={<About />} />
        <Route exact path='/projet-perso' element={<ProjetPerso/>} />
        <Route exact path='/projet-perso/:id' element={<OverlayProjet />} />
        <Route path='/projet-scolaire' element={<Project />} />
        <Route exact path='/projet-scolaire/:id' element={<OverlayProjet />} />
        <Route path='/projet-devchalenge' element={<ProjetDevcha />} />
        <Route exact path='/projet-devchalenge/:id' element={<OverlayProjet />} />
        <Route path="/credit" element={<Credit/>} />

      </Routes>
      <Footer />
    </div>

  );
}

export default App;
