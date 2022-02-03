
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Project from './Page/Project';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (


    <div className="app">
      <Navbar />
      <Routes >

        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project-perso' element={<Project />} />
        <Route path='/projet-scolaire' element={<Project />} />

      </Routes>
      <Footer />
    </div>

  );
}

export default App;
