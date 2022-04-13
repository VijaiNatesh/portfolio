import React from 'react'
import styles from '../../src/myStyles.module.css'


function About() {
    return (
        <div >
            <h1 className={styles.aboutHead}>About Me</h1>
            <div className={styles.aboutDisplay}>             
                <div className = {styles.aboutContent} >
                <p>A Full Stack Developer
           Passionate about building web applications that are performant, accessible and have a great user experience.
                 I started coding in 2021 after decided to switch my career from teaching to IT sector.
                I joined Guvi(IIT Madras) to learn MERN Stack.
                I had build some basic websites and explored difficulties while building the websites.
                Now, I'm seeking an opportunity in an organization to expose my skills and to contribute the organization's success.
           
                Outside of work I love playing cricket, watching cricket and being outdoors.</p>
                <a href="https://drive.google.com/file/d/1Tv_smUJV8ZYOtdNF0cXZ55nuh_XZLQ7E/view?usp=sharing" target="_blank" title="Click to view my Resume" rel="noreferrer"><button className={styles.resume}>Resume</button> </a>
                </div>
            </div>
        </div>
    )
}

export default About
