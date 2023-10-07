import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Event from './pages/Event';
import Sponser from './pages/Sponser';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/sponser" element={<Sponser />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
