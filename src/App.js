import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Contact from './components/Contact';
import BootCamps from './components/BootCamps';
import BootCampName from './components/BootCampName';
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='bootcamps' element={<BootCamps />} />
        <Route path='/bootcamps/:name' element={<BootCampName />} />
        <Route path='contact' element={<Contact />} />

      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
