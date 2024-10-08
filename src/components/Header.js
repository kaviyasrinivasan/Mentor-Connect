// // components/Header.js
// import React from 'react';
// import './styles/styles.css'; 
// import logo from '../logo.jpg';
// import { Link } from 'react-router-dom';
// import CalendarScheduler from './CalendarScheduler';

// const Header = ({ loggedIn }) => {
//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <img src={logo} alt="Mentor Connect Logo" className="logo-img" />
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>       
//         <li><a href="#features">Features</a></li>
//         <li><a href="#about">About</a></li> 
//         <li><Link to="/calendar-scheduler">Calendar</Link></li> 
//         <li><a href="#footer">Contact</a></li>
//         {/* {loggedIn ? (
//           <>
//             <li><Link to="/calendarScheduler">Calendar</Link></li>
//             <button className='cta-btn'><Link to="/">Logout</Link></button> 
//           </>
//         ) : (
//           // <button className='cta-btn'><Link to="/Loginselect">Login</Link></button>
//         )} */}
//       </ul>
//     </nav>
//   );
// };

// export default Header;
// components/Header.js
import React, { useEffect } from 'react';
import './styles/styles.css'; 
import logo from '../logo.jpg';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ loggedIn }) => {
  const location = useLocation();

  useEffect(() => {
    // You can trigger animations manually here if needed.
    const sectionId = location.hash ? location.hash.substring(1) : null;
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Mentor Connect Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>       
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li> 
        {/* <li><Link to="/calendar-scheduler">Calendar</Link></li>  */}
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;
