import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { AiFillDashboard, AiFillHome, AiFillSpotify, AiOutlineAudit } from 'react-icons/ai'
import { MdHelpOutline } from 'react-icons/md'
import { FiSun, FiMoon } from 'react-icons/fi'
import { MdOutlineMenu } from "react-icons/md";


function Sidebar() {

  const aside = document.querySelector('.sidebar');
  const root = document.documentElement;
  

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  const [hamburgerOpen, setHamburgerOpen] = useState(() => {
    return window.innerWidth > 768;
  });

  const toggleHamburger = () => {
    if(window.innerWidth <= 768) {
      setHamburgerOpen(!hamburgerOpen);
    }
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setHamburgerOpen(true);
      } else {
        setHamburgerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [darkMode])

  return (
    <>
    <div className="ham-button" onClick={toggleHamburger}><MdOutlineMenu id="hambutton" size={24}/></div>

    <aside className={hamburgerOpen ? "sidebar" : "sidebar-inactive"} >

      <h1 className="logo">WebCraft</h1>
      
      <nav className="nav-links">
        <NavLink to="/" onClick={toggleHamburger} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <AiFillHome className='react-logo' />
          <span className='nav-text'>Home</span>
        </NavLink>
        <NavLink to="/mentor" onClick={toggleHamburger} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <AiOutlineAudit className='react-logo' />
          <span className='nav-text'>Mentor</span>
        </NavLink>
        <NavLink to="/submission-guide" onClick={toggleHamburger} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <MdHelpOutline className='react-logo' />
          <span className='nav-text'>How to Submit?</span>
        </NavLink>
        
      </nav>
      <button 
        className="toggle-btn" 
        onClick={() => setDarkMode(prev => !prev)}
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <div className="theme-toggle-switch">
          <FiMoon className='moon-icon' />
          <FiSun className='sun-icon' />
          <div className="toggle-ball"></div>
        </div>
      </button>
    </aside></>
  )
}

export default Sidebar
