import React from 'react'
import { Nav } from 'react-bootstrap'
import styles from '../../src/myStyles.module.css'
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Navigation() {
    return (
        <>
        <div className={styles.navHead}>
        <h1 className = {styles.navName}>Vijayakumar</h1>                  
               
                    <Nav className={styles.navOri}>
                        <Nav.Link className={styles.navTab} href="#home">Home</Nav.Link>
                        <Nav.Link className={styles.navTab} href="#about">About</Nav.Link>
                        <Nav.Link className={styles.navTab} href="#skills">Skills</Nav.Link>
                        <Nav.Link className={styles.navTab} href="#projects">Projects</Nav.Link>
                        <Nav.Link className={styles.navTab} href="#contact">Contact Me</Nav.Link>                        
                    </Nav>                  
       
        </div >
        <div id = 'home' ><Home/></div>
        <div id = 'about'><About/></div>        
        <div id = 'skills'><Skills/></div>
        <div id = 'projects'><Projects/></div>
        <div id = 'contact'><Contact/></div>
        </>

    )
}

export default Navigation
