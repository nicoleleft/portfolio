import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'
import Github from '../assets/Github.svg'
import Linkedin from '../assets/Linkedin.svg'
import { useState } from 'react'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Header() {
    
    const [showLinks, setShowLinks] = useState(false);
    
    return (
        <nav className="nav">
            <span className='logo-header-name'>
                <a href="/">
                    <img src={logo} alt='Logo' className="logo" />
                    <h2 className='header-name'>Nicole Estelle Wright</h2>
                </a>
            </span>
            <span className='nav-links'>
                <button onClick={() => setShowLinks(!showLinks)}>
                    <img src={hamburger} alt='Hamburger'/>
                </button>
                <ul id={showLinks ? "hidden" : ""}>
                    <li>
                        <Link 
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80} 
                            href="/about"
                            >
                            About
                        </Link>
                    </li>
                    <li>
                    <Link 
                        to="projects"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80} 
                        href="/projects"
                        >
                        Projects
                        </Link>
                    </li>
                    <li>
                    <Link 
                        to="resume"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80} 
                        href="/resume"
                        >
                        Resume
                        </Link>
                    </li>
                    <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80} 
                        href="/contact"
                        >
                        Contact
                        </Link>
                    </li>
                </ul>
            </span>
            <span className='nav-logos'>
                <ul>
                    <a href='https://github.com/nicoleleft'>
                        <img src={Github} alt='github' className='nav-icons git'></img>
                    </a>
                    <a href='https://www.linkedin.com/in/nicole-estelle-wright-1038021a3/'>
                            <img src={Linkedin} alt='linkedin' className='nav-icons'></img>
                    </a>  
                </ul>    
            </span>
                       
        </nav>
    )
}