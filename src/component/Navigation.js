import React from 'react'
import { Nav, DropdownButton, Dropdown } from 'react-bootstrap'
import styles from '../../src/myStyles.module.css'
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Navigation() {
    return (
        <div>
            
                <Nav className={styles.navbck} >
                    <Nav.Link className={styles.navHead} href="#home">Home</Nav.Link>
                    <Nav.Link className={styles.navHead} href="#about">About</Nav.Link>
                    <Nav.Link className={styles.navHead} href="#skills">Skills</Nav.Link>
                    <Nav.Link className={styles.navHead} href="#projects">Projects</Nav.Link>
                    <Nav.Link className={styles.navHead} href="#contact">Contact</Nav.Link>
                </Nav>
            
            <DropdownButton className={styles.navMob} title="▼" >
                <Dropdown.Item className={styles.navTab} href="#home">Home</Dropdown.Item><br />
                <Dropdown.Item className={styles.navTab} href="#about">About</Dropdown.Item><br />
                <Dropdown.Item className={styles.navTab} href="#skills">Skills</Dropdown.Item><br />
                <Dropdown.Item className={styles.navTab} href="#projectss">Projects</Dropdown.Item><br />
                <Dropdown.Item className={styles.navTab} href="#contact">Contact Me</Dropdown.Item>
            </DropdownButton>


            <div id='home' ><Home /></div>
            <div id='about'><About /></div>
            <div id='skills'><Skills /></div>
            <div id='projects'><Projects /></div>
            <div id='contact'><Contact /></div>
        </div>

    )
}

export default Navigation
