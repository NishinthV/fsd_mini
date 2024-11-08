// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UpcomingEvents from './components/UpcomingEvents';
import Clubs from './components/Clubs';
import ContactUs from './components/ContactUs';
import ClubList from './components/ClubList';
import ClubDetail from './components/ClubDetail';
import Footer from './components/Footer'; // Import Footer
import './styles.css'; // Import your CSS for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <a href="/">Home</a>
          <a href="/upcoming-events">Upcoming Events</a>
          <a href="/clubs">Clubs</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
        
        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/clubs" element={<ClubList />} /> {/* Use ClubList for listing all clubs */}
          <Route path="/club/:clubName" element={<ClubDetail />} /> {/* Route for individual club details */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        
        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
