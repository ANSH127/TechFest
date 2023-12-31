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
import Footer from './components/Footer';
import EventDetails from './pages/EventDetails';
import RegisterPage  from './pages/Register';
import NotFound from './components/404';
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
          <Route path="/event/:slug/" element={<EventDetails />} />
          <Route path="/sponser" element={<Sponser />} />
          <Route path="/register/:slug" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
