import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import styles from '../../src/myStyles.module.css'



function Navigation() {
    return (
        <div>
            <>
                <div > 
                    <Navbar className={styles.navBar}>
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link className={styles.navButton} href="/">Home</Nav.Link>
                                <Nav.Link className={styles.navButton} href="/about">About</Nav.Link>
                                <Nav.Link className={styles.navButton} href="/skills">Skills</Nav.Link>
                                <Nav.Link className={styles.navButton} href="/projects">Projects</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <h2 className={styles.navName}>Vijayakumar</h2>
                </div>
            </>           
          
        </div>
    )
}

export default Navigation
